import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { getProfileThunk } from '@/entities/user/model/store/auth/authThunks'
import { AppDispatch, RootState } from '../store/configureStore'

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth)

  // Перенаправление на страницу входа в систему при отсутствии аутентификации
  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />
  }

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(getProfileThunk())
  }, [])

  return children // Выдавайте детей, если они прошли аутентификацию и авторизацию
}
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  adminRoute: PropTypes.bool,
}
