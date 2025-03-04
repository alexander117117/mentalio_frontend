import { createAsyncThunk } from '@reduxjs/toolkit'
import { executeApiRTK } from '@/shared/api/apiHelpers'
import { Question } from '../../lib/types'
import { API_ENDPOINTS } from '@/shared/api/constEndpoints'

/**
 * Thunk для получения списка вопросов.
 * - Первый тип (Question[]) — данные, которые возвращаем при успехе (fulfill).
 * - Второй тип (Question[]) — тип аргумента, который передаем при вызове (initial).
 *   (Можно заменить на другое, если не планируете передавать массив "initial".)
 * - Третий тип ({ rejectValue: string }) — чтобы типизировать значение при rejectWithValue.
 */
export const fetchQuestions: any = createAsyncThunk<
  Question[], // Возвращаемый тип
  Question[], // Аргумент (initial)
  { rejectValue: string }
>('analytics/fetchQuestions', async (initial, { rejectWithValue }) => {
  try {
    const response = await executeApiRTK({
      method: 'GET',
      url: API_ENDPOINTS.analytics.questions,
      rejectWithValue,
    })

    if (response.status === 200) {
      return response?.data.questions || initial
    } else {
      return initial
      // return rejectWithValue(`Ошибка: ${response.status}`) as never
    }
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error)
    return initial
    // return rejectWithValue(error.message || 'Неизвестная ошибка') as never
  }
})
