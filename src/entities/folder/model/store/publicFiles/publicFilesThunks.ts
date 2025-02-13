import { createAsyncThunk } from '@reduxjs/toolkit'
import { PublicFile, PublicTopic, PublicCard } from '../../../lib/types.ts'
import { executeApiRequestTrunks } from '@/shared/api/apiHelpers.ts'

/**
 * Получить список публичных файлов
 * @returns {Promise<PublicFile[]>} Список публичных файлов
 */
export const getPublicFiles: any = createAsyncThunk<
  PublicFile[], // Возвращаемый тип при успехе
  void, // Аргумент не передаётся
  { rejectValue: string } // Тип для rejectWithValue
>('userFiles/getPublicFiles', async (_, { rejectWithValue }) => {
  const response = await executeApiRequestTrunks({
    method: 'GET',
    url: '/publicFiles',
    rejectWithValue,
    errorMessage: 'Ошибка при получении публичных файлов',
  })
  return response.data
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
  const response = await executeApiRequestTrunks({
    method: 'GET',
    url: `/publicFiles/${fileId}`,
    rejectWithValue,
    errorMessage: 'Ошибка при получении данных публичного файла',
  })
  return response.data
})

/**
 * Добавить публичный файл в пользовательские файлы
 * @param fileId - Идентификатор публичного файла
 * @returns {Promise<PublicFile>} Добавленный файл
 */
export const addPublicFileToUserFiles: any = createAsyncThunk<
  PublicFile,
  string,
  {
    rejectValue: string
  }
>('userFiles/addPublicFileToUserFiles', async (fileId, { rejectWithValue }) => {
  const response = await executeApiRequestTrunks({
    method: 'GET',
    url: `/publicFiles/${fileId}/addToUserFiles`,
    rejectWithValue,
    errorMessage: 'Ошибка при добавлении публичного файла в пользовательские файлы',
  })
  return response.data
})

/**
 * Получить темы публичного файла
 * @param fileId - Идентификатор публичного файла
 * @returns {Promise<PublicTopic[]>} Список тем
 */
export const getPublicFileTopics: any = createAsyncThunk<
  PublicTopic[],
  string,
  {
    rejectValue: string
  }
>('userFiles/getPublicFileTopics', async (fileId, { rejectWithValue }) => {
  const response = await executeApiRequestTrunks({
    method: 'GET',
    url: `/publicFiles/${fileId}/topics`,
    rejectWithValue,
    errorMessage: 'Ошибка при получении тем публичного файла',
  })
  return response.data
})

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
  const response = await executeApiRequestTrunks({
    method: 'GET',
    url: `/publicFiles/${fileId}/topics/${topicId}`,
    rejectWithValue,
    errorMessage: 'Ошибка при получении данных темы публичного файла',
  })
  return response.data
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
  const response = await executeApiRequestTrunks({
    method: 'GET',
    url: `/publicFiles/${fileId}/topics/${topicId}/cards`,
    rejectWithValue,
    errorMessage: 'Ошибка при получении карточек темы публичного файла',
  })
  return response.data
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
  const response = await executeApiRequestTrunks({
    method: 'GET',
    url: `/publicFiles/${fileId}/topics/${topicId}/cards/${cardId}`,
    rejectWithValue,
    errorMessage: 'Ошибка при получении данных карточки публичного файла',
  })
  return response.data
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
  {
    fileId: string
    topicId: string
    cardId: string
    cardData: Partial<PublicCard>
  },
  { rejectValue: string }
>('userFiles/updatePublicCard', async ({ fileId, topicId, cardId, cardData }, { rejectWithValue }) => {
  const response = await executeApiRequestTrunks({
    method: 'PUT',
    url: `/publicFiles/${fileId}/topics/${topicId}/cards/${cardId}`,
    body: cardData,
    rejectWithValue,
    errorMessage: 'Ошибка при обновлении карточки публичного файла',
  })
  return response.data
})
