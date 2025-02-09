import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from '@/../axios.config'
import Cookies from 'js-cookie'

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
export const loginUserThunk = createAsyncThunk<
    AuthResponse,              // Возвращаемые данные при успехе
  Credentials,               // Аргументы, передаваемые в thunk (логин/пароль)
  { rejectValue: string }    // Тип для rejectWithValue
>(
  'auth/loginUserThunk',
    async (credentials, { rejectWithValue }) => {
      try {
        const response = await axios.post<AuthResponse>(`/auth/login`, {
          login: credentials.login,
          password: credentials.password,
        })
        
        if (response.data.status !== 'success') {
          return rejectWithValue(response.data.error || 'Ошибка при входе')
        }
        
        // Сохраняем токен в cookies на 7 дней
        if (response.data.token) {
          Cookies.set('token', response.data.token, { expires: 7 })
        }
        
        return response.data
      } catch (err: any) {
        return rejectWithValue(
          err.response?.data?.error || 'Что-то пошло не так',
        )
      }
    },
)

/**
 * Проверка логина на сервере.
 */
export const checkLoginThunk = createAsyncThunk<
    AuthResponse,         // Что возвращается при успешном запросе
  string,               // Логин (аргумент)
  { rejectValue: string }
>(
  'auth/checkLogin',
    async (login, { rejectWithValue }) => {
      try {
        const response = await axios.post<AuthResponse>(`/auth/check-login`, { login })
        return response.data
      } catch (err: any) {
        return rejectWithValue(
          err.response?.data?.error || 'Что-то пошло не так',
        )
      }
    },
)

/**
 * Регистрация нового пользователя.
 */
export const registerUserThunk = createAsyncThunk<
    AuthResponse,
  RegistrationData,
  { rejectValue: string }
>(
  'auth/registerUser',
    async (userData, { rejectWithValue }) => {
      try {
        const response = await axios.post<AuthResponse>(`/auth/register`, {
          login: userData.login,
          password: userData.password,
          avatar: userData.avatar,
          questions: userData.questions,
        })
        
        if (response.data.token) {
          Cookies.set('token', response.data.token, { expires: 7 })
        }
        
        return response.data
      } catch (err: any) {
        return rejectWithValue(
          err.response?.data?.error || 'Что-то пошло не так',
        )
      }
    },
)

/**
 * Запрос сброса пароля.
 */
export const requestReset = createAsyncThunk<
    AuthResponse,
  ResetPasswordRequest,
  { rejectValue: string }
>(
  'auth/requestReset',
    async ({ login }, { rejectWithValue }) => {
      try {
        const response = await axios.post<AuthResponse>(
          `/auth/password-reset/request`,
            { login },
        )
        return response.data
      } catch (err: any) {
        return rejectWithValue(
          err.response?.data?.error || 'Что-то пошло не так',
        )
      }
    },
)

/**
 * Проверка кода при сбросе пароля.
 */
export const verificationCode_resetPassword = createAsyncThunk<
    AuthResponse,
  VerificationPayload,
  { rejectValue: string }
>(
  'auth/verificationCode_resetPassword',
    async ({ otpCode, login, token_resetPassword }, { rejectWithValue }) => {
      try {
        const response = await axios.post<AuthResponse>(
          `/auth/password-reset/verification`,
            {
              code: otpCode,
              token_resetPassword,
              login,
            },
        )
        return response.data
      } catch (err: any) {
        return rejectWithValue(
          err.response?.data?.error || 'Что-то пошло не так',
        )
      }
    },
)

/**
 * Выполнение сброса пароля.
 */
export const resetPasswordThunk = createAsyncThunk<
    AuthResponse,
  ResetPasswordPayload,
  { rejectValue: string }
>(
  'auth/resetPassword',
    async ({ token_resetPassword, newPassword, login }, { rejectWithValue }) => {
      try {
        const response = await axios.post<AuthResponse>(
          `/auth/password-reset/confirm`,
            {
              token_resetPassword,
              newPassword,
              login,
            },
        )
        return response.data
      } catch (err: any) {
        return rejectWithValue(
          err.response?.data?.error || 'Что-то пошло не так',
        )
      }
    },
)
