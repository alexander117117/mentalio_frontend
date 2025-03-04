import { createAsyncThunk } from '@reduxjs/toolkit'
import { executeApiRTK } from '@/shared/api/apiHelpers.ts'
import { API_ENDPOINTS } from '@/shared/api/constEndpoints.ts'
import { CategoriesItem, FolderItem } from '@/entities/folder/lib/types/folder.ts'

interface AsyncThunkConfig {
  rejectValue: string
}

export interface PaginationParams {
  query: string
  page: number
  category: string
  userName?: string
  limit?: number
}
export interface PaginatedResponse {
  countTotalCards?: number
  items: FolderItem[]
  status: string
}

export const paginationThunk = createAsyncThunk<PaginatedResponse, PaginationParams, AsyncThunkConfig>(
  'catalog/PaginationThunk',
  async ({ query, page, category, userName = '', limit = 10 }: PaginationParams, { rejectWithValue }) => {
    const response = await executeApiRTK<PaginatedResponse, PaginationParams>({
      method: 'GET',
      url: API_ENDPOINTS.folders.catalog,
      body: { query, page, category, userName, limit },
      rejectWithValue,
      errorMessage: 'Ошибка при загрузке данных пагинации',
    })
    return response.data
  },
)
export const getCardsFolderMentalio = createAsyncThunk<PaginatedResponse, void, AsyncThunkConfig>(
  'catalog/getCardsFolderMentalio',
  async (_: void, { rejectWithValue }) => {
    const response = await executeApiRTK<PaginatedResponse, PaginationParams>({
      method: 'GET',
      url: API_ENDPOINTS.folders.catalog,
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

export type PaginationNextPageParams = Omit<PaginationParams, 'userName'>
export const paginationNextPageThunk = createAsyncThunk<PaginatedResponse, PaginationNextPageParams, AsyncThunkConfig>(
  'catalog/paginationNextPageThunk',
  async ({ query, page, category, limit = 10 }: PaginationNextPageParams, { rejectWithValue }) => {
    const response = await executeApiRTK<PaginatedResponse, PaginationNextPageParams>({
      method: 'GET',
      url: API_ENDPOINTS.folders.catalog,
      body: { query, page, category, limit },
      rejectWithValue,
      errorMessage: 'Ошибка при загрузке данных следующей страницы',
    })
    return response.data
  },
)

export type AllCategoriesResponse = { status: string; allCategories: CategoriesItem[] }
export const getAllCategoriesThunk = createAsyncThunk<AllCategoriesResponse, void, AsyncThunkConfig>(
  'catalog/getAllCategoriesThunk',
  async (_: void, { rejectWithValue }) => {
    const response = await executeApiRTK<AllCategoriesResponse, void>({
      method: 'GET',
      url: API_ENDPOINTS.folders.categories.list,
      rejectWithValue,
      errorMessage: 'Ошибка при загрузке списка категорий',
    })
    return response.data
  },
)
