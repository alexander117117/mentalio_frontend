import { createAsyncThunk } from '@reduxjs/toolkit'
import { executeApiRequestTrunks } from '@/shared/api/apiHelpers'
import { FileItem, TopicItem, CardItem } from '../../../lib/types'

/**
 * Получить список файлов пользователя.
 * @returns {Promise<FileItem[]>} Список файлов пользователя.
 */
export const getUserFiles = createAsyncThunk<FileItem[], void, { rejectValue: string }>(
  'userFiles/getUserFiles',
  async (_, { rejectWithValue }) => {
    const response = await executeApiRequestTrunks<{ items: FileItem[] }, void>({
      method: 'GET',
      url: '/userFiles',
      rejectWithValue,
      errorMessage: 'Ошибка при загрузке данных',
    })
    return response.data.items
  },
)

/**
 * Создать новый файл пользователя.
 * @param fileData - Данные файла.
 * @returns {Promise<FileItem>} Созданный файл.
 */
export const createUserFile = createAsyncThunk<FileItem, Partial<FileItem>, { rejectValue: string }>(
  'userFiles/createUserFile',
  async (fileData, { rejectWithValue }) => {
    const response = await executeApiRequestTrunks<FileItem, Partial<FileItem>>({
      method: 'POST',
      url: '/userFiles',
      body: fileData,
      rejectWithValue,
      errorMessage: 'Ошибка при создании файла',
    })
    return response.data
  },
)

/**
 * Удалить файл пользователя.
 * @param fileId - Идентификатор файла.
 * @returns {Promise<string>} Идентификатор удаленного файла.
 */
export const deleteUserFile = createAsyncThunk<string, string, { rejectValue: string }>(
  'userFiles/deleteUserFile',
  async (fileId, { rejectWithValue }) => {
    await executeApiRequestTrunks<unknown, void>({
      method: 'DELETE',
      url: `/userFiles/${fileId}`,
      rejectWithValue,
      errorMessage: 'Ошибка при удалении файла',
    })
    return fileId
  },
)

/**
 * Обновить данные файла пользователя.
 * @param payload.fileId - Идентификатор файла.
 * @param payload.fileData - Обновленные данные файла.
 * @returns {Promise<FileItem>} Обновленный файл.
 */
export const updateUserFile = createAsyncThunk<
  FileItem,
  { fileId: string; fileData: Partial<FileItem> },
  { rejectValue: string }
>('userFiles/updateUserFile', async ({ fileId, fileData }, { rejectWithValue }) => {
  const response = await executeApiRequestTrunks<FileItem, Partial<FileItem>>({
    method: 'PUT',
    url: `/userFiles/${fileId}`,
    body: fileData,
    rejectWithValue,
    errorMessage: 'Ошибка при обновлении файла',
  })
  return response.data
})

/**
 * Получить темы для указанного файла.
 * @param fileId - Идентификатор файла.
 * @returns {Promise<TopicItem[]>} Список тем файла.
 */
export const getFileTopics = createAsyncThunk<TopicItem[], string, { rejectValue: string }>(
  'userFiles/getFileTopics',
  async (fileId, { rejectWithValue }) => {
    const response = await executeApiRequestTrunks<TopicItem[], void>({
      method: 'GET',
      url: `/userFiles/${fileId}/topics`,
      rejectWithValue,
      errorMessage: 'Ошибка при получении тем файла',
    })
    return response.data
  },
)

/**
 * Добавить тему в файл.
 * @param payload.fileId - Идентификатор файла.
 * @param payload.topicData - Данные темы.
 * @returns {Promise<TopicItem>} Добавленная тема.
 */
export const addTopicToFile = createAsyncThunk<
  TopicItem,
  { fileId: string; topicData: Partial<TopicItem> },
  { rejectValue: string }
>('userFiles/addTopicToFile', async ({ fileId, topicData }, { rejectWithValue }) => {
  const response = await executeApiRequestTrunks<TopicItem, Partial<TopicItem>>({
    method: 'POST',
    url: `/userFiles/${fileId}/topics`,
    body: topicData,
    rejectWithValue,
    errorMessage: 'Ошибка при добавлении темы',
  })
  return response.data
})

/**
 * Удалить тему из файла.
 * @param payload.fileId - Идентификатор файла.
 * @param payload.topicId - Идентификатор темы.
 * @returns {Promise<string>} Идентификатор удаленной темы.
 */
export const deleteTopicFromFile = createAsyncThunk<
  string,
  { fileId: string; topicId: string },
  { rejectValue: string }
>('userFiles/deleteTopicFromFile', async ({ fileId, topicId }, { rejectWithValue }) => {
  await executeApiRequestTrunks<unknown, void>({
    method: 'DELETE',
    url: `/userFiles/${fileId}/topics/${topicId}`,
    rejectWithValue,
    errorMessage: 'Ошибка при удалении темы',
  })
  return topicId
})

/**
 * Получить карточки для темы в файле.
 * @param payload.fileId - Идентификатор файла.
 * @param payload.topicId - Идентификатор темы.
 * @returns {Promise<CardItem[]>} Список карточек темы.
 */
export const getTopicCards = createAsyncThunk<CardItem[], { fileId: string; topicId: string }, { rejectValue: string }>(
  'userFiles/getTopicCards',
  async ({ fileId, topicId }, { rejectWithValue }) => {
    const response = await executeApiRequestTrunks<CardItem[], void>({
      method: 'GET',
      url: `/userFiles/${fileId}/topics/${topicId}/cards`,
      rejectWithValue,
      errorMessage: 'Ошибка при получении карточек темы',
    })
    return response.data
  },
)

/**
 * Добавить карточку в тему.
 * @param payload.fileId - Идентификатор файла.
 * @param payload.topicId - Идентификатор темы.
 * @param payload.cardData - Данные карточки.
 * @returns {Promise<CardItem>} Добавленная карточка.
 */
export const addCardToTopic = createAsyncThunk<
  CardItem,
  { fileId: string; topicId: string; cardData: Partial<CardItem> },
  { rejectValue: string }
>('userFiles/addCardToTopic', async ({ fileId, topicId, cardData }, { rejectWithValue }) => {
  const response = await executeApiRequestTrunks<CardItem, Partial<CardItem>>({
    method: 'POST',
    url: `/userFiles/${fileId}/topics/${topicId}/cards`,
    body: cardData,
    rejectWithValue,
    errorMessage: 'Ошибка при добавлении карточки',
  })
  return response.data
})

/**
 * Удалить карточку из темы.
 * @param payload.fileId - Идентификатор файла.
 * @param payload.topicId - Идентификатор темы.
 * @param payload.cardId - Идентификатор карточки.
 * @returns {Promise<string>} Идентификатор удаленной карточки.
 */
export const deleteCardFromTopic = createAsyncThunk<
  string,
  { fileId: string; topicId: string; cardId: string },
  { rejectValue: string }
>('userFiles/deleteCardFromTopic', async ({ fileId, topicId, cardId }, { rejectWithValue }) => {
  await executeApiRequestTrunks<unknown, void>({
    method: 'DELETE',
    url: `/userFiles/${fileId}/topics/${topicId}/cards/${cardId}`,
    rejectWithValue,
    errorMessage: 'Ошибка при удалении карточки',
  })
  return cardId
})
