/**
 * Слайз для управления пользовательскими файлами.
 */
import { createSlice } from '@reduxjs/toolkit'
import { handlePending, handleRejected } from '../../helpers/Handlers.js'
import {
  getUserFiles,
  createUserFile,
  deleteUserFile,
  updateUserFile,
  getFileTopics,
  addTopicToFile,
  deleteTopicFromFile,
  getTopicCards,
  addCardToTopic,
  deleteCardFromTopic,
} from './userFilesThunks.js'

const initialState = {
  files: null, // Пользовательские файлы
  loading: false, // Индикатор загрузки
  error: null, // Сообщение об ошибке
}

const userFilesSlice = createSlice({
  name: 'userFiles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Обработка получения пользовательских файлов
      .addCase(getUserFiles.pending, handlePending)
      .addCase(getUserFiles.fulfilled, (state, action) => {
        state.loading = false
        state.files = action.payload
      })
      .addCase(getUserFiles.rejected, handleRejected)

      // Обработка создания нового файла
      .addCase(createUserFile.pending, handlePending)
      .addCase(createUserFile.fulfilled, (state, action) => {
        state.loading = false
        state.files.push(action.payload)
      })
      .addCase(createUserFile.rejected, handleRejected)

      // Обработка удаления файла
      .addCase(deleteUserFile.pending, handlePending)
      .addCase(deleteUserFile.fulfilled, (state, action) => {
        state.loading = false
        state.files = state.files.filter((item) => item.id !== action.payload)
      })
      .addCase(deleteUserFile.rejected, handleRejected)

      // Обновление файла
      .addCase(updateUserFile.pending, handlePending)
      .addCase(updateUserFile.fulfilled, (state, action) => {
        state.loading = false
        // Найти индекс обновляемого файла в массиве файлов
        const index = state.files.findIndex((item) => item.id === action.payload.id)
        if (index !== -1) {
          state.files[index] = action.payload // Обновить файл в массиве
        }
      })
      .addCase(updateUserFile.rejected, handleRejected)

      // Получение тем файла
      .addCase(getFileTopics.pending, handlePending)
      .addCase(getFileTopics.fulfilled, (state, action) => {
        state.loading = false
        // Найти файл, для которого были получены темы
        const file = state.files.find((item) => item.id === action.meta.arg)
        if (file) {
          file.topics = action.payload // Обновить темы для файла
        }
      })
      .addCase(getFileTopics.rejected, handleRejected)

      // Добавление темы в файл
      .addCase(addTopicToFile.pending, handlePending)
      .addCase(addTopicToFile.fulfilled, (state, action) => {
        state.loading = false
        const file = state.files.find((item) => item.id === action.meta.arg.fileId)
        if (file) {
          // Добавить новую тему в список тем файла
          file.topics = [...(file.topics || []), action.payload]
        }
      })
      .addCase(addTopicToFile.rejected, handleRejected)

      // Удаление темы из файла
      .addCase(deleteTopicFromFile.pending, handlePending)
      .addCase(deleteTopicFromFile.fulfilled, (state, action) => {
        state.loading = false
        const file = state.files.find((item) => item.id === action.meta.arg.fileId)
        if (file && file.topics) {
          // Удалить тему по её id
          file.topics = file.topics.filter((topic) => topic.id !== action.payload)
        }
      })
      .addCase(deleteTopicFromFile.rejected, handleRejected)

      // Получение карточек темы
      .addCase(getTopicCards.pending, handlePending)
      .addCase(getTopicCards.fulfilled, (state, action) => {
        state.loading = false
        const file = state.files.find((item) => item.id === action.meta.arg.fileId)
        const topic = file?.topics?.find((t) => t.id === action.meta.arg.topicId)
        if (topic) {
          // Обновить список карточек в теме
          topic.cards = action.payload
        }
      })
      .addCase(getTopicCards.rejected, handleRejected)

      // Добавление карточки в тему
      .addCase(addCardToTopic.pending, handlePending)
      .addCase(addCardToTopic.fulfilled, (state, action) => {
        state.loading = false
        const file = state.files.find((item) => item.id === action.meta.arg.fileId)
        const topic = file?.topics?.find((t) => t.id === action.meta.arg.topicId)
        if (topic) {
          // Добавить новую карточку в список карточек темы
          topic.cards = [...(topic.cards || []), action.payload]
        }
      })
      .addCase(addCardToTopic.rejected, handleRejected)

      // Удаление карточки из темы
      .addCase(deleteCardFromTopic.pending, handlePending)
      .addCase(deleteCardFromTopic.fulfilled, (state, action) => {
        state.loading = false
        const file = state.files.find((item) => item.id === action.meta.arg.fileId)
        const topic = file?.topics?.find((t) => t.id === action.meta.arg.topicId)
        if (topic && topic.cards) {
          // Удалить карточку по её id
          topic.cards = topic.cards.filter((card) => card.id !== action.payload)
        }
      })
      .addCase(deleteCardFromTopic.rejected, handleRejected)
  },
})

// Экспорт действий и редьюсера
export default userFilesSlice.reducer
