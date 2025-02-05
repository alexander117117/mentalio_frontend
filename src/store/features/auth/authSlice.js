import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
import { handlePending, handleRejected } from '../../helpers/Handlers.js'

import { loginUserThunk, checkLoginThunk, registerUserThunk, requestReset, verificationCode_resetPassword, resetPasswordThunk } from './authThunks.js'

// Начальное состояние для auth-слайса
const initialState = {
  user: null, // Данные текущего пользователя
  token: Cookies.get('token') || null, // Считываем токен из cookies (если есть)
  isAuthenticated: !!Cookies.get('token'), // Проверяем, авторизован ли пользователь
  loading: false, // Статус загрузки для API вызовов
  error: null, // Сообщение об ошибке, если возникает ошибка API
}

// Auth-слайс для управления состоянием авторизации
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError(state) {
      state.error = null
    },
    // Редюсер для выхода из системы
    logout: (state) => {
      state.user = null // Очищаем данные пользователя
      state.token = null // Удаляем токен
      state.isAuthenticated = false // Сбрасываем статус авторизации
      Cookies.remove('token') // Удаляем токен из cookies
    },
  },
  extraReducers: (builder) => {
    // Обработка состояния для loginUserThunk
    builder
      .addCase(loginUserThunk.pending, handlePending)
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.loading = false // Отключаем флаг загрузки
        state.user = action.payload.user // Устанавливаем данные пользователя
        state.token = action.payload.token // Сохраняем токен
        state.isAuthenticated = true // Помечаем, что пользователь авторизован
      })
      .addCase(loginUserThunk.rejected, handleRejected)

    // Обработка состояния для registerUserThunk
    builder
      .addCase(registerUserThunk.pending, handlePending)
      .addCase(registerUserThunk.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
        state.token = action.payload.token
        state.isAuthenticated = true
      })
      .addCase(registerUserThunk.rejected, handleRejected)

    // Обработка состояния для checkLogin
    builder
      .addCase(checkLoginThunk.pending, handlePending)
      .addCase(checkLoginThunk.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
        state.isAuthenticated = true
        state.token = action.payload.token
      })
      .addCase(checkLoginThunk.rejected, handleRejected)

    // Обработка состояния для requestReset
    builder
      .addCase(requestReset.pending, handlePending)
      .addCase(requestReset.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(requestReset.rejected, handleRejected)

    // Обработка состояния для verificationCode_resetPassword
    builder
      .addCase(verificationCode_resetPassword.pending, handlePending)
      .addCase(verificationCode_resetPassword.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(verificationCode_resetPassword.rejected, handleRejected)

    // Обработка состояния для resetPasswordThunk
    builder
      .addCase(resetPasswordThunk.pending, handlePending)
      .addCase(resetPasswordThunk.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(resetPasswordThunk.rejected, handleRejected)
  },
})

// Экспортируем экшены и редюсер
export const { logout, clearError } = authSlice.actions
export default authSlice.reducer
