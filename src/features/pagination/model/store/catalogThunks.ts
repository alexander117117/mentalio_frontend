import { createAsyncThunk } from '@reduxjs/toolkit'
import { executeApiRTK } from '@/shared/api/apiHelpers.ts'
import {
  PaginatedResponse,
  PaginationNextPageParams,
  PaginationParams,
  AllCategoriesResponse,
} from '../../lib/types.ts'

interface AsyncThunkConfig {
  rejectValue: string
}

export const paginationThunk = createAsyncThunk<PaginatedResponse, PaginationParams, AsyncThunkConfig>(
  'catalog/PaginationThunk',
  async ({ query, page, category, userName = '', limit = 10 }: PaginationParams, { rejectWithValue }) => {
    const response = await executeApiRTK<PaginatedResponse, PaginationParams>({
      method: 'GET',
      url: '/catalog',
      body: { query, page, category, userName, limit },
      rejectWithValue,
      errorMessage: 'Ошибка при загрузке данных пагинации',
    })
    return response.data
  },
)
export const getCartsFolderMentalio = createAsyncThunk<PaginatedResponse, void, AsyncThunkConfig>(
  'catalog/getCartsFolderMentalio',
  async (_: void, { rejectWithValue }) => {
    const response = await executeApiRTK<PaginatedResponse, PaginationParams>({
      method: 'GET',
      url: '/catalog',
      body: {
        query: '',
        page: 1,
        category: '',
        userName: 'Mentalio',
        limit: 6,
      },
      rejectWithValue,
    })
    return response.data
  },
)

export const paginationNextPageThunk = createAsyncThunk<PaginatedResponse, PaginationNextPageParams, AsyncThunkConfig>(
  'catalog/paginationNextPageThunk',
  async ({ query, page, category, limit = 10 }: PaginationNextPageParams, { rejectWithValue }) => {
    const response = await executeApiRTK<PaginatedResponse, PaginationNextPageParams>({
      method: 'GET',
      url: '/catalog',
      body: { query, page, category, limit },
      rejectWithValue,
      errorMessage: 'Ошибка при загрузке данных следующей страницы',
    })
    return response.data
  },
)

export const getAllCategoriesThunk = createAsyncThunk<AllCategoriesResponse, void, AsyncThunkConfig>(
  'catalog/getAllCategoriesThunk',
  async (_: void, { rejectWithValue }) => {
    const response = await executeApiRTK<AllCategoriesResponse, void>({
      method: 'GET',
      url: '/catalog/categories',
      rejectWithValue,
      errorMessage: 'Ошибка при загрузке списка категорий',
    })
    return response.data
  },
)
