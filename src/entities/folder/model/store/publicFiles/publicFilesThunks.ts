import { createAsyncThunk } from '@reduxjs/toolkit'
import { TopicsItem, CardFolderItem, CardsWordsItem } from '../../../lib/types'
import { executeApiRTK } from '@/shared/api/apiHelpers.ts'

/**
 * Получить список публичных файлов
 * @returns {Promise<CardFolderItem[]>} Список публичных файлов
 */
export const getPublicFiles: any = createAsyncThunk<
  CardFolderItem[], // Возвращаемый тип при успехе
  void, // Аргумент не передаётся
  { rejectValue: string } // Тип для rejectWithValue
>('userFiles/getPublicFiles', async (_, { rejectWithValue }) => {
  const response = await executeApiRTK({
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
 * @returns {Promise<CardFolderItem>} Данные публичного файла
 */
export const getPublicFileDetails: any = createAsyncThunk<
  CardFolderItem, // Возвращаемый тип
  string, // Аргумент: fileId
  { rejectValue: string }
>('userFiles/getPublicFileDetails', async (fileId, { rejectWithValue }) => {
  const response = await executeApiRTK({
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
 * @returns {Promise<CardFolderItem>} Добавленный файл
 */
export const addPublicFileToUserFiles: any = createAsyncThunk<
  CardFolderItem,
  string,
  {
    rejectValue: string
  }
>('userFiles/addPublicFileToUserFiles', async (fileId, { rejectWithValue }) => {
  const response = await executeApiRTK({
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
 * @returns {Promise<TopicsItem[]>} Список тем
 */
export const getPublicFileTopics: any = createAsyncThunk<
  TopicsItem[],
  string,
  {
    rejectValue: string
  }
>('userFiles/getPublicFileTopics', async (fileId, { rejectWithValue }) => {
  const response = await executeApiRTK({
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
 * @returns {Promise<TopicsItem>} Данные темы
 */
export const getPublicTopicDetails: any = createAsyncThunk<
  TopicsItem,
  { fileId: string; topicId: string },
  { rejectValue: string }
>('userFiles/getPublicTopicDetails', async ({ fileId, topicId }, { rejectWithValue }) => {
  const response = await executeApiRTK({
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
 * @returns {Promise<CardsWordsItem[]>} Список карточек
 */
export const getPublicTopicCards: any = createAsyncThunk<
  CardsWordsItem[],
  { fileId: string; topicId: string },
  { rejectValue: string }
>('userFiles/getPublicTopicCards', async ({ fileId, topicId }, { rejectWithValue }) => {
  const response = await executeApiRTK({
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
 * @returns {Promise<CardsWordsItem>} Данные карточки
 */
export const getPublicCardDetails: any = createAsyncThunk<
  CardsWordsItem,
  { fileId: string; topicId: string; cardId: string },
  { rejectValue: string }
>('userFiles/getPublicCardDetails', async ({ fileId, topicId, cardId }, { rejectWithValue }) => {
  const response = await executeApiRTK({
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
 * @returns {Promise<CardsWordsItem>} Обновленная карточка
 */
export const updatePublicCard: any = createAsyncThunk<
  CardsWordsItem,
  {
    fileId: string
    topicId: string
    cardId: string
    cardData: Partial<CardsWordsItem>
  },
  { rejectValue: string }
>('userFiles/updatePublicCard', async ({ fileId, topicId, cardId, cardData }, { rejectWithValue }) => {
  const response = await executeApiRTK({
    method: 'PUT',
    url: `/publicFiles/${fileId}/topics/${topicId}/cards/${cardId}`,
    body: cardData,
    rejectWithValue,
    errorMessage: 'Ошибка при обновлении карточки публичного файла',
  })
  return response.data
})
