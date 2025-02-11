import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from '@/pages/AuthenticationPages/LoginPage/index.tsx'
import Register from '@/pages/AuthenticationPages/RegisterPage/index.tsx'
import PasswordReset from '@/pages/AuthenticationPages/PasswordResetPage/index.tsx'
import { LayoutMain } from '@/pages/MainPage/LayoutMain.tsx'
import ProtectedRoute from './ProtectedRoute.jsx'
import { HomePage } from '@/pages/MainPage/pages/HomePage'
import { MyFoldersPage } from '@/pages/MainPage/pages/MyFoldersPage/index.tsx'
import CatalogPage from '@/pages/MainPage/pages/CatalogPage/index.tsx'
import SearchByTagsPage from '@/pages/MainPage/pages/SearchByTagsPage/index.tsx'
import SettingPage from '@/pages/MainPage/pages/SettingPage/index.tsx'
import { FolderTopicPage } from '@/pages/FolderTopicPage'
import { Error404Page } from '@/pages/Error404Page'

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
              <LayoutMain />
            </ProtectedRoute>
          }
        >
          <Route index element={<HomePage />} />
          <Route path="my-folders" element={<MyFoldersPage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="search-by-tags" element={<SearchByTagsPage />} />
          <Route path="settings" element={<SettingPage />} />
          <Route path="folderTopic" element={<FolderTopicPage />} />
        </Route>

        <Route path="*" element={<Error404Page />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
