import { createSlice } from '@reduxjs/toolkit'
import { handlePending, handleRejected } from '@/shared/helpers/StoreHandlers'

import {
  PublicFile,
  PublicTopic,
  PublicCard,
  getPublicFiles,
  getPublicFileDetails,
  addPublicFileToUserFiles,
  getPublicFileTopics,
  getPublicTopicDetails,
  getPublicTopicCards,
  getPublicCardDetails,
  updatePublicCard,
} from './publicFilesThunks'

interface PublicFilesState {
  publicFiles: PublicFile[] | null
  publicFileDetails?: PublicFile | null
  publicFileTopics: PublicTopic[] | null
  publicTopicDetails?: PublicTopic | null
  userFiles: PublicFile[]
  loading: boolean
  error: string | null
}

const initialState: PublicFilesState = {
  publicFiles: null,
  publicFileDetails: null,
  publicFileTopics: null,
  publicTopicDetails: null,
  userFiles: [],
  loading: false,
  error: null,
}

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
        const topicId = action.meta.arg.topicId
        const publicTopic = state.publicFileTopics?.find((topic) => topic.id === topicId)
        if (publicTopic) {
          publicTopic.cards = action.payload
        }
      })
      .addCase(getPublicTopicCards.rejected, handleRejected)

      // Получение деталей карточки публичного файла
      .addCase(getPublicCardDetails.pending, handlePending)
      .addCase(getPublicCardDetails.fulfilled, (state, action) => {
        state.loading = false
        const topicId = action.meta.arg.topicId
        const publicTopic = state.publicFileTopics?.find((topic) => topic.id === topicId)
        if (publicTopic && publicTopic.cards) {
          const cardId = action.meta.arg.cardId
          const card = publicTopic.cards.find((c) => c.id === cardId)
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
        const topicId = action.meta.arg.topicId
        const publicTopic = state.publicFileTopics?.find((topic) => topic.id === topicId)
        if (publicTopic && publicTopic.cards) {
          const cardId = action.meta.arg.cardId
          const cardIndex = publicTopic.cards.findIndex((c) => c.id === cardId)
          if (cardIndex !== -1) {
            publicTopic.cards[cardIndex] = action.payload
          }
        }
      })
      .addCase(updatePublicCard.rejected, handleRejected)
  },
})

// Экспортируем редьюсер
export default publicFilesSlice.reducer
