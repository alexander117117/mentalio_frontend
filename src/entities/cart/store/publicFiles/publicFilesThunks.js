import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

/**
 * Получить список публичных файлов
 * @returns {Promise<Object[]>} Список публичных файлов
 */
export const getPublicFiles = createAsyncThunk('userFiles/getPublicFiles', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get('/publicFiles')
    return response.data
  } catch (error) {
    return rejectWithValue(error.response?.data || 'Ошибка при получении публичных файлов')
  }
})

/**
 * Получить данные публичного файла
 * @param {string} fileId - Идентификатор публичного файла
 * @returns {Promise<Object>} Данные публичного файла
 */
export const getPublicFileDetails = createAsyncThunk('userFiles/getPublicFileDetails', async (fileId, { rejectWithValue }) => {
  try {
    const response = await axios.get(`/publicFiles/${fileId}`)
    return response.data
  } catch (error) {
    return rejectWithValue(error.response?.data || 'Ошибка при получении данных публичного файла')
  }
})

/**
 * Добавить публичный файл в пользовательские файлы
 * @param {string} fileId - Идентификатор публичного файла
 * @returns {Promise<Object>} Добавленный файл
 */
export const addPublicFileToUserFiles = createAsyncThunk('userFiles/addPublicFileToUserFiles', async (fileId, { rejectWithValue }) => {
  try {
    const response = await axios.post(`/publicFiles/${fileId}/addToUserFiles`)
    return response.data
  } catch (error) {
    return rejectWithValue(error.response?.data || 'Ошибка при добавлении публичного файла в пользовательские файлы')
  }
})

/**
 * Получить темы публичного файла
 * @param {string} fileId - Идентификатор публичного файла
 * @returns {Promise<Object[]>} Список тем
 */
export const getPublicFileTopics = createAsyncThunk('userFiles/getPublicFileTopics', async (fileId, { rejectWithValue }) => {
  try {
    const response = await axios.get(`/publicFiles/${fileId}/topics`)
    return response.data
  } catch (error) {
    return rejectWithValue(error.response?.data || 'Ошибка при получении тем публичного файла')
  }
})

/**
 * Получить данные темы публичного файла
 * @param {Object} payload - Данные для получения темы
 * @param {string} payload.fileId - Идентификатор публичного файла
 * @param {string} payload.topicId - Идентификатор темы
 * @returns {Promise<Object>} Данные темы
 */
export const getPublicTopicDetails = createAsyncThunk('userFiles/getPublicTopicDetails', async ({ fileId, topicId }, { rejectWithValue }) => {
  try {
    const response = await axios.get(`/publicFiles/${fileId}/topics/${topicId}`)
    return response.data
  } catch (error) {
    return rejectWithValue(error.response?.data || 'Ошибка при получении данных темы публичного файла')
  }
})

/**
 * Получить карточки темы публичного файла
 * @param {Object} payload - Данные для получения карточек
 * @param {string} payload.fileId - Идентификатор публичного файла
 * @param {string} payload.topicId - Идентификатор темы
 * @returns {Promise<Object[]>} Список карточек
 */
export const getPublicTopicCards = createAsyncThunk('userFiles/getPublicTopicCards', async ({ fileId, topicId }, { rejectWithValue }) => {
  try {
    const response = await axios.get(`/publicFiles/${fileId}/topics/${topicId}/cards`)
    return response.data
  } catch (error) {
    return rejectWithValue(error.response?.data || 'Ошибка при получении карточек темы публичного файла')
  }
})

/**
 * Получить данные карточки публичного файла
 * @param {Object} payload - Данные для получения карточки
 * @param {string} payload.fileId - Идентификатор публичного файла
 * @param {string} payload.topicId - Идентификатор темы
 * @param {string} payload.cardId - Идентификатор карточки
 * @returns {Promise<Object>} Данные карточки
 */
export const getPublicCardDetails = createAsyncThunk('userFiles/getPublicCardDetails', async ({ fileId, topicId, cardId }, { rejectWithValue }) => {
  try {
    const response = await axios.get(`/publicFiles/${fileId}/topics/${topicId}/cards/${cardId}`)
    return response.data
  } catch (error) {
    return rejectWithValue(error.response?.data || 'Ошибка при получении данных карточки публичного файла')
  }
})

/**
 * Обновить данные карточки публичного файла
 * @param {Object} payload - Данные для обновления карточки
 * @param {string} payload.fileId - Идентификатор публичного файла
 * @param {string} payload.topicId - Идентификатор темы
 * @param {string} payload.cardId - Идентификатор карточки
 * @param {Object} payload.cardData - Обновленные данные карточки
 * @returns {Promise<Object>} Обновленная карточка
 */
export const updatePublicCard = createAsyncThunk('userFiles/updatePublicCard', async ({ fileId, topicId, cardId, cardData }, { rejectWithValue }) => {
  try {
    const response = await axios.put(`/publicFiles/${fileId}/topics/${topicId}/cards/${cardId}`, cardData)
    return response.data
  } catch (error) {
    return rejectWithValue(error.response?.data || 'Ошибка при обновлении карточки публичного файла')
  }
})
