import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Id } from '@/shared/types'
import { RootState } from '@/app/store/configureStore'
import { handlePending, handleRejected } from '@/shared/lib/helpers'
import { saveResultTestThunks } from './thunks'

export interface TestAnswer {
  questionId: Id
  questionText: string
  correctAnswer: string
  userAnswer: string
  isCorrect: boolean
}

interface TestAnalyticsState {
  answers: TestAnswer[]
  isResultPosted: boolean
  totalQuestions: number
  correctCount: number
  percent: number
  loading: boolean
  error: string | null
}

const initialState: TestAnalyticsState = {
  answers: [],
  isResultPosted: false,
  totalQuestions: 0,
  correctCount: 0,
  percent: 0,
  loading: false,
  error: null,
}

export const testAnalyticsSlice = createSlice({
  name: 'testAnalytics',
  initialState,
  reducers: {
    /**
     * Инициализация аналитики:
     * запоминаем общее число вопросов (для расчёта процента)
     */
    initTestAnalytics(state, action: PayloadAction<{ questionsCount: number }>) {
      state.totalQuestions = action.payload.questionsCount
      // сбрасываем остальное
      state.answers = []
      state.correctCount = 0
      state.percent = 0
    },

    /**
     * Сохраняем ответ на конкретный вопрос
     */
    storeAnswer(
      state,
      action: PayloadAction<{
        questionId: Id
        questionText: string
        correctAnswer: string
        userAnswer: string
        isCorrect: boolean
      }>,
    ) {
      const existingIndex = state.answers.findIndex((ans) => ans.questionId === action.payload.questionId)

      if (existingIndex >= 0) {
        // если ответ для данного вопроса уже существует, обновим его
        state.answers[existingIndex] = {
          ...state.answers[existingIndex],
          userAnswer: action.payload.userAnswer,
          isCorrect: action.payload.isCorrect,
        }
      } else {
        // иначе добавляем новый ответ
        state.answers.push({
          questionId: action.payload.questionId,
          questionText: action.payload.questionText,
          correctAnswer: action.payload.correctAnswer,
          userAnswer: action.payload.userAnswer,
          isCorrect: action.payload.isCorrect,
        })
      }
    },

    /**
     * Когда пользователь заканчивает тест,
     * считаем сколько правильных ответов, процент и т.д.
     */
    computeTestResults(state) {
      const correctCount = state.answers.filter((ans) => ans.isCorrect).length
      state.correctCount = correctCount

      if (state.totalQuestions > 0) {
        state.percent = Math.round((correctCount / state.totalQuestions) * 100)
      } else {
        state.percent = 0
      }
    },

    /**
     * Полный сброс аналитики
     */
    resetTestAnalytics(state) {
      state.answers = []
      state.totalQuestions = 0
      state.correctCount = 0
      state.percent = 0
    },

    /**
     * Добавление длинный в answers
     */
    addLengthAnswer(state, action: PayloadAction<number>) {
      state.answers.length = action.payload
    },

    /**
     * Повтор аналитики
     */
    repeatAnalyticsInteractive(state) {
      state.answers = []
      state.correctCount = 0
      state.percent = 0
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveResultTestThunks.pending, handlePending)
      .addCase(saveResultTestThunks.fulfilled, (state) => {
        state.loading = false
        state.isResultPosted = true
      })
      .addCase(saveResultTestThunks.rejected, handleRejected)
  },
})

export const {
  initTestAnalytics,
  storeAnswer,
  computeTestResults,
  resetTestAnalytics,
  addLengthAnswer,
  repeatAnalyticsInteractive,
} = testAnalyticsSlice.actions

export const selectTestAnalytics = (state: RootState) => state.testAnalyticsSlice

export const testAnalyticsReducer = testAnalyticsSlice.reducer
