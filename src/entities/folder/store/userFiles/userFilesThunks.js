// userFilesThunks.js
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

/**
 * Получить список файлов пользователя
 * @returns {Promise<Object[]>} Список файлов пользователя
 */
export const getUserFiles = createAsyncThunk('userFiles/getUserFiles', async (_, { rejectWithValue }) => {
  const res = {
    data: {
      items: [
        {
          id: 1,
          title: 'Анатомия1',
          dateCreated: '07.12.2024',
          desc: 'Учитесь темам , подобранным для подготовки к определенным ситуационным задачам',
        },
        {
          id: 2,
          title: 'Анатомия2',
          dateCreated: '07.12.2022',
          desc: 'Учитесь темам , подобранным для подготовки к определенным ситуационным задачам',
        },
      ],
    },
  }
  try {
    // const res = await axios.get('/userFiles')
    return res.data.items
  } catch (error) {
    return rejectWithValue(error.res?.data || 'Ошибка при загрузке данных')
  }
})

/**
 * Создать новый файл пользователя
 * @param {Object} fileData - Данные файла
 * @returns {Promise<Object>} Созданный файл
 */
export const createUserFile = createAsyncThunk('userFiles/createUserFile', async (fileData, { rejectWithValue }) => {
  try {
    const res = await axios.post('/userFiles', fileData)
    return res.data
  } catch (error) {
    return rejectWithValue(error.res?.data || 'Ошибка при создании файла')
  }
})

/**
 * Удалить файл пользователя
 * @param {string} fileId - Идентификатор файла
 * @returns {Promise<string>} Удаленный идентификатор файла
 */
export const deleteUserFile = createAsyncThunk('userFiles/deleteUserFile', async (fileId, { rejectWithValue }) => {
  try {
    await axios.delete(`/userFiles/${fileId}`)
    return fileId
  } catch (error) {
    return rejectWithValue(error.res?.data || 'Ошибка при удалении файла')
  }
})

/**
 * Обновить данные файла пользователя
 * @param {Object} payload - Данные для обновления
 * @param {string} payload.fileId - Идентификатор файла
 * @param {Object} payload.fileData - Обновленные данные файла
 * @returns {Promise<Object>} Обновленный файл
 */
export const updateUserFile = createAsyncThunk(
  'userFiles/updateUserFile',
  async ({ fileId, fileData }, { rejectWithValue }) => {
    try {
      const res = await axios.put(`/userFiles/${fileId}`, fileData)
      return res.data
    } catch (error) {
      return rejectWithValue(error.res?.data || 'Ошибка при обновлении файла')
    }
  },
)

/**
 * Получить темы для указанного файла
 * @param {string} fileId - Идентификатор файла
 * @returns {Promise<Object[]>} Список тем
 */
export const getFileTopics = createAsyncThunk('userFiles/getFileTopics', async (fileId, { rejectWithValue }) => {
  try {
    const res = await axios.get(`/userFiles/${fileId}/topics`)
    return res.data
  } catch (error) {
    return rejectWithValue(error.res?.data || 'Ошибка при получении тем файла')
  }
})

/**
 * Добавить тему в файл
 * @param {Object} payload - Данные для добавления темы
 * @param {string} payload.fileId - Идентификатор файла
 * @param {Object} payload.topicData - Данные темы
 * @returns {Promise<Object>} Добавленная тема
 */
export const addTopicToFile = createAsyncThunk(
  'userFiles/addTopicToFile',
  async ({ fileId, topicData }, { rejectWithValue }) => {
    try {
      const res = await axios.post(`/userFiles/${fileId}/topics`, topicData)
      return res.data
    } catch (error) {
      return rejectWithValue(error.res?.data || 'Ошибка при добавлении темы')
    }
  },
)

/**
 * Удалить тему из файла
 * @param {Object} payload - Данные для удаления темы
 * @param {string} payload.fileId - Идентификатор файла
 * @param {string} payload.topicId - Идентификатор темы
 * @returns {Promise<string>} Удаленный идентификатор темы
 */
export const deleteTopicFromFile = createAsyncThunk(
  'userFiles/deleteTopicFromFile',
  async ({ fileId, topicId }, { rejectWithValue }) => {
    try {
      await axios.delete(`/userFiles/${fileId}/topics/${topicId}`)
      return topicId
    } catch (error) {
      return rejectWithValue(error.res?.data || 'Ошибка при удалении темы')
    }
  },
)

/**
 * Получить карточки для темы в файле
 * @param {Object} payload - Данные для получения карточек
 * @param {string} payload.fileId - Идентификатор файла
 * @param {string} payload.topicId - Идентификатор темы
 * @returns {Promise<Object[]>} Список карточек
 */
export const getTopicCards = createAsyncThunk(
  'userFiles/getTopicCards',
  async ({ fileId, topicId }, { rejectWithValue }) => {
    try {
      const res = await axios.get(`/userFiles/${fileId}/topics/${topicId}/cards`)
      return res.data
    } catch (error) {
      return rejectWithValue(error.res?.data || 'Ошибка при получении карточек темы')
    }
  },
)

/**
 * Добавить карточку в тему
 * @param {Object} payload - Данные для добавления карточки
 * @param {string} payload.fileId - Идентификатор файла
 * @param {string} payload.topicId - Идентификатор темы
 * @param {Object} payload.cardData - Данные карточки
 * @returns {Promise<Object>} Добавленная карточка
 */
export const addCardToTopic = createAsyncThunk(
  'userFiles/addCardToTopic',
  async ({ fileId, topicId, cardData }, { rejectWithValue }) => {
    try {
      const res = await axios.post(`/userFiles/${fileId}/topics/${topicId}/cards`, cardData)
      return res.data
    } catch (error) {
      return rejectWithValue(error.res?.data || 'Ошибка при добавлении карточки')
    }
  },
)

/**
 * Удалить карточку из темы
 * @param {Object} payload - Данные для удаления карточки
 * @param {string} payload.fileId - Идентификатор файла
 * @param {string} payload.topicId - Идентификатор темы
 * @param {string} payload.cardId - Идентификатор карточки
 * @returns {Promise<string>} Удаленный идентификатор карточки
 */
export const deleteCardFromTopic = createAsyncThunk(
  'userFiles/deleteCardFromTopic',
  async ({ fileId, topicId, cardId }, { rejectWithValue }) => {
    try {
      await axios.delete(`/userFiles/${fileId}/topics/${topicId}/cards/${cardId}`)
      return cardId
    } catch (error) {
      return rejectWithValue(error.res?.data || 'Ошибка при удалении карточки')
    }
  },
)
