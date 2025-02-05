// Хук для управления переходами и отправкой формы.
import { passwordSchema, emailOrPhoneSchema } from '@/../validationSchemas.js'
import { useFormik } from 'formik'
import { useMemo } from 'react'

import { checkLoginThunk, registerUserThunk } from '@/store/features/auth/authThunks.js'

/**
 * Переход на следующий уровень регистрации.
 *
 * @param {number} level - Текущий уровень.
 * @param {Function} setLevel - Функция для обновления уровня.
 */
export function handleNext(level, setLevel) {
  // Увеличивает уровень до максимума 5.
  if (level >= 5) {
    setLevel(level + 1)
  }
}

/**
 * Кастомный хук Formik для управления состоянием формы регистрации и переходами.
 *
 * @param {number} level - Текущий уровень регистрации.
 * @param {Function} setLevel - Функция для обновления уровня.
 * @param {Array} avatars - Список аватаров.
 * @param {Array} questions - Список вопросов.
 * @param {Function} dispatch - Функция dispatch из Redux.
 * @param error
 * @param setIsError
 * @param setPassword
 * @param password
 * @param login
 * @param setlogin
 * @returns {Object} - Экземпляр Formik.
 */
export function useFormik_Register(level, setLevel, avatars, questions, dispatch, error, setIsError, setPassword, password, login, setlogin) {
  // Настройка Formik с динамической схемой валидации на основе текущего уровня.

  return useFormik({
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
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      // Обработка отправки и переход на следующий уровень на основе логики.
      if (level === 0) {
        // Проверка email на сервере
        if (values.agreeToTerms) {
          const data = await dispatch(checkLoginThunk(values.emailOrPhone)).unwrap()
          if (data.status === 'success') {
            setlogin(values.emailOrPhone)
            setLevel(1) // Переход на ввод пароля
          } else {
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
        }
      } else if (level === 4) {
        // Завершение регистрации
        // отправка данных на сервер
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
        }
      }
    },
  })
}

// Фильтрация выбранного аватара
function filterAvatar(avatars) {
  let result = ''
  avatars.forEach((item) => {
    if (item.chosen) {
      result = item.avatar
    }
  })
  return result
}
