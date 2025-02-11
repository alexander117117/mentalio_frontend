import { createAsyncThunk } from '@reduxjs/toolkit'

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
  // Пример "mock" данных. При использовании реального API — раскомментируйте запрос.
  const res = {
    data: {
      items: [
        { id: 1, userName: 'Ivan', title: 'Папка', desc: 'dddds' },
        { id: 2, userName: 'Ivan3', title: 'Папка3', desc: 'dddds' },
        { id: 3, userName: 'Ivan3', title: 'Папка3', desc: 'dddds' },
        { id: 4, userName: 'Ivan3', title: 'Папка3', desc: 'dddds' },
        { id: 5, userName: 'Ivan3', title: 'Папка3', desc: 'dddds' },
      ],
      countTotalCarts: 12,
    },
  }

  try {
    // const response = await axios.get<PaginatedResponse>('/catalog', {
    //   params: { query, page, category, userName, limit },
    // })
    // return response.data

    // Возвращаем "mock" данные
    return res.data
  } catch (e: any) {
    console.error(e)
    // Если нужно, можно возвращать rejectWithValue для обработки ошибок
    return rejectWithValue('Ошибка при загрузке данных пагинации')
  }
})

/**
 * Асинхронный экшен для загрузки карточек для следующей страницы.
 */
export const paginationNextPageThunk: any = createAsyncThunk<
  PaginatedResponse, // возвращаемый тип
  PaginationNextPageParams, // аргумент
  { rejectValue: string }
>('catalog/paginationNextPageThunk', async ({ query, page, category, limit = 10 }, { rejectWithValue }) => {
  // Пример "mock" данных
  const res = {
    data: {
      items: [
        { id: 6, userName: 'Ivan3', title: 'Папка3', desc: 'dddds' },
        { id: 7, userName: 'Ivan3', title: 'Папка3', desc: 'dddds' },
        { id: 8, userName: 'Ivan3', title: 'Папка3', desc: 'dddds' },
        { id: 9, userName: 'Ivan3', title: 'Папка3', desc: 'dddds' },
        { id: 10, userName: 'Ivan3', title: 'Папка3', desc: 'dddds' },
      ],
    },
  }

  try {
    // const response = await axios.get<PaginatedResponse>('/catalog', {
    //   params: { query, page, category, limit },
    // })
    // return response.data

    return res.data
  } catch (e: any) {
    console.error(e)
    return rejectWithValue('Ошибка при загрузке данных следующей страницы')
  }
})

/**
 * Асинхронный экшен для загрузки списка всех категорий.
 */
export const getAllCategoriesThunk: any = createAsyncThunk<
  AllCategoriesResponse, // возвращаемый тип
  void, // аргументы не передаем
  { rejectValue: string }
>('catalog/getAllCategoriesThunk', async (_, { rejectWithValue }) => {
  // Пример "mock" данных
  const res = {
    data: {
      allCategories: ['Медицина', 'Химия', 'Другое', 'Точные науки', 'Математика', 'Информатика'],
    },
  }

  try {
    // const response = await axios.get<AllCategoriesResponse>('/api/catalog/getAllCategory')
    // return response.data

    return res.data
  } catch (e: any) {
    console.error(e)
    return rejectWithValue('Ошибка при загрузке списка категорий')
  }
})
