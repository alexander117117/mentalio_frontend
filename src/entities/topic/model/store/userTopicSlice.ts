import { createSlice } from '@reduxjs/toolkit'
import { handlePending, handleRejected } from '@/shared/lib/helpers/StoreHandlers.ts'
import { apiTranslatedWords, TopicsItem, WordsItem } from '@/entities/folder/lib/types'
import {
  getTopic,
  listWords,
  CreateWord,
  updateCardInTopic,
  deleteCardFromTopic,
  translateWord,
  updateTopic,
} from './userTopicThunks.ts'
import { Leng, MapIdTopicSlice } from '@/entities/topic/lib/types'
import { Id } from '@/shared/types/types.ts'

interface userTopicState {
  mapId: MapIdTopicSlice
  dataTopic: TopicsItem
  createdWord: Omit<WordsItem, 'id'> & {
    id?: Id | null
  }
  apiTranslatedWords: apiTranslatedWords
  loading: boolean
  error: string | null
  sourceLanguage: Leng
  targetLanguage: Leng
}

const initialState: userTopicState = {
  mapId: {
    idFolder: '',
    idTopic: '',
  },
  dataTopic: {
    id: '',
    topicName: '',
    description: '',
    dateCreated: '',
    percentStudy: 0,
    cards: [],
  },
  createdWord: {
    id: null,
    sourceWord: '',
    translated_words: [],
    translatedImg: '',
    chosen: false,
    isEdit: null,
  },
  apiTranslatedWords: [],
  sourceLanguage: 'ru',
  targetLanguage: 'en',
  loading: false,
  error: null,
}

export const userTopicSlice = createSlice({
  name: 'userTopic',
  initialState,
  reducers: {
    clearError(state) {
      state.error = null
      state.loading = false
    },
    clearApiTranslatedWords(state) {
      state.apiTranslatedWords = []
    },
    clearCreatedWord(state) {
      state.createdWord = {
        id: null,
        sourceWord: '',
        translated_words: [],
        translatedImg: '',
        chosen: false,
        isEdit: null,
      }
      state.apiTranslatedWords = []
      state.sourceLanguage = 'ru'
      state.targetLanguage = 'en'
    },
    setSourceWord(state, action) {
      state.createdWord.sourceWord = action.payload
    },
    setTranslatedWord(state, action) {
      state.createdWord.translated_words.push(action.payload)
    },
    setSourceLanguage(state, action) {
      state.sourceLanguage = action.payload
    },
    setTargetLanguage(state, action) {
      state.targetLanguage = action.payload
    },
    setTopicData(state, action) {
      state.dataTopic = action.payload.dataTopic
      state.mapId.idTopic = action.payload.dataTopic.id
      state.mapId.idFolder = action.payload?.idFolder
    },
    onEditCard(state, action) {
      state.createdWord = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      // Получение данных Topic
      .addCase(getTopic.pending, handlePending)
      .addCase(getTopic.fulfilled, (state, action) => {
        state.loading = false
        state.mapId = {
          idFolder: action.payload.idFolder,
          idTopic: action.payload.dataTopic.id,
        }
        state.dataTopic = action.payload.dataTopic
      })
      .addCase(getTopic.rejected, handleRejected)

      // Обновить Topic
      .addCase(updateTopic.pending, handlePending)
      .addCase(updateTopic.fulfilled, (state, action) => {
        state.loading = false
        state.dataTopic = action.payload
      })
      .addCase(updateTopic.rejected, handleRejected)

      // Получение списка слов
      .addCase(listWords.pending, handlePending)
      .addCase(listWords.fulfilled, (state, action) => {
        state.loading = false
        state.dataTopic.cards = action.payload
      })
      .addCase(listWords.rejected, handleRejected)

      // Создание карточки
      .addCase(CreateWord.pending, handlePending)
      .addCase(CreateWord.fulfilled, (state, action) => {
        state.loading = false
        state.dataTopic.cards = [...state.dataTopic.cards, action.payload]
      })
      .addCase(CreateWord.rejected, handleRejected)

      // Обновление карточки
      .addCase(updateCardInTopic.pending, handlePending)
      .addCase(updateCardInTopic.fulfilled, (state, action) => {
        state.loading = false
        state.dataTopic.cards = state.dataTopic.cards.map((card) =>
          card.id === action.payload.id ? action.payload : card,
        )
      })
      .addCase(updateCardInTopic.rejected, handleRejected)

      // Удаление карточки
      .addCase(deleteCardFromTopic.pending, handlePending)
      .addCase(deleteCardFromTopic.fulfilled, (state, action) => {
        state.loading = false
        state.dataTopic.cards = state.dataTopic.cards.filter((card) => card.id !== action.payload)
      })
      .addCase(deleteCardFromTopic.rejected, handleRejected)

      // Перевод слова
      .addCase(translateWord.pending, handlePending)
      .addCase(translateWord.fulfilled, (state, action) => {
        state.loading = false
        state.apiTranslatedWords = action.payload.translatedWords
      })
      .addCase(translateWord.rejected, handleRejected)
  },
})
export const {
  clearError,
  setSourceWord,
  setTranslatedWord,
  setTopicData,
  setSourceLanguage,
  setTargetLanguage,
  clearApiTranslatedWords,
  onEditCard,
  clearCreatedWord,
} = userTopicSlice.actions
export default userTopicSlice.reducer
