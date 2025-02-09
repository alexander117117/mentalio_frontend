import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useSelector((state) => state.auth)

  // Перенаправление на страницу входа в систему при отсутствии аутентификации
  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />
  } else {
    if (user?.role === 'admin') {
      return <Navigate to="/admin" replace />
    }
  }

  return children // Выдавайте детей, если они прошли аутентификацию и авторизацию
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  adminRoute: PropTypes.bool,
}

export default ProtectedRoute
