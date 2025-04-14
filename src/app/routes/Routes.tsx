import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login, Register, PasswordReset } from '@/processe/Auth'
import { LayoutMain, HomePage, MyFoldersPage, CatalogPage, FolderTopicPage } from '@/processe/Main'

import {
  LayoutSetting,
  SettingPage,
  SettingAccountPage,
  SettingSecurityPage,
  SettingAvatarPage,
  SettingSupportPage,
} from '@/processe/Setting'
import { Error404Page } from '@/pages/Error404Page'
import { TestInteractiveProcesse } from '@/processe/TestInteractiveProcesse'
import { ProtectedRoute } from './ProtectedRoute'
export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="auth">
          <Route index element={<Login />} />
          <Route path="*" element={<Login />} />
          <Route path="login" element={<Login />} />
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
          <Route path="folderTopic/:idFolder/:idTopic" element={<FolderTopicPage />} />
          <Route path="settings" element={<SettingPage />} />
        </Route>

        <Route path="/test-interactive/:idTopic/:modes" element={<TestInteractiveProcesse />} />

        <Route
          path="settings"
          element={
            <ProtectedRoute>
              <LayoutSetting />
            </ProtectedRoute>
          }
        >
          <Route path="account" element={<SettingAccountPage />} />
          <Route path="security" element={<SettingSecurityPage />} />
          <Route path="avatar" element={<SettingAvatarPage />} />
          <Route path="support" element={<SettingSupportPage />} />
        </Route>
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </Router>
  )
}
