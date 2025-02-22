import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute.jsx'
import { Login, Register, PasswordReset } from '@/processe/Auth'
import { LayoutMain, HomePage, SettingPage, MyFoldersPage, CatalogPage, FolderTopicPage } from '@/processe/Main'
import { Error404Page } from '@/pages/Error404Page'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Маршруты аутентификации */}
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
          <Route path="settings" element={<SettingPage />} />
          <Route path="folderTopic/:idFolder/:idTopic" element={<FolderTopicPage />} />
        </Route>

        <Route path="*" element={<Error404Page />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
