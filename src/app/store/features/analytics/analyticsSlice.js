import { createSlice } from '@reduxjs/toolkit'
import { handlePending, handleRejected } from '../../helpers/Handlers.js'
import { fetchQuestions } from './analyticsThunks.js'

const analyticsSlice = createSlice({
  name: 'analytics',
  initialState: {
    questions: [],
    loading: false,
    error: null,
  },
  reducers: {
    toggleQuestionAnswer: (state, action) => {
      const id = action.payload
      state.questions = state.questions.map((question) => (question.id === id ? { ...question, answer: !question.answer } : question))
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, handlePending)
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.questions = action.payload
      })
      .addCase(fetchQuestions.rejected, handleRejected)
  },
})

export const { toggleQuestionAnswer } = analyticsSlice.actions
export default analyticsSlice.reducer
