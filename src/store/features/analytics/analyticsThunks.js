import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../../../axiosConfig.ts'

export const fetchQuestions = createAsyncThunk('analytics/fetchQuestions', async (initial, { rejectWithValue }) => {
  try {
    const response = await axios.get('/auth/register/analytics/questions')
    if (response.status === 200) {
      return response.data.questions || initial
    } else {
      rejectWithValue(`Ошибка: ${response.status}`)
      return initial
    }
  } catch (error) {
    rejectWithValue(error.message)
    return initial
  }
})
