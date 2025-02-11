import * as Yup from 'yup'

// Регулярные выражения для проверки форматов
const REGEX_EMAIL: RegExp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const REGEX_PHONE: RegExp = /^(\+?\d{1,3}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{2}[-.\s]?\d{2}$/
const REGEX_PASSWORD: RegExp = /^(?=.*[0-9])(?=.*[a-z])(?!.* ).{6,16}$/

// Сообщения об ошибках
interface ErrorMessages {
  REQUIRED: string
  INVALID_EMAIL: string
  INVALID_PHONE: string
  PASSWORD_WEAK: string
  PASSWORD_MISMATCH: string
  MIN: (field: string, count: number) => string
}

const ERROR_MESSAGES: ErrorMessages = {
  REQUIRED: 'Это поле обязательно для заполнения.',
  INVALID_EMAIL: 'Введите корректный email.',
  INVALID_PHONE: 'Введите корректный номер телефона.',
  PASSWORD_WEAK: 'Пароль должен содержать одну цифру, одну букву, без пробелов и иметь длину 6 до 16 символов.',
  PASSWORD_MISMATCH: 'Пароли не совпадают.',
  MIN: (field: string, count: number) => `${field} должен содержать минимум ${count} символов.`,
}

// Общие схемы валидации
const validationSchemas = {
  // Схема валидации для email или номера телефона
  emailOrPhone: Yup.string()
    .required(ERROR_MESSAGES.REQUIRED)
    .test('is-email-or-phone', 'Введите корректный email или номер телефона.', (value) => {
      if (!value) return false
      return REGEX_EMAIL.test(value) || REGEX_PHONE.test(value)
    }),

  // Схема валидации для пароля
  password: Yup.string().required(ERROR_MESSAGES.REQUIRED).matches(REGEX_PASSWORD, ERROR_MESSAGES.PASSWORD_WEAK),

  // Схема валидации для подтверждения пароля
  confirmPassword: Yup.string()
    .required(ERROR_MESSAGES.REQUIRED)
    .oneOf([Yup.ref('password')], ERROR_MESSAGES.PASSWORD_MISMATCH),

  // Схема валидации для имени пользователя
  username: Yup.string()
    .required(ERROR_MESSAGES.REQUIRED)
    .min(2, ERROR_MESSAGES.MIN('Имя пользователя', 2))
    .max(20, 'Имя пользователя не должно превышать 20 символов.'),

  // Схема валидации для соглашения с условиями
  termsAgreement: Yup.boolean().oneOf([true], 'Необходимо принять соглашение.'),
}

// Экспорт отдельных схем для конкретных страниц/компонентов
export const emailOrPhoneSchema = Yup.object({
  emailOrPhone: validationSchemas.emailOrPhone,
})

export const passwordSchema = Yup.object({
  password: validationSchemas.password,
})

// Схема для восстановления пароля
export const passwordResetSchema = Yup.object({
  password: validationSchemas.password,
  confirmPassword: validationSchemas.confirmPassword,
})

export const loginSchema = Yup.object({
  login: validationSchemas.emailOrPhone,
  password: validationSchemas.password,
})

// Экспорт всех схем для общего использования
export default validationSchemas
