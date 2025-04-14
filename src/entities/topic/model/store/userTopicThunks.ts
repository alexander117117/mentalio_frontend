import { createAsyncThunk } from '@reduxjs/toolkit'
import { executeApiRTK } from '@/shared/api/apiHelpers'
import { TopicsItem, WordsItem } from '@/entities/folder/lib/types'
import { API_ENDPOINTS } from '@/shared/api/constEndpoints'
import { MapIdTopicSlice } from '@/entities/topic/lib/types'
import { Id } from '@/shared/types'

/**
 * Получить данные темы.
 */
type GetTopicTopicParams = MapIdTopicSlice
interface GetTopicTopicResponse {
  idFolder: Id
  dataTopic: TopicsItem
}
export const getTopic = createAsyncThunk<GetTopicTopicResponse, GetTopicTopicParams, { rejectValue: string }>(
  'userFiles/getFileTopics',
  async ({ idFolder, idTopic }, { rejectWithValue }) => {
    const response = await executeApiRTK<TopicsItem, void>({
      method: 'GET',
      url: API_ENDPOINTS.folders.topics.details(idFolder, idTopic),
      rejectWithValue,
      errorMessage: 'Ошибка при получении данных файла',
    })
    return {
      idFolder: idFolder,
      dataTopic: response.data,
    }
  },
)

/**
 * Обновить Topic
 */
interface updateTopicParams {
  idFolder: Id
  idTopic: Id
  topicData: TopicsItem
}
export const updateTopic = createAsyncThunk<TopicsItem, updateTopicParams, { rejectValue: string }>(
  'userTopic/updateTopic',
  async ({ idFolder, idTopic, topicData }, { rejectWithValue }) => {
    const response = await executeApiRTK<TopicsItem, void>({
      method: 'PUT',
      url: API_ENDPOINTS.folders.topics.update(idFolder, idTopic),
      body: topicData,
      rejectWithValue,
      errorMessage: 'Ошибка при обновлении данных файла',
    })
    return response.data
  },
)

/**
 * Полуение списка словю
 */
interface ListWordsParams {
  idTopic: Id
}
type ListWordsResponse = WordsItem[]
export const listWords = createAsyncThunk<ListWordsResponse, ListWordsParams, { rejectValue: string }>(
  'userTopic/listWords',
  async ({ idTopic }, { rejectWithValue }) => {
    const response = await executeApiRTK<ListWordsResponse, void>({
      method: 'GET',
      url: API_ENDPOINTS.folders.cards.list(idTopic),
      rejectWithValue,
      errorMessage: 'Ошибка при получении списка файла',
    })
    return response.data
  },
)

// Получить данные карточки
export const getDetailsCard = createAsyncThunk<
  WordsItem,
  { idCard: Id } & Pick<MapIdTopicSlice, 'idTopic'>,
  { rejectValue: string }
>('userTopic/getDetailsCard', async ({ idCard, idTopic }, { rejectWithValue }) => {
  const response = await executeApiRTK<WordsItem, void>({
    method: 'GET',
    url: API_ENDPOINTS.folders.cards.getDetails(idTopic, idCard),
    rejectWithValue,
    errorMessage: 'Ошибка при получении данных карточки',
  })
  return response.data
})

/**
 * Добавить карточку в тему.
 */
export const CreateWord = createAsyncThunk<
  WordsItem,
  { cardData: Partial<WordsItem> } & Pick<MapIdTopicSlice, 'idTopic'>,
  { rejectValue: string }
>('userTopic/addCardToTopic', async ({ idTopic, cardData }, { rejectWithValue }) => {
  const response = await executeApiRTK<WordsItem, Partial<WordsItem>>({
    method: 'POST',
    url: API_ENDPOINTS.folders.cards.create(idTopic),
    body: cardData,
    rejectWithValue,
    errorMessage: 'Ошибка при добавлении карточки',
  })
  return response.data
})

/**
 * Обновление карточки.
 */
type updateCardInTopicParams = {
  cardData: WordsItem
} & Pick<MapIdTopicSlice, 'idTopic'>
type updateCardInTopicResponse = WordsItem
export const updateCardInTopic = createAsyncThunk<
  updateCardInTopicResponse,
  updateCardInTopicParams,
  { rejectValue: string }
>('userTopic/updateCardInTopic', async ({ idTopic, cardData }, { rejectWithValue }) => {
  const response = await executeApiRTK<WordsItem, WordsItem>({
    method: 'PUT',
    url: API_ENDPOINTS.folders.cards.update(idTopic, cardData.id),
    body: cardData,
    rejectWithValue,
    errorMessage: 'Ошибка при обновлении карточки',
  })
  return response.data
})

/**
 * Удалить карточку из темы.
 */
export const deleteCardFromTopic = createAsyncThunk<
  string,
  { idCard: string } & Pick<MapIdTopicSlice, 'idTopic'>,
  { rejectValue: string }
>('userTopic/deleteCardFromTopic', async ({ idTopic, idCard }, { rejectWithValue }) => {
  await executeApiRTK<unknown, void>({
    method: 'DELETE',
    url: API_ENDPOINTS.folders.cards.delete(idTopic, idCard),
    rejectWithValue,
    errorMessage: 'Ошибка при удалении карточки',
  })
  return idCard
})

/**
 * Перевод слова.
 */
interface translateWordParams {
  sourceLanguage: string
  sourceWord: string
  targetLanguage: string
}
interface translateWordResponse {
  translatedWords: {
    translatedWord: string
  }[]
}
export const translateWord = createAsyncThunk<translateWordResponse, translateWordParams, { rejectValue: string }>(
  'userTopic/translateWord',
  async ({ sourceLanguage, sourceWord, targetLanguage }, { rejectWithValue }) => {
    const response = await executeApiRTK<translateWordResponse, translateWordParams>({
      method: 'POST',
      url: API_ENDPOINTS.translator.translate,
      body: {
        sourceLanguage,
        sourceWord,
        targetLanguage,
      },
      rejectWithValue,
      errorMessage: 'Ошибка при переводе слова',
    })
    return response.data
  },
)

interface deleteIMGThunkParams {
  topicId: Id
  cardId: Id
}
export const deleteIMGThunk = createAsyncThunk<unknown, deleteIMGThunkParams, { rejectValue: string }>(
  'userTopic/deleteIMGThunk',
  async ({ topicId, cardId }, { rejectWithValue }) => {
    await executeApiRTK<unknown, void>({
      method: 'DELETE',
      url: API_ENDPOINTS.folders.cards.img.delete(topicId, cardId),
      rejectWithValue,
      errorMessage: 'Ошибка при удалении картинки',
    })
  },
)
