import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../../../axiosConfig.ts'
import Cookies from 'js-cookie'

export const loginUserThunk = createAsyncThunk('auth/loginUserThunk', async (credentials, { rejectWithValue }) => {
  try {
    // Выполняем API-запрос для входа пользователя
    const response = await axios.post(`/auth/login`, {
      login: credentials.login,
      password: credentials.password,
    })

    if (response.data.status !== 'success') {
      // Если статус не успешный, возвращаем сообщение об ошибке
      console.log('response.data.error', response.data.error)
      return rejectWithValue(response.data.error)
    }

    // Сохраняем токен в cookies с настройками безопасности
    Cookies.set('token', response.data.token, { expires: 7 })

    // Возвращаем данные для обновления состояния
    return response.data
  } catch (err) {
    // В случае ошибки возвращаем соответствующее сообщение
    return rejectWithValue(err.response?.data?.error || 'Что-то пошло не так')
  }
})

// AsyncThunk для проверки login на сервере
export const checkLoginThunk = createAsyncThunk('auth/checkLogin', async (login, { rejectWithValue }) => {
  try {
    const response = await axios.post(`/auth/check-login`, { login })
    return response.data
  } catch (err) {
    // В случае ошибки возвращаем соответствующее сообщение
    return rejectWithValue(err.response?.data?.error || 'Что-то пошло не так')
  }
})

// AsyncThunk для регистрации нового пользователя
export const registerUserThunk = createAsyncThunk('auth/registerUser', async (userData, { rejectWithValue }) => {
  try {
    // Вызываем API для регистрации
    const response = await axios.post(`/auth/register`, {
      login: userData.login,
      password: userData.password,
      avatar: userData.avatar,
      questions: userData.questions,
    })
    // Сохраняем токен в cookies с настройками безопасности
    Cookies.set('token', response.data.token, { expires: 7 })

    // Возвращаем данные для обновления состояния
    return response.data
  } catch (err) {
    // В случае ошибки возвращаем соответствующее сообщение
    return rejectWithValue(err.response?.data?.error || 'Что-то пошло не так')
  }
})

// AsyncThunk для запроса сброса пароля
export const requestReset = createAsyncThunk('auth/requestReset', async ({ login }, { rejectWithValue }) => {
  try {
    // Отправляем запрос на сброс пароля
    const response = await axios.post(`/auth/password-reset/request`, { login })
    return response.data
  } catch (err) {
    // В случае ошибки возвращаем соответствующее сообщение
    return rejectWithValue(err.response?.data?.error || 'Что-то пошло не так')
  }
})

// AsyncThunk для проверки кода на сброс пароля
export const verificationCode_resetPassword = createAsyncThunk(
  'auth/verificationCode_resetPassword',
  async ({ otpCode, login, token_resetPassword }, { rejectWithValue }) => {
    try {
      // Отправляем запрос на сброс пароля
      const response = await axios.post(`/auth/password-reset/verification`, {
        code: otpCode,
        token_resetPassword: token_resetPassword,
        login: login,
      })
      return response.data
    } catch (err) {
      // В случае ошибки возвращаем соответствующее сообщение
      return rejectWithValue(err.response?.data?.error || 'Что-то пошло не так')
    }
  },
)

// AsyncThunk для выполнения сброса пароля
export const resetPasswordThunk = createAsyncThunk('auth/resetPassword', async ({ token_resetPassword, newPassword, login }, { rejectWithValue }) => {
  try {
    // Отправляем запрос для подтверждения сброса пароля
    const response = await axios.post(`/auth/password-reset/confirm`, {
      token_resetPassword,
      newPassword,
      login,
    })
    return response.data
  } catch (err) {
    // В случае ошибки возвращаем соответствующее сообщение
    return rejectWithValue(err.response?.data?.error || 'Что-то пошло не так')
  }
})
