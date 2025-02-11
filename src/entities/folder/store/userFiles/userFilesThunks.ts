import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from '@axios'

export interface CardItem {
  id: number | string
  question?: string
  answer?: string
}

export interface TopicItem {
  id: number | string
  title?: string
  desc?: string
  cards?: CardItem[]
}

export interface FileItem {
  id: number | string
  title: string
  dateCreated: string
  desc: string
  topics?: TopicItem[]
}

interface AxiosErrorData {
  res?: {
    data?: string
  }
}

/**
 * Получить список файлов пользователя.
 * Возвращает массив объектов FileItem.
 */
export const getUserFiles: any = createAsyncThunk<
  FileItem[], // Возвращаемый тип данных при успешном запросе
  void, // Тип аргумента (здесь не передаём данных)
  { rejectValue: string } // Тип данных, возвращаемых при rejectWithValue
>('userFiles/getUserFiles', async (_, { rejectWithValue }) => {
  const mockResponse = {
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
    // return res.data.items
    return mockResponse.data.items
  } catch (error) {
    return rejectWithValue((error as AxiosErrorData)?.res?.data || 'Ошибка при загрузке данных')
  }
})

/**
 * Создать новый файл пользователя.
 * @param fileData - Данные файла
 * Возвращает созданный объект FileItem.
 */
export const createUserFile: any = createAsyncThunk<
  FileItem, // Возвращаемый тип
  Partial<FileItem>, // Тип данных, которые мы передаём (fileData)
  { rejectValue: string } // Тип данных для rejectWithValue
>('userFiles/createUserFile', async (fileData, { rejectWithValue }) => {
  try {
    const res = await axios.post('/userFiles', fileData)
    return res.data
  } catch (error) {
    return rejectWithValue((error as AxiosErrorData)?.res?.data || 'Ошибка при создании файла')
  }
})

/**
 * Удалить файл пользователя.
 * @param fileId - Идентификатор файла
 * Возвращает удалённый идентификатор файла (string).
 */
export const deleteUserFile: any = createAsyncThunk<
  string, // Возвращаемый тип (удалённый fileId)
  string, // Тип аргумента (fileId)
  { rejectValue: string }
>('userFiles/deleteUserFile', async (fileId, { rejectWithValue }) => {
  try {
    await axios.delete(`/userFiles/${fileId}`)
    return fileId
  } catch (error) {
    return rejectWithValue((error as AxiosErrorData)?.res?.data || 'Ошибка при удалении файла')
  }
})

/**
 * Обновить данные файла пользователя.
 * @param payload.fileId   - Идентификатор файла
 * @param payload.fileData - Обновлённые данные файла
 * Возвращает обновлённый FileItem.
 */
export const updateUserFile: any = createAsyncThunk<
  FileItem, // Возвращаемый тип (обновлённый файл)
  { fileId: string; fileData: Partial<FileItem> }, // Тип аргумента
  { rejectValue: string }
>('userFiles/updateUserFile', async ({ fileId, fileData }, { rejectWithValue }) => {
  try {
    const res = await axios.put(`/userFiles/${fileId}`, fileData)
    return res.data
  } catch (error) {
    return rejectWithValue((error as AxiosErrorData)?.res?.data || 'Ошибка при обновлении файла')
  }
})

/**
 * Получить темы для указанного файла.
 * @param fileId - Идентификатор файла
 * Возвращает список тем (TopicItem[]).
 */
export const getFileTopics: any = createAsyncThunk<
  TopicItem[], // Возвращаемый тип - массив тем
  string, // Тип аргумента - fileId
  { rejectValue: string }
>('userFiles/getFileTopics', async (fileId, { rejectWithValue }) => {
  try {
    const res = await axios.get(`/userFiles/${fileId}/topics`)
    return res.data
  } catch (error) {
    return rejectWithValue((error as AxiosErrorData)?.res?.data || 'Ошибка при получении тем файла')
  }
})

/**
 * Добавить тему в файл.
 * @param payload.fileId   - Идентификатор файла
 * @param payload.topicData - Данные темы
 * Возвращает добавленную тему (TopicItem).
 */
export const addTopicToFile: any = createAsyncThunk<
  TopicItem,
  { fileId: string; topicData: Partial<TopicItem> },
  { rejectValue: string }
>('userFiles/addTopicToFile', async ({ fileId, topicData }, { rejectWithValue }) => {
  try {
    const res = await axios.post(`/userFiles/${fileId}/topics`, topicData)
    return res.data
  } catch (error) {
    return rejectWithValue((error as AxiosErrorData)?.res?.data || 'Ошибка при добавлении темы')
  }
})

/**
 * Удалить тему из файла.
 * @param payload.fileId  - Идентификатор файла
 * @param payload.topicId - Идентификатор темы
 * Возвращает удалённый идентификатор темы (string).
 */
export const deleteTopicFromFile: any = createAsyncThunk<
  string,
  { fileId: string; topicId: string },
  { rejectValue: string }
>('userFiles/deleteTopicFromFile', async ({ fileId, topicId }, { rejectWithValue }) => {
  try {
    await axios.delete(`/userFiles/${fileId}/topics/${topicId}`)
    return topicId
  } catch (error) {
    return rejectWithValue((error as AxiosErrorData)?.res?.data || 'Ошибка при удалении темы')
  }
})

/**
 * Получить карточки для темы в файле.
 * @param payload.fileId  - Идентификатор файла
 * @param payload.topicId - Идентификатор темы
 * Возвращает список карточек (CardItem[]).
 */
export const getTopicCards: any = createAsyncThunk<
  CardItem[],
  { fileId: string; topicId: string },
  { rejectValue: string }
>('userFiles/getTopicCards', async ({ fileId, topicId }, { rejectWithValue }) => {
  try {
    const res = await axios.get(`/userFiles/${fileId}/topics/${topicId}/cards`)
    return res.data
  } catch (error) {
    return rejectWithValue((error as AxiosErrorData)?.res?.data || 'Ошибка при получении карточек темы')
  }
})

/**
 * Добавить карточку в тему.
 * @param payload.fileId  - Идентификатор файла
 * @param payload.topicId - Идентификатор темы
 * @param payload.cardData - Данные карточки
 * Возвращает добавленную карточку (CardItem).
 */
export const addCardToTopic: any = createAsyncThunk<
  CardItem,
  { fileId: string; topicId: string; cardData: Partial<CardItem> },
  { rejectValue: string }
>('userFiles/addCardToTopic', async ({ fileId, topicId, cardData }, { rejectWithValue }) => {
  try {
    const res = await axios.post(`/userFiles/${fileId}/topics/${topicId}/cards`, cardData)
    return res.data
  } catch (error) {
    return rejectWithValue((error as AxiosErrorData)?.res?.data || 'Ошибка при добавлении карточки')
  }
})

/**
 * Удалить карточку из темы.
 * @param payload.fileId  - Идентификатор файла
 * @param payload.topicId - Идентификатор темы
 * @param payload.cardId  - Идентификатор карточки
 * Возвращает удалённый идентификатор карточки (string).
 */
export const deleteCardFromTopic: any = createAsyncThunk<
  string,
  { fileId: string; topicId: string; cardId: string },
  { rejectValue: string }
>('userFiles/deleteCardFromTopic', async ({ fileId, topicId, cardId }, { rejectWithValue }) => {
  try {
    await axios.delete(`/userFiles/${fileId}/topics/${topicId}/cards/${cardId}`)
    return cardId
  } catch (error) {
    return rejectWithValue((error as AxiosErrorData)?.res?.data || 'Ошибка при удалении карточки')
  }
})
