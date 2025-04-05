import { Id } from '@/shared/types'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  QuestionsMultipleChoice,
  QuestionsTest,
  SettingInteractiveMemorization,
  SettingInteractiveTest,
} from '../types/types'
import { API_ENDPOINTS } from '@/shared/api/constEndpoints'
import { executeApiRTK } from '@/shared/api'
import { overkillModes } from '../halper/overkillModes'

type getDataMemorizationParams = QuestionsMultipleChoice[]
interface getDataMemorizationResponse {
  idTopic: Id
  setting: SettingInteractiveMemorization
}
export const getDataMemorizationThunks = createAsyncThunk<
  getDataMemorizationParams,
  getDataMemorizationResponse,
  { rejectValue: string }
>('userFiles/getDataMemorization', async ({ idTopic, setting }, { rejectWithValue }) => {
  const response = await executeApiRTK<
    {
      count: number
      results: QuestionsMultipleChoice[]
    },
    {
      num_questions: number
      study_favorites: boolean
    }
  >({
    method: 'GET',
    url: API_ENDPOINTS.interactive.getDataMemorization(idTopic),
    body: {
      num_questions: setting.num_questions,
      study_favorites: setting.isFavoritesOnly,
    },
    rejectWithValue,
    errorMessage: 'Ошибка при получении данных файла',
  })
  return response.data.results
})

type getDataTestParams = QuestionsTest[]
interface getDataTestResponse {
  idTopic: Id
  setting: SettingInteractiveTest
}
export const getDataTestThunks = createAsyncThunk<getDataTestParams, getDataTestResponse, { rejectValue: string }>(
  'userFiles/getDataTestThunks',
  async ({ idTopic, setting }, { rejectWithValue }) => {
    const response = await executeApiRTK<
      {
        count: number
        results: QuestionsTest[]
      },
      {
        num_questions: number
        modes: 'true_false'[] & 'multiple_choice'[] & 'written'[]
      }
    >({
      method: 'GET',
      url: API_ENDPOINTS.interactive.getDataTest(idTopic),
      body: {
        num_questions: setting.num_questions,
        modes: overkillModes(setting),
      },
      rejectWithValue,
      errorMessage: 'Ошибка при получении данных файла',
    })
    return response.data.results
  },
)
