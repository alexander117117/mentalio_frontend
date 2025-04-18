/**
 * Этот файл содержит конфигурацию Axios для взаимодействия с API.
 * Включает базовый экземпляр Axios, перехватчики для добавления токена и обработки ошибок.
 */
import axios from 'axios'
import Cookies from 'js-cookie'
import { API_ENDPOINTS } from './constEndpoints'

export const axiosInstance = axios.create({
  baseURL: API_ENDPOINTS.common.baseUrl, // Базовый URL для всех запросов
  timeout: 17000, // Тайм-аут запросов
  headers: {
    'Content-Type': 'application/json',
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
    const token = Cookies.get('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
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
    return response
  },
  (error) => {
    if (error.response) {
      const { status } = error.response
      if (status === 401) {
        Cookies.remove('token')
        if (window.location.pathname !== '/auth/login') {
          window.location.href = '/auth/login'
        }
      }
    } else if (error.request) {
      console.error('Нет ответа от сервера: ', error.request)
    } else {
      console.error('Ошибка конфигурации запроса: ', error.message)
    }
    throw error.response
  },
)
