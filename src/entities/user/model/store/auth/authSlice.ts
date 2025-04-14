import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
import {
  loginUserThunk,
  checkLoginThunk,
  registerUserThunk,
  requestReset,
  verificationCode_resetPassword,
  resetPasswordThunk,
  getProfileThunk,
  updateUserThunk,
  deleteUserThunk,
} from './authThunks.ts'
import { handlePending, handleRejected } from '@/shared/lib/helpers/StoreHandlers.ts'
import { User } from '@/entities/user/lib/types.ts'

interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  loading: boolean
  error: string | null
}

const initialState: AuthState = {
  user: null,
  token: Cookies.get('token') || null,
  isAuthenticated: !!Cookies.get('token'),
  loading: false,
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError(state) {
      state.error = null
    },
    logoutUser(state) {
      state.user = null
      state.token = null
      state.isAuthenticated = false
      Cookies.remove('token')
      window.location.reload()
    },
  },
  extraReducers: (builder) => {
    builder
      // Логин
      .addCase(loginUserThunk.pending, handlePending)
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload.user
        state.token = action.payload.token || null
        state.isAuthenticated = true
      })
      .addCase(loginUserThunk.rejected, handleRejected)

      // Регистрация
      .addCase(registerUserThunk.pending, handlePending)
      .addCase(registerUserThunk.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload.user || action.payload
        state.token = action.payload.token || null
        state.isAuthenticated = true
      })
      .addCase(registerUserThunk.rejected, handleRejected)

      // Проверка логина
      .addCase(checkLoginThunk.pending, handlePending)
      .addCase(checkLoginThunk.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload.user
        state.isAuthenticated = true
        state.token = action.payload.token || null
      })
      .addCase(checkLoginThunk.rejected, handleRejected)

      // Запрос на сброс пароля
      .addCase(requestReset.pending, handlePending)
      .addCase(requestReset.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(requestReset.rejected, handleRejected)

      // Проверка кода при сбросе пароля
      .addCase(verificationCode_resetPassword.pending, handlePending)
      .addCase(verificationCode_resetPassword.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(verificationCode_resetPassword.rejected, handleRejected)

      // Подтверждение сброса пароля
      .addCase(resetPasswordThunk.pending, handlePending)
      .addCase(resetPasswordThunk.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(resetPasswordThunk.rejected, handleRejected)

      // Получение профиля
      .addCase(getProfileThunk.pending, handlePending)
      .addCase(getProfileThunk.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
      })
      .addCase(getProfileThunk.rejected, handleRejected)

      // обновление пользовательских данных
      .addCase(updateUserThunk.pending, handlePending)
      .addCase(updateUserThunk.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
      })
      .addCase(updateUserThunk.rejected, handleRejected)

      // Удаление пользователя
      .addCase(deleteUserThunk.pending, handlePending)
      .addCase(deleteUserThunk.fulfilled, (state) => {
        state.loading = false
        state.user = null
        state.token = null
        state.isAuthenticated = false
        Cookies.remove('token')
        window.location.reload()
      })
      .addCase(deleteUserThunk.rejected, handleRejected)
  },
})

export const { logoutUser, clearError } = authSlice.actions
export default authSlice.reducer
