import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { handlePending, handleRejected } from '@/shared/helpers/StoreHandlers'
import { fetchQuestions, Question } from './analyticsThunks'

interface AnalyticsState {
  questions: Question[]
  loading: boolean
  error: string | null
}

const initialState: AnalyticsState = {
  questions: [],
  loading: false,
  error: null,
}

const analyticsSlice = createSlice({
  name: 'analytics',
  initialState,
  reducers: {
    /**
     * Переключает значение answer у вопроса по его id.
     * @param state - Текущее состояние
     * @param action - Экшен с payload: id вопроса
     */
    toggleQuestionAnswer(state, action: PayloadAction<number>) {
      const id = action.payload
      state.questions = state.questions.map((question) =>
        question.id === id ? { ...question, answer: !question.answer } : question,
      )
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, handlePending)
      .addCase(fetchQuestions.fulfilled, (state, action: PayloadAction<Question[]>) => {
        state.loading = false
        state.error = null
        state.questions = action.payload
      })
      .addCase(fetchQuestions.rejected, handleRejected)
  },
})

export const { toggleQuestionAnswer } = analyticsSlice.actions
export default analyticsSlice.reducer
