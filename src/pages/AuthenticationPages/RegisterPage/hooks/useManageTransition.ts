import { passwordSchema, emailOrPhoneSchema } from '@/../validationSchemas.ts'
import { useFormik, FormikHelpers, FormikProps } from 'formik'
import { useMemo } from 'react'
import { checkLoginThunk, registerUserThunk } from '@/entities/user/store/auth/authThunks'
import { AvatarItem, QuestionItem } from './useManageSelection'

type RegistrationLevel = number

/**
 * Переход на следующий уровень регистрации.
 * @param level - Текущий уровень.
 * @param setLevel - Функция для обновления уровня.
 */
export function handleNext(level: RegistrationLevel, setLevel: (value: RegistrationLevel) => void) {
  // Увеличивает уровень до максимума 5.
  if (level >= 5) {
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
  error,
  setIsError,
  setPassword,
  password,
  login,
  setlogin,
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
              setlogin(values.emailOrPhone)
              setLevel(1) // Переход на ввод пароля
            } else {
              setErrors({ emailOrPhone: 'Login занят' })
            }
          } catch (error) {
            setErrors({ emailOrPhone: 'Произошла ошибка при проверке логина' })
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
        }
      } else if (level === 4) {
        // Завершение регистрации: отправка данных на сервер
        try {
          const data = await dispatch(
            registerUserThunk({
              login,
              password,
              avatar: filterAvatar(avatars),
              questions,
            }),
          ).unwrap()

          if (data.token) {
            setLevel(5) // Успешная регистрация
          } else {
            setErrors({ password: 'Произошла ошибка. Попробуйте снова' })
          }
        } catch (error) {
          console.log('error', error)
          setErrors({ password: 'Произошла ошибка. Попробуйте снова' })
        }
      }
      setSubmitting(false)
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
