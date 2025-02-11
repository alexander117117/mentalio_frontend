import { createAsyncThunk } from '@reduxjs/toolkit'
import { apiStoreTrunks } from '@/shared/api/apiHelpers.ts'

/**
 * Интерфейс карточки (адаптируйте под реальную структуру).
 */
interface CardItem {
  id: number
  userName: string
  title: string
  desc: string
}

/**
 * Интерфейс ответа при пагинации.
 */
interface PaginatedResponse {
  items: CardItem[]
  countTotalCarts?: number
}

/**
 * Интерфейс параметров для пагинации (paginationThunk).
 * userName делаем необязательным, limit также необязательный.
 */
interface PaginationParams {
  query: string
  page: number
  category: string
  userName?: string
  limit?: number
}

/**
 * Интерфейс параметров для пагинации (paginationNextPageThunk).
 * Здесь нет userName, значит он не используется
 * (или добавьте, если нужно).
 */
interface PaginationNextPageParams {
  query: string
  page: number
  category: string
  limit?: number
}

/**
 * Интерфейс ответа для списка категорий.
 */
interface AllCategoriesResponse {
  allCategories: string[]
}

/**
 * Асинхронный экшен для загрузки карточек для текущей страницы.
 */
export const paginationThunk: any = createAsyncThunk<
  PaginatedResponse, // возвращаемый тип (успешный результат)
  PaginationParams, // аргумент (параметры пагинации)
  { rejectValue: string } // rejectWithValue тип
>('catalog/PaginationThunk', async ({ query, page, category, userName = '', limit = 10 }, { rejectWithValue }) => {
  const response = await apiStoreTrunks({
    method: 'GET',
    url: '/catalog',
    body: {
      query,
      page,
      category,
      userName,
      limit,
    },
    rejectWithValue,
    errorMessage: 'Ошибка при загрузке данных пагинации',
  })
  return response.data
})

/**
 * Асинхронный экшен для загрузки карточек для следующей страницы.
 */
export const paginationNextPageThunk: any = createAsyncThunk<
  PaginatedResponse, // возвращаемый тип
  PaginationNextPageParams, // аргумент
  { rejectValue: string }
>('catalog/paginationNextPageThunk', async ({ query, page, category, limit = 10 }, { rejectWithValue }) => {
  const response = await apiStoreTrunks({
    method: 'GET',
    url: '/catalog',
    body: { query, page, category, limit },
    rejectWithValue,
    errorMessage: 'Ошибка при загрузке данных следующей страницы',
  })
  return response.data
})

/**
 * Асинхронный экшен для загрузки списка всех категорий.
 */
export const getAllCategoriesThunk: any = createAsyncThunk<
  AllCategoriesResponse, // возвращаемый тип
  void, // аргументы не передаем
  { rejectValue: string }
>('catalog/getAllCategoriesThunk', async (_, { rejectWithValue }) => {
  const response = await apiStoreTrunks({
    method: 'GET',
    url: 'catalog/getAllCategory',
    rejectWithValue,
    errorMessage: 'Ошибка при загрузке списка категорий',
  })
  return response.data
})
