import { createSlice } from '@reduxjs/toolkit'
import { handlePending, handleRejected } from '@/shared/lib/helpers/StoreHandlers.ts'
import { CartFolderItem } from '@/entities/folder/lib/types'
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
} from './userFilesThunks.ts'

interface UserFilesState {
  filesUser: CartFolderItem[]
  loading: boolean
  error: string | null
}

const initialState: UserFilesState = {
  filesUser: [],
  loading: false,
  error: null,
}

export const userFilesSlice = createSlice({
  name: 'userFiles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Получение пользовательских файлов
      .addCase(getUserFiles.pending, handlePending)
      .addCase(getUserFiles.fulfilled, (state, action) => {
        state.loading = false
        console.log("action.payload getUserFiles", action.payload);
        
        state.filesUser = action.payload
      })
      .addCase(getUserFiles.rejected, handleRejected)

      // Создание нового файла
      .addCase(createUserFile.pending, handlePending)
      .addCase(createUserFile.fulfilled, (state, action) => {
        state.loading = false
        if (state.filesUser) {
          state.filesUser.push(action.payload)
        } else {
          state.filesUser = [action.payload]
        }
      })
      .addCase(createUserFile.rejected, handleRejected)

      // Удаление файла
      .addCase(deleteUserFile.pending, handlePending)
      .addCase(deleteUserFile.fulfilled, (state, action) => {
        state.loading = false
        if (state.filesUser) {
          state.filesUser = state.filesUser.filter((item) => item.id !== action.payload)
        }
      })
      .addCase(deleteUserFile.rejected, handleRejected)

      // Обновление файла
      .addCase(updateUserFile.pending, handlePending)
      .addCase(updateUserFile.fulfilled, (state, action) => {
        state.loading = false
        if (state.filesUser) {
          const index = state.filesUser.findIndex((item) => item.id === action.payload.id)
          if (index !== -1) {
            state.filesUser[index] = action.payload
          }
        }
      })
      .addCase(updateUserFile.rejected, handleRejected)

      // Получение тем файла
      .addCase(getFileTopics.pending, handlePending)
      .addCase(getFileTopics.fulfilled, (state, action) => {
        state.loading = false
        if (state.filesUser) {
          const file = state.filesUser.find((item) => item.id === action.meta.arg)
          if (file) {
            file.topics = action.payload
          }
        }
      })
      .addCase(getFileTopics.rejected, handleRejected)

      // Добавление темы в файл
      .addCase(addTopicToFile.pending, handlePending)
      .addCase(addTopicToFile.fulfilled, (state, action) => {
        state.loading = false
        if (state.filesUser) {
          const file = state.filesUser.find((item) => item.id === action.meta.arg.fileId)
          if (file) {
            file.topics = [...(file.topics || []), action.payload]
          }
        }
      })
      .addCase(addTopicToFile.rejected, handleRejected)

      // Удаление темы из файла
      .addCase(deleteTopicFromFile.pending, handlePending)
      .addCase(deleteTopicFromFile.fulfilled, (state, action) => {
        state.loading = false
        if (state.filesUser) {
          const file = state.filesUser.find((item) => item.id === action.meta.arg.fileId)
          if (file && file.topics) {
            file.topics = file.topics.filter((topic) => topic.id !== action.payload)
          }
        }
      })
      .addCase(deleteTopicFromFile.rejected, handleRejected)

      // Получение карточек темы
      .addCase(getTopicCards.pending, handlePending)
      .addCase(getTopicCards.fulfilled, (state, action) => {
        state.loading = false
        if (state.filesUser) {
          const file = state.filesUser.find((item) => item.id === action.meta.arg.fileId)
          const topic = file?.topics?.find((t) => t.id === action.meta.arg.topicId)
          if (topic) {
            topic.cards = action.payload
          }
        }
      })
      .addCase(getTopicCards.rejected, handleRejected)

      // Добавление карточки в тему
      .addCase(addCardToTopic.pending, handlePending)
      .addCase(addCardToTopic.fulfilled, (state, action) => {
        state.loading = false
        if (state.filesUser) {
          const file = state.filesUser.find((item) => item.id === action.meta.arg.fileId)
          const topic = file?.topics?.find((t) => t.id === action.meta.arg.topicId)
          if (topic) {
            topic.cards = [...(topic.cards || []), action.payload]
          }
        }
      })
      .addCase(addCardToTopic.rejected, handleRejected)

      // Удаление карточки из темы
      .addCase(deleteCardFromTopic.pending, handlePending)
      .addCase(deleteCardFromTopic.fulfilled, (state, action) => {
        state.loading = false
        if (state.filesUser) {
          const file = state.filesUser.find((item) => item.id === action.meta.arg.fileId)
          const topic = file?.topics?.find((t) => t.id === action.meta.arg.topicId)
          if (topic && topic.cards) {
            topic.cards = topic.cards.filter((card) => card.id !== action.payload)
          }
        }
      })
      .addCase(deleteCardFromTopic.rejected, handleRejected)
  },
})

export default userFilesSlice.reducer
