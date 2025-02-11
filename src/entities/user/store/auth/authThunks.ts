import { createAsyncThunk } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
import { apiStoreTrunks } from '@/shared/api/apiHelpers'

interface Credentials {
  login: string
  password: string
}

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

/**
 * Авторизация пользователя (логин).
 */
export const loginUserThunk: any = createAsyncThunk<
  AuthResponse,
  Credentials,
  { rejectValue: string } // Тип для rejectWithValue
>('auth/loginUserThunk', async (credentials, { rejectWithValue }) => {
  try {
    const res: any = await apiStoreTrunks({
      method: 'POST',
      url: `/auth/login`,
      body: {
        login: credentials.login,
        password: credentials.password,
      },
      rejectWithValue,
    })

    if (res.data.status !== 'success') {
      return rejectWithValue(res.data.error || 'Ошибка при входе')
    }

    // Сохраняем токен в cookies на 7 дней
    if (res.data.token) {
      Cookies.set('token', res.data.token, { expires: 7 })
    }

    return res.data
  } catch (err: any) {
    return rejectWithValue(err.response?.data?.error || 'Что-то пошло не так')
  }
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
  const res: any = await apiStoreTrunks({
    method: 'POST',
    url: `/auth/check-login`,
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
  const res: any = await apiStoreTrunks({
    method: 'POST',
    url: `/auth/register`,
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
  const res: any = await apiStoreTrunks({
    method: 'POST',
    url: `/auth/password-reset/request`,
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
  const res: any = await apiStoreTrunks({
    method: 'POST',
    url: `/auth/password-reset/verification`,
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
  const res: any = await apiStoreTrunks({
    method: 'POST',
    url: `/auth/password-reset/confirm`,
    body: {
      token_resetPassword,
      newPassword,
      login,
    },
    rejectWithValue,
  })
  return res.data
})
