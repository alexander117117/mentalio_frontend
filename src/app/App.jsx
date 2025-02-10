import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import AppRoutes from './routes/Routes.jsx'
import { store, persistor } from '@store/configureStore.ts'
import './styles/index.css'
import './styles/normalaiz.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

/* включаем мок-запросы для тестирования api из файла AppTest/mocks/browser.js */
async function enableMocking() {
  /*
   * Переменная IS_MOCKING отвечает за включение и выключение мок-запросов.
   * Если IS_MOCKING = true, то мок-запросы включены.
   * Если IS_MOCKING = false, то мок-запросы выключены.
   */
  const IS_MOCKING = false

  if (IS_MOCKING) {
    const { worker } = await import('./test/mocks/browser.js')
    return worker.start()
  }
}

enableMocking().then(() => {
  root.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRoutes />
      </PersistGate>
    </Provider>,
  )
})
