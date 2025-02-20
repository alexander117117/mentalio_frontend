import { createAsyncThunk } from '@reduxjs/toolkit'
import { executeApiRTK } from '@/shared/api/apiHelpers'
import { CartFolderItem, TopicsItem, CartsWordsItem } from '@/entities/folder/lib/types'

/**
 * Получить список файлов пользователя.
 * @returns {Promise<CartFolderItem[]>} Список файлов пользователя.
 */
export const getUserFiles = createAsyncThunk<CartFolderItem[], void, { rejectValue: string }>(
  'userFiles/getUserFiles',
  async (_, { rejectWithValue }) => {
    const response = await executeApiRTK<{ userFiles: CartFolderItem[] }, void>({
      method: 'GET',
      url: '/userFiles',
      rejectWithValue,
      errorMessage: 'Ошибка при загрузке данных',
    })
    return response.data.userFiles
  },
)

/**
 * Создать новый файл пользователя.
 * @param fileData - Данные файла.
 * @returns {Promise<CartFolderItem>} Созданный файл.
 */
export const createUserFile = createAsyncThunk<CartFolderItem, Partial<CartFolderItem>, { rejectValue: string }>(
  'userFiles/createUserFile',
  async (fileData, { rejectWithValue }) => {
    const response = await executeApiRTK<CartFolderItem, Partial<CartFolderItem>>({
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
    await executeApiRTK<unknown, void>({
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
 * @returns {Promise<CartFolderItem>} Обновленный файл.
 */
export const updateUserFile = createAsyncThunk<
  CartFolderItem,
  { fileId: string; fileData: Partial<CartFolderItem> },
  { rejectValue: string }
>('userFiles/updateUserFile', async ({ fileId, fileData }, { rejectWithValue }) => {
  const response = await executeApiRTK<CartFolderItem, Partial<CartFolderItem>>({
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
 * @returns {Promise<TopicsItem[]>} Список тем файла.
 */
export const getFileTopics = createAsyncThunk<TopicsItem[], string, { rejectValue: string }>(
  'userFiles/getFileTopics',
  async (fileId, { rejectWithValue }) => {
    const response = await executeApiRTK<TopicsItem[], void>({
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
 * @returns {Promise<TopicsItem>} Добавленная тема.
 */
export const addTopicToFile = createAsyncThunk<
  TopicsItem,
  { fileId: string; topicData: Partial<TopicsItem> },
  { rejectValue: string }
>('userFiles/addTopicToFile', async ({ fileId, topicData }, { rejectWithValue }) => {
  const response = await executeApiRTK<TopicsItem, Partial<TopicsItem>>({
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
  await executeApiRTK<unknown, void>({
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
 * @returns {Promise<CartsWordsItem[]>} Список карточек темы.
 */
export const getTopicCards = createAsyncThunk<
  CartsWordsItem[],
  { fileId: string; topicId: string },
  { rejectValue: string }
>('userFiles/getTopicCards', async ({ fileId, topicId }, { rejectWithValue }) => {
  const response = await executeApiRTK<CartsWordsItem[], void>({
    method: 'GET',
    url: `/userFiles/${fileId}/topics/${topicId}/cards`,
    rejectWithValue,
    errorMessage: 'Ошибка при получении карточек темы',
  })
  return response.data
})

/**
 * Добавить карточку в тему.
 * @param payload.fileId - Идентификатор файла.
 * @param payload.topicId - Идентификатор темы.
 * @param payload.cardData - Данные карточки.
 * @returns {Promise<CartsWordsItem>} Добавленная карточка.
 */
export const addCardToTopic = createAsyncThunk<
  CartsWordsItem,
  { fileId: string; topicId: string; cardData: Partial<CartsWordsItem> },
  { rejectValue: string }
>('userFiles/addCardToTopic', async ({ fileId, topicId, cardData }, { rejectWithValue }) => {
  const response = await executeApiRTK<CartsWordsItem, Partial<CartsWordsItem>>({
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
  await executeApiRTK<unknown, void>({
    method: 'DELETE',
    url: `/userFiles/${fileId}/topics/${topicId}/cards/${cardId}`,
    rejectWithValue,
    errorMessage: 'Ошибка при удалении карточки',
  })
  return cardId
})
