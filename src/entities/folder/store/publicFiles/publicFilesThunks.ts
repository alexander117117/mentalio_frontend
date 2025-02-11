import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from '@axios'

export interface PublicFile {
  id: string
  [key: string]: any
}

export interface PublicTopic {
  id: string
  cards?: PublicCard[]
  [key: string]: any
}

export interface PublicCard {
  id: string
  [key: string]: any
}

interface AxiosErrorData {
  response?: {
    data?: string
  }
}

/**
 * Получить список публичных файлов
 * @returns {Promise<PublicFile[]>} Список публичных файлов
 */
export const getPublicFiles: any = createAsyncThunk<
  PublicFile[], // Возвращаемый тип при успехе
  void, // Аргумент не передаётся
  { rejectValue: string } // Тип для rejectWithValue
>('userFiles/getPublicFiles', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get('/publicFiles')
    return response.data
  } catch (error) {
    return rejectWithValue((error as AxiosErrorData)?.response?.data || 'Ошибка при получении публичных файлов')
  }
})

/**
 * Получить данные публичного файла
 * @param fileId - Идентификатор публичного файла
 * @returns {Promise<PublicFile>} Данные публичного файла
 */
export const getPublicFileDetails: any = createAsyncThunk<
  PublicFile, // Возвращаемый тип
  string, // Аргумент: fileId
  { rejectValue: string }
>('userFiles/getPublicFileDetails', async (fileId, { rejectWithValue }) => {
  try {
    const response = await axios.get(`/publicFiles/${fileId}`)
    return response.data
  } catch (error) {
    return rejectWithValue((error as AxiosErrorData)?.response?.data || 'Ошибка при получении данных публичного файла')
  }
})

/**
 * Добавить публичный файл в пользовательские файлы
 * @param fileId - Идентификатор публичного файла
 * @returns {Promise<PublicFile>} Добавленный файл
 */
export const addPublicFileToUserFiles: any = createAsyncThunk<PublicFile, string, { rejectValue: string }>(
  'userFiles/addPublicFileToUserFiles',
  async (fileId, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/publicFiles/${fileId}/addToUserFiles`)
      return response.data
    } catch (error) {
      return rejectWithValue(
        (error as AxiosErrorData)?.response?.data || 'Ошибка при добавлении публичного файла в пользовательские файлы',
      )
    }
  },
)

/**
 * Получить темы публичного файла
 * @param fileId - Идентификатор публичного файла
 * @returns {Promise<PublicTopic[]>} Список тем
 */
export const getPublicFileTopics: any = createAsyncThunk<PublicTopic[], string, { rejectValue: string }>(
  'userFiles/getPublicFileTopics',
  async (fileId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/publicFiles/${fileId}/topics`)
      return response.data
    } catch (error) {
      return rejectWithValue((error as AxiosErrorData)?.response?.data || 'Ошибка при получении тем публичного файла')
    }
  },
)

/**
 * Получить данные темы публичного файла
 * @param payload.fileId - Идентификатор публичного файла
 * @param payload.topicId - Идентификатор темы
 * @returns {Promise<PublicTopic>} Данные темы
 */
export const getPublicTopicDetails: any = createAsyncThunk<
  PublicTopic,
  { fileId: string; topicId: string },
  { rejectValue: string }
>('userFiles/getPublicTopicDetails', async ({ fileId, topicId }, { rejectWithValue }) => {
  try {
    const response = await axios.get(`/publicFiles/${fileId}/topics/${topicId}`)
    return response.data
  } catch (error) {
    return rejectWithValue(
      (error as AxiosErrorData)?.response?.data || 'Ошибка при получении данных темы публичного файла',
    )
  }
})

/**
 * Получить карточки темы публичного файла
 * @param payload.fileId - Идентификатор публичного файла
 * @param payload.topicId - Идентификатор темы
 * @returns {Promise<PublicCard[]>} Список карточек
 */
export const getPublicTopicCards: any = createAsyncThunk<
  PublicCard[],
  { fileId: string; topicId: string },
  { rejectValue: string }
>('userFiles/getPublicTopicCards', async ({ fileId, topicId }, { rejectWithValue }) => {
  try {
    const response = await axios.get(`/publicFiles/${fileId}/topics/${topicId}/cards`)
    return response.data
  } catch (error) {
    return rejectWithValue(
      (error as AxiosErrorData)?.response?.data || 'Ошибка при получении карточек темы публичного файла',
    )
  }
})

/**
 * Получить данные карточки публичного файла
 * @param payload.fileId - Идентификатор публичного файла
 * @param payload.topicId - Идентификатор темы
 * @param payload.cardId - Идентификатор карточки
 * @returns {Promise<PublicCard>} Данные карточки
 */
export const getPublicCardDetails: any = createAsyncThunk<
  PublicCard,
  { fileId: string; topicId: string; cardId: string },
  { rejectValue: string }
>('userFiles/getPublicCardDetails', async ({ fileId, topicId, cardId }, { rejectWithValue }) => {
  try {
    const response = await axios.get(`/publicFiles/${fileId}/topics/${topicId}/cards/${cardId}`)
    return response.data
  } catch (error) {
    return rejectWithValue(
      (error as AxiosErrorData)?.response?.data || 'Ошибка при получении данных карточки публичного файла',
    )
  }
})

/**
 * Обновить данные карточки публичного файла
 * @param payload.fileId - Идентификатор публичного файла
 * @param payload.topicId - Идентификатор темы
 * @param payload.cardId - Идентификатор карточки
 * @param payload.cardData - Обновленные данные карточки
 * @returns {Promise<PublicCard>} Обновленная карточка
 */
export const updatePublicCard: any = createAsyncThunk<
  PublicCard,
  { fileId: string; topicId: string; cardId: string; cardData: Partial<PublicCard> },
  { rejectValue: string }
>('userFiles/updatePublicCard', async ({ fileId, topicId, cardId, cardData }, { rejectWithValue }) => {
  try {
    const response = await axios.put(`/publicFiles/${fileId}/topics/${topicId}/cards/${cardId}`, cardData)
    return response.data
  } catch (error) {
    return rejectWithValue(
      (error as AxiosErrorData)?.response?.data || 'Ошибка при обновлении карточки публичного файла',
    )
  }
})
