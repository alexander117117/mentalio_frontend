import { createAsyncThunk } from '@reduxjs/toolkit'
import { apiStoreTrunks } from '@/shared/api/apiHelpers.ts'
import { CardItem, PaginatedResponse, PaginationParams, PaginationNextPageParams, AllCategoriesResponse } from '../../lib/types.ts'



export const paginationThunk = createAsyncThunk<
  PaginatedResponse,    // Тип успешного результата
  PaginationParams, // Тип параметров экшена
  { rejectValue: string }
>(
  'catalog/PaginationThunk',
  async (
    { query, page, category, userName = '', limit = 10 }: PaginationParams,
    { rejectWithValue }
  ) => {
    const response = await apiStoreTrunks<PaginatedResponse, PaginationParams>({
      method: 'GET',
      url: '/catalog',
      body: { query, page, category, userName, limit },
      rejectWithValue,
      errorMessage: 'Ошибка при загрузке данных пагинации',
    });
    // Если необходимо – явно приводим к PaginatedResponse
    return response.data as PaginatedResponse;
  }
);


export const paginationNextPageThunk = createAsyncThunk<
  PaginatedResponse,
  PaginationNextPageParams,
  { rejectValue: string }
>('catalog/paginationNextPageThunk', async ({ query, page, category, limit = 10 }: PaginationNextPageParams, { rejectWithValue }) => {
  const response = await apiStoreTrunks<PaginatedResponse, PaginationNextPageParams>({
    method: 'GET',
    url: '/catalog',
    body: { query, page, category, limit },
    rejectWithValue,
    errorMessage: 'Ошибка при загрузке данных следующей страницы',
  })
  return response.data
})


export const getAllCategoriesThunk = createAsyncThunk<
  AllCategoriesResponse,
  void,
  { rejectValue: string }
>('catalog/getAllCategoriesThunk', async (_: void, { rejectWithValue }) => {
  const response = await apiStoreTrunks<AllCategoriesResponse, void>({
    method: 'GET',
    url: 'catalog/getAllCategory',
    rejectWithValue,
    errorMessage: 'Ошибка при загрузке списка категорий',
  })
  return response.data
})
