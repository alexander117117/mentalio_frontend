import { createAsyncThunk } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
import { executeApiRTK } from '@/shared/api/apiHelpers.ts'
import { Credentials, User } from '../../../lib/types'
import { API_ENDPOINTS } from '@/shared/api/constEndpoints'

/**
 * Интерфейс для ответа от сервера при логине/регистрации.
 */
interface AuthResponse {
  status?: string
  token?: string
  user?: any
  error?: string
}

/**
 * Интерфейс для регистрации пользователя.
 */
interface RegistrationData {
  login: string
  password: string
  avatar?: string
  questions?: any[]
}

/**
 * Интерфейс для запроса сброса пароля.
 */
interface ResetPasswordRequest {
  login: string
}

/**
 * Интерфейс для верификации кода при сбросе пароля.
 */
interface VerificationPayload {
  otpCode: string
  login: string
  token_resetPassword: string
}

/**
 * Интерфейс для сброса пароля.
 */
interface ResetPasswordPayload {
  token_resetPassword: string
  newPassword: string
  login: string
}

interface UserRegistrationResponse {
  status: string
  token: string
  user: User
}

/**
 * Авторизация пользователя (логин).
 */
export const loginUserThunk = createAsyncThunk<
  UserRegistrationResponse,
  Credentials,
  { rejectValue: string } // Тип для rejectWithValue
>('auth/loginUserThunk', async (credentials, { rejectWithValue }) => {
  const response = await executeApiRTK<UserRegistrationResponse>({
    method: 'POST',
    url: API_ENDPOINTS.auth.login,
    body: credentials,
    rejectWithValue,
  })

  // Сохраняем токен в cookies на 7 дней
  if (response.data.token) {
    Cookies.set('token', response.data.token, { expires: 7 })
  }
  return response.data
})

/**
 * Проверка логина на сервере.
 */
export const checkLoginThunk: any = createAsyncThunk<
  AuthResponse,
  string,
  {
    rejectValue: string
  }
>('auth/checkLogin', async (login, { rejectWithValue }) => {
  const res: any = await executeApiRTK({
    method: 'POST',
    url: API_ENDPOINTS.auth.checkLogin,
    body: { login },
    rejectWithValue,
  })
  return res.data
})

/**
 * Регистрация нового пользователя.
 */
export const registerUserThunk: any = createAsyncThunk<
  AuthResponse,
  RegistrationData,
  {
    rejectValue: string
  }
>('auth/registerUser', async (userData, { rejectWithValue }) => {
  const res: any = await executeApiRTK({
    method: 'POST',
    url: API_ENDPOINTS.auth.register,
    body: {
      login: userData.login,
      password: userData.password,
      avatar: userData.avatar,
      questions: userData.questions,
    },
    errorMessage: 'Что-то пошло не так',
    rejectWithValue,
  })

  if (res.data.token) {
    Cookies.set('token', res.data.token, { expires: 7 })
  }

  return res.data
})

/**
 * Запрос сброса пароля.
 */
export const requestReset: any = createAsyncThunk<
  AuthResponse,
  ResetPasswordRequest,
  {
    rejectValue: string
  }
>('auth/requestReset', async ({ login }, { rejectWithValue }) => {
  const res: any = await executeApiRTK({
    method: 'POST',
    url: API_ENDPOINTS.auth.passwordResetRequest,
    body: { login },
    rejectWithValue,
  })
  return res.data
})

/**
 * Проверка кода при сбросе пароля.
 */
export const verificationCode_resetPassword: any = createAsyncThunk<
  AuthResponse,
  VerificationPayload,
  { rejectValue: string }
>('auth/verificationCode_resetPassword', async ({ otpCode, login, token_resetPassword }, { rejectWithValue }) => {
  const res: any = await executeApiRTK({
    method: 'POST',
    url: API_ENDPOINTS.auth.passwordResetVerification,
    body: {
      code: otpCode,
      token_resetPassword,
      login,
    },
    rejectWithValue,
  })
  return res.data
})

/**
 * Выполнение сброса пароля.
 */
export const resetPasswordThunk: any = createAsyncThunk<
  AuthResponse,
  ResetPasswordPayload,
  {
    rejectValue: string
  }
>('auth/resetPassword', async ({ token_resetPassword, newPassword, login }, { rejectWithValue }) => {
  const res: any = await executeApiRTK({
    method: 'POST',
    url: API_ENDPOINTS.auth.passwordResetConfirm,
    body: {
      token_resetPassword,
      newPassword,
      login,
    },
    rejectWithValue,
  })
  return res.data
})
