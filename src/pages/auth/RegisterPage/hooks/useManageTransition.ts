import { passwordSchema, emailOrPhoneSchema } from '../../../../../validationSchemas.ts'
import { useFormik, FormikHelpers } from 'formik'
import { useMemo } from 'react'
import { checkLoginThunk, registerUserThunk } from '@/entities/user/model/store/auth/authThunks.ts'
import { AvatarItem, QuestionItem } from './useManageSelection.ts'

type RegistrationLevel = number

/**
 * Переход на следующий уровень регистрации.
 * @param level - Текущий уровень.
 * @param setLevel - Функция для обновления уровня.
 */
export function handleNext(level: RegistrationLevel, setLevel: (value: RegistrationLevel) => void) {
  // Увеличивает уровень
  if (level >= 4) {
    setLevel(level + 1)
  }
}

interface FormValues {
  emailOrPhone: string
  password: string
  agreeToTerms: boolean
}

interface UseFormikRegisterParams {
  level: RegistrationLevel
  setLevel: (level: RegistrationLevel) => void
  avatars: AvatarItem[]
  questions: QuestionItem[]
  dispatch: any
  error: string | null
  setIsError: (value: boolean) => void
  setPassword: (value: string) => void
  password: string
  login: string
  setlogin: (value: string) => void
  navigator: (path: string) => void
}

/**
 * Кастомный хук Formik для управления состоянием формы регистрации и переходами.
 */
export function useFormik_Register({
  level,
  setLevel,
  avatars,
  questions,
  dispatch,
  setIsError,
  setPassword,
  password,
  login,
  setlogin,
  navigator,
}: UseFormikRegisterParams) {
  // Настройка Formik с динамической схемой валидации на основе текущего уровня.

  return useFormik<FormValues>({
    initialValues: {
      emailOrPhone: '',
      password: '',
      agreeToTerms: false,
    },
    validationSchema: useMemo(() => {
      if (level === 0) return emailOrPhoneSchema // Проверка email или номера телефона.
      if (level === 1) return passwordSchema // Проверка пароля.
      return null // Нет проверки для других уровней.
    }, [level]),
    onSubmit: async (values, formikHelpers: FormikHelpers<FormValues>) => {
      const { setSubmitting, setErrors } = formikHelpers

      if (level === 0) {
        // Проверка email на сервере
        if (values.agreeToTerms) {
          try {
            const data = await dispatch(checkLoginThunk(values.emailOrPhone)).unwrap()
            if (data.status === 'success') {
              if (data.isLogin) {
                setErrors({ emailOrPhone: 'Login занят' })
              } else {
                setlogin(values.emailOrPhone)
                setLevel(1) // Переход на ввод пароля
              }
            }
          } catch (error) {
            console.error('Error login: ', error)
            setErrors({ emailOrPhone: 'Login занят' })
          }
        } else {
          setErrors({ agreeToTerms: 'Необходимо согласиться с условиями' })
        }
      } else if (level === 1) {
        setPassword(values.password)
        setLevel(2) // Переход к выбору аватара.
      } else if (level === 2) {
        // Проверка выбранного аватара
        if (!avatars.some((item) => item.chosen)) {
          setIsError(true)
        } else {
          setIsError(false)
          setLevel(3) // Переход к ответу на вопросы
        }
      } else if (level === 3) {
        // Проверка ответов на вопросы
        if (!questions.some((item) => item.answer)) {
          setIsError(true)
        } else {
          setIsError(false)
          setLevel(4) // Переход к завершению регистрации
          // Завершение регистрации: отправка данных на сервер
          try {
            const data = await dispatch(
              registerUserThunk({
                login,
                password,
                avatar: filterAvatar(avatars),
                questions: filterQuestions(questions),
              }),
            ).unwrap()

            if (data.token) {
              window.setTimeout(() => {
                navigator('/')
              }, 2500)
            } else {
              setErrors({ emailOrPhone: 'Произошла ошибка. Попробуйте снова' })
              setLevel(0)
            }
          } catch (error) {
            console.error('Error register: ', error)
            setErrors({ emailOrPhone: 'Произошла ошибка. Попробуйте снова' })
            setLevel(0)
          }
        }
        setSubmitting(false)
      }
    },
  })
}

// Фильтрация выбранного аватара
function filterAvatar(avatars: AvatarItem[]): string {
  let result = ''
  avatars.forEach((item) => {
    if (item.chosen) {
      result = item.avatar
    }
  })
  return result
}

function filterQuestions(q: QuestionItem[]): string[] {
  const result = new Set<string>()
  q.forEach((item) => {
    if (item.answer) {
      result.add(item.question)
    }
  })
  return Array.from(result)
}
