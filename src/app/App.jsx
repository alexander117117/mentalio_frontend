import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import AppRoutes from './routes/Routes.jsx'
import { store, persistor } from '@/app/store/configureStore.js'
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
  const IS_MOCKING = true

  if (IS_MOCKING) {
    const { worker } = await import('./test/mocks/browser.ts')
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
