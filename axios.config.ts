/**
 * axiosConfig.js
 *
 * Этот файл содержит конфигурацию Axios для взаимодействия с API.
 * Включает базовый экземпляр Axios, перехватчики для добавления токена и обработки ошибок.
 */
import axios from 'axios'
import Cookies from 'js-cookie'

// Создание базового экземпляра Axios с настройками
const axiosInstance = axios.create({
  baseURL: 'https://mentalio.pythonanywhere.com', // Базовый URL для всех запросов
  timeout: 10000, // Тайм-аут запросов (10 секунд)
  headers: {
    'Content-Type': 'application/json', // Устанавливаем тип содержимого для всех запросов
  },
})

/**
 * Перехватчик запросов
 *
 * Перед каждым запросом добавляет токен авторизации (если он есть) в заголовки.
 *
 * @param {object} config - Конфигурация текущего запроса.
 * @returns {object} Модифицированная конфигурация запроса.
 */
axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get('token') // Получение токена из cookies
    console.log('token', token)
    if (token) {
      config.headers.Authorization = `${token}` // Добавление токена в заголовок Authorization
    }
    console.log('config', config)
    return config
  },
  (error) => {
    // Обработка ошибок при создании запроса
    return Promise.reject(error)
  },
)

/**
 * Перехватчик ответов
 *
 * Обрабатывает успешные ответы и ошибки:
 * - Возвращает только данные из успешных ответов.
 * - Обрабатывает ошибки, такие как 401 (неавторизованный доступ).
 *
 * @param {object} response - Ответ сервера.
 * @returns {object} Данные ответа.
 * @throws {string|object} Сообщение об ошибке или данные ошибки.
 */
axiosInstance.interceptors.response.use(
  (response) => {
    return response // Возвращаем только данные ответа
  },
  (error) => {
    console.log('error', error)
    if (error.response) {
      // Обработка ошибок, пришедших от сервера
      const { status } = error.response
      // if (status === 401) {
      //   // Действия при ошибке 401 (неавторизованный доступ)
      //   Cookies.remove('token') // Удаление токена из cookies
      //   if (window.location.pathname !== '/auth/login') {
      //     window.location.href = '/auth/login' // Редирект на страницу авторизации
      //   }
      // }
      console.log('Ошибка сервера:', error.response.data)
      console.log('Статус:', status)
    } else if (error.request) {
      // Ошибка запроса (нет ответа от сервера)
      console.error('Нет ответа от сервера: ', error.request)
    } else {
      // Ошибка в конфигурации запроса
      console.error('Ошибка конфигурации запроса: ', error.message)
    }

    // Возврат сообщения об ошибке
    return error.response
  },
)

export default axiosInstance
