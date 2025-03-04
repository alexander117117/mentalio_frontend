import { createAsyncThunk } from '@reduxjs/toolkit'
import { executeApiRTK } from '@/shared/api/apiHelpers'
import { FolderItem, TopicsItem, WordsItem } from '@/entities/folder/lib/types'
import { API_ENDPOINTS } from '@/shared/api/constEndpoints'
import { Id } from '@/shared/types/types'

/**
 * Получить список файлов пользователя.
 * @returns {Promise<FolderItem[]>} Список файлов пользователя.
 */
interface GetUserFilesResponse {
  results: {
    Folders: FolderItem[]
  }
}
export const getUserFiles = createAsyncThunk<FolderItem[], void, { rejectValue: string }>(
  'userFiles/getUserFiles',
  async (_, { rejectWithValue }) => {
    const response = await executeApiRTK<GetUserFilesResponse, void>({
      method: 'GET',
      url: API_ENDPOINTS.folders.files.list,
      rejectWithValue,
      errorMessage: 'Ошибка при загрузке данных',
    })
    return response.data.results.Folders
  },
)

/**
 * Создать новый файл пользователя.
 * @param fileData - Данные файла.
 * @returns {Promise<FolderItem>} Созданный файл.
 */
interface CreateUserFilePayload extends Pick<FolderItem, 'folderName' | 'categoryName' | 'description'> {
  topics: Pick<TopicsItem, 'topicName' | 'id'>[]
}
export const createUserFile = createAsyncThunk<FolderItem, Partial<CreateUserFilePayload>, { rejectValue: string }>(
  'userFiles/createUserFile',
  async (fileData, { rejectWithValue }) => {
    const response = await executeApiRTK<FolderItem, Partial<CreateUserFilePayload>>({
      method: 'POST',
      url: API_ENDPOINTS.folders.files.create,
      body: fileData,
      rejectWithValue,
      errorMessage: 'Ошибка при создании файла',
    })
    console.log('response createUserFile', response)

    return response.data
  },
)

/**
 * Удалить файл пользователя.
 * @param fileId - Идентификатор файла.
 * @returns {Promise<string>} Идентификатор удаленного файла.
 */
export const deleteUserFile = createAsyncThunk<number, Id, { rejectValue: string }>(
  'userFiles/deleteUserFile',
  async (fileId, { rejectWithValue }) => {
    await executeApiRTK<unknown, void>({
      method: 'DELETE',
      url: API_ENDPOINTS.folders.files.delete(fileId),
      rejectWithValue,
      errorMessage: 'Ошибка при удалении файла',
    })
    return Number(fileId)
  },
)

/**
 * Обновить данные файла пользователя.
 * @param payload.fileId - Идентификатор файла.
 * @param payload.fileData - Обновленные данные файла.
 * @returns {Promise<FolderItem>} Обновленный файл.
 */
export const updateUserFile = createAsyncThunk<
  FolderItem,
  { fileId: string; fileData: Partial<FolderItem> },
  { rejectValue: string }
>('userFiles/updateUserFile', async ({ fileId, fileData }, { rejectWithValue }) => {
  const response = await executeApiRTK<FolderItem, Partial<FolderItem>>({
    method: 'PUT',
    url: API_ENDPOINTS.folders.files.update(fileId),
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
      url: API_ENDPOINTS.folders.topics.list(fileId),
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
interface addTopicToFileResponse {
  topic: TopicsItem
  idFolder: Id
}
interface addTopicToFilePayload {
  idFolder: Id
  topicData: Partial<TopicsItem>
}
export const addTopicToFile = createAsyncThunk<addTopicToFileResponse, addTopicToFilePayload, { rejectValue: string }>(
  'userFiles/addTopicToFile',
  async ({ idFolder, topicData }, { rejectWithValue }) => {
    const response = await executeApiRTK<TopicsItem, Partial<TopicsItem>>({
      method: 'POST',
      url: API_ENDPOINTS.folders.topics.create(idFolder),
      body: topicData,
      rejectWithValue,
      errorMessage: 'Ошибка при добавлении темы',
    })
    return { topic: response.data, idFolder }
  },
)

/**
 * Удалить тему из файла.
 * @param payload.fileId - Идентификатор файла.
 * @param payload.topicId - Идентификатор темы.
 * @returns {Promise<string>} Идентификатор удаленной темы.
 */
interface DeleteTopicPayload {
  idFolder: Id
  idTopic: Id
}
export const deleteTopicFromFile = createAsyncThunk<DeleteTopicPayload, DeleteTopicPayload, { rejectValue: string }>(
  'userFiles/deleteTopicFromFile',
  async ({ idFolder, idTopic }, { rejectWithValue }) => {
    await executeApiRTK<unknown, void>({
      method: 'DELETE',
      url: API_ENDPOINTS.folders.topics.delete(idFolder, idTopic),
      rejectWithValue,
      errorMessage: 'Ошибка при удалении темы',
    })
    return { idFolder, idTopic }
  },
)

/**
 * Получить карточки для темы в файле.
 * @param payload.topicId - Идентификатор темы.
 * @returns {Promise<WordsItem[]>} Список карточек темы.
 */
export const getTopicCards = createAsyncThunk<
  WordsItem[],
  { fileId: string; topicId: string },
  { rejectValue: string }
>('userFiles/getTopicCards', async ({ topicId }, { rejectWithValue }) => {
  const response = await executeApiRTK<WordsItem[], void>({
    method: 'GET',
    url: API_ENDPOINTS.folders.cards.list(topicId),
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
 * @returns {Promise<WordsItem>} Добавленная карточка.
 */
export const addCardToTopic = createAsyncThunk<
  WordsItem,
  { fileId: string; topicId: string; cardData: Partial<WordsItem> },
  { rejectValue: string }
>('userFiles/addCardToTopic', async ({ fileId, topicId, cardData }, { rejectWithValue }) => {
  const response = await executeApiRTK<WordsItem, Partial<WordsItem>>({
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

export const addPublicFile = createAsyncThunk<FolderItem, { idFolder: Id }, { rejectValue: string }>(
  'userFiles/addPublicFile',
  async ({ idFolder }, { rejectWithValue }) => {
    const response = await executeApiRTK<FolderItem>({
      method: 'POST',
      url: API_ENDPOINTS.folders.files.add(idFolder),
      rejectWithValue,
      errorMessage: 'Ошибка при добавлении файла',
    })
    console.log(response.data)

    return response.data
  },
)
