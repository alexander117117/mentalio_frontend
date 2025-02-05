import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/AuthenticationPages/LoginPage/Login.jsx'
import Register from '../pages/AuthenticationPages/RegisterPage/Register.jsx'
import PasswordReset from '../pages/AuthenticationPages/PasswordResetPage/PasswordReset.jsx'
import Main from '../pages/MainPage/Main.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'
import HomePage from '@/pages/MainPage/pages/HomePage/HomePage.jsx'
import { MyFoldersPage } from '@/pages/MainPage/pages/MyFoldersPage/index.tsx'
import CatalogPage from '@/pages/MainPage/pages/CatalogPage/CatalogPage.jsx'
import SearchByTagsPage from '@/pages/MainPage/pages/SearchByTagsPage/SearchByTagsPage.jsx'
import SettingPage from '@/pages/MainPage/pages/SettingPage/SettingPage.jsx'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Маршруты аутентификации */}
        <Route path="auth">
          <Route index element={<LoginPage />} />
          <Route path="*" element={<LoginPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<Register />} />
          <Route path="password-reset" element={<PasswordReset />} />
        </Route>

        {/* Защищенный основной маршрут */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Main />
            </ProtectedRoute>
          }
        >
          <Route index element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
          <Route path="my-folders" element={<MyFoldersPage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="search-by-tags" element={<SearchByTagsPage />} />
          <Route path="settings" element={<SettingPage />} />
        </Route>

        {/* Защищенный маршрут администратора */}
        {/*<Route path="/admin">*/}
        {/*  <Route*/}
        {/*    index*/}
        {/*    element={*/}
        {/*      <ProtectedRoute>*/}
        {/*        <AdminPanel />*/}
        {/*      </ProtectedRoute>*/}
        {/*    }*/}
        {/*  />*/}
        {/*</Route>*/}
      </Routes>
    </Router>
  )
}

export default AppRoutes
