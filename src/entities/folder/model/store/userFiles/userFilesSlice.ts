import { createSlice } from '@reduxjs/toolkit'
import { handlePending, handleRejected } from '@/shared/lib/helpers/StoreHandlers.ts'
import { FolderItem } from '@/entities/folder/lib/types'
import {
  getUserFiles,
  createUserFile,
  deleteUserFile,
  updateUserFile,
  getFileTopics,
  addTopicToFile,
  deleteTopicFromFile,
  addPublicFile,
} from './userFilesThunks.ts'

interface UserFilesState {
  filesUser: FolderItem[]
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
  reducers: {
    clearError(state) {
      state.error = null
      state.loading = false
    },
  },
  extraReducers: (builder) => {
    builder
      // Получение пользовательских файлов
      .addCase(getUserFiles.pending, handlePending)
      .addCase(getUserFiles.fulfilled, (state, action) => {
        state.loading = false
        state.filesUser = action.payload
      })
      .addCase(getUserFiles.rejected, handleRejected)

      // Создание нового файла
      .addCase(createUserFile.pending, handlePending)
      .addCase(createUserFile.fulfilled, (state, action) => {
        state.loading = false
        state.filesUser = [...state.filesUser, action.payload]
      })
      .addCase(createUserFile.rejected, handleRejected)

      // Удаление файла
      .addCase(deleteUserFile.pending, handlePending)
      .addCase(deleteUserFile.fulfilled, (state, action) => {
        state.loading = false
        if (state.filesUser) {
          state.filesUser = state.filesUser.filter((file) => file.id !== action.meta.arg)
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
          const file = state.filesUser.find((item) => item.id === action.payload.idFolder)
          if (file) {
            file.topics = [...file.topics, action.payload.topic]
          }
        }
      })
      .addCase(addTopicToFile.rejected, handleRejected)

      // Удаление темы из файла
      .addCase(deleteTopicFromFile.pending, handlePending)
      .addCase(deleteTopicFromFile.fulfilled, (state, action) => {
        state.loading = false
        if (state.filesUser) {
          const file = state.filesUser.find((item) => item.id === action.meta.arg.idFolder)
          if (file && file.topics) {
            file.topics = file.topics.filter((topic) => topic.id !== action.payload.idTopic)
          }
        }
      })
      .addCase(deleteTopicFromFile.rejected, handleRejected)

      // Добавить публичную папку к пользователю
      .addCase(addPublicFile.pending, handlePending)
      .addCase(addPublicFile.fulfilled, (state, action) => {
        state.loading = false
        if (state.filesUser) {
          state.filesUser = [...state.filesUser, action.payload]
        }
      })
      .addCase(addPublicFile.rejected, handleRejected)
  },
})
export const { clearError } = userFilesSlice.actions
export default userFilesSlice.reducer
