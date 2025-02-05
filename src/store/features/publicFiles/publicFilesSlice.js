import { createSlice } from '@reduxjs/toolkit'
import { handlePending, handleRejected } from '../../helpers/Handlers.js'

import {
  getPublicFiles,
  getPublicFileDetails,
  addPublicFileToUserFiles,
  getPublicFileTopics,
  getPublicTopicDetails,
  getPublicTopicCards,
  getPublicCardDetails,
  updatePublicCard,
} from './publicFilesThunks.js'

// Начальное состояние
const initialState = {
  publicFiles: null, // Публичные файлы
  publicFileTopics: null, // Темы публичных файлов
  loading: false, // Индикатор загрузки
  error: null, // Сообщение об ошибке
}

// Slice для файлов
const publicFilesSlice = createSlice({
  name: 'publicFiles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Получение списка публичных файлов
      .addCase(getPublicFiles.pending, handlePending)
      .addCase(getPublicFiles.fulfilled, (state, action) => {
        state.loading = false
        state.publicFiles = action.payload
      })
      .addCase(getPublicFiles.rejected, handleRejected)

      // Получение деталей публичного файла
      .addCase(getPublicFileDetails.pending, handlePending)
      .addCase(getPublicFileDetails.fulfilled, (state, action) => {
        state.loading = false
        state.publicFileDetails = action.payload
      })
      .addCase(getPublicFileDetails.rejected, handleRejected)

      // Добавление публичного файла в пользовательские файлы
      .addCase(addPublicFileToUserFiles.pending, handlePending)
      .addCase(addPublicFileToUserFiles.fulfilled, (state, action) => {
        state.loading = false
        state.userFiles.push(action.payload)
      })
      .addCase(addPublicFileToUserFiles.rejected, handleRejected)

      // Получение тем публичного файла
      .addCase(getPublicFileTopics.pending, handlePending)
      .addCase(getPublicFileTopics.fulfilled, (state, action) => {
        state.loading = false
        state.publicFileTopics = action.payload
      })
      .addCase(getPublicFileTopics.rejected, handleRejected)

      // Получение деталей темы публичного файла
      .addCase(getPublicTopicDetails.pending, handlePending)
      .addCase(getPublicTopicDetails.fulfilled, (state, action) => {
        state.loading = false
        state.publicTopicDetails = action.payload
      })
      .addCase(getPublicTopicDetails.rejected, handleRejected)

      // Получение карточек темы публичного файла
      .addCase(getPublicTopicCards.pending, handlePending)
      .addCase(getPublicTopicCards.fulfilled, (state, action) => {
        state.loading = false
        const publicTopic = state.publicFileTopics?.find((topic) => topic.id === action.meta.arg.topicId)
        if (publicTopic) {
          publicTopic.cards = action.payload
        }
      })
      .addCase(getPublicTopicCards.rejected, handleRejected)

      // Получение деталей карточки публичного файла
      .addCase(getPublicCardDetails.pending, handlePending)
      .addCase(getPublicCardDetails.fulfilled, (state, action) => {
        state.loading = false
        const publicTopic = state.publicFileTopics?.find((topic) => topic.id === action.meta.arg.topicId)
        if (publicTopic && publicTopic.cards) {
          const card = publicTopic.cards.find((card) => card.id === action.meta.arg.cardId)
          if (card) {
            Object.assign(card, action.payload)
          }
        }
      })
      .addCase(getPublicCardDetails.rejected, handleRejected)

      // Обновление карточки публичного файла
      .addCase(updatePublicCard.pending, handlePending)
      .addCase(updatePublicCard.fulfilled, (state, action) => {
        state.loading = false
        const publicTopic = state.publicFileTopics?.find((topic) => topic.id === action.meta.arg.topicId)
        if (publicTopic && publicTopic.cards) {
          const cardIndex = publicTopic.cards.findIndex((card) => card.id === action.meta.arg.cardId)
          if (cardIndex !== -1) {
            publicTopic.cards[cardIndex] = action.payload
          }
        }
      })
      .addCase(updatePublicCard.rejected, handleRejected)
  },
})

// Экспорт действий и редьюсера
export default publicFilesSlice.reducer
