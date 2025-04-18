import { executeApiRTK } from '@/shared/api'
import { API_ENDPOINTS } from '@/shared/api/constEndpoints'
import { Id } from '@/shared/types'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { TestAnswer } from './testAnalyticsSlice'

interface createAsyncThunkParams { idTopic: Id; answers: TestAnswer[] }
interface executeApiRTKcreateAsyncThunkParams {
  question_id: Id
  question_text: string
  correct_answer: string
  user_answer: string
}
export const saveResultTestThunks = createAsyncThunk<
  void,
  createAsyncThunkParams,
  { rejectValue: string }
>('testAnalytics/saveResultTestThunks', async ({ idTopic, answers }, api) => {
  const body = answers.map((a) => ({
    question_id: a.questionId,
    question_text: a.questionText,
    correct_answer: a.correctAnswer,
    user_answer: a.userAnswer,
  }));

  await executeApiRTK<executeApiRTKcreateAsyncThunkParams>({
    method: 'POST',
    url: API_ENDPOINTS.interactive.saveResultTest(idTopic),
    body,
    rejectWithValue: api.rejectWithValue,
    errorMessage: 'Ошибка при сохранении результата теста',
  });
});
