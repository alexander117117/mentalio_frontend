import { createSlice } from '@reduxjs/toolkit'
import { handlePending, handleRejected } from '@/store/helpers/Handlers.js'
import { getAllCategoriesThunk, paginationNextPageThunk, paginationThunk } from './catalogThunks.js'

const initialState = {
  carts: [], // Список карточек (данные, которые отображаются на странице)
  allCategories: [], // Список доступных категорий
  query: '', // Текст поискового запроса
  category: '', // Текущая выбранная категория
  page: 1, // Текущий номер страницы в пагинации
  totalPage: 0, // Общее количество страниц
  limit: 10, // Количество элементов на каждой странице
  loading: false, // Флаг, указывающий на состояние загрузки
  error: null, // Поле для хранения ошибки, если она произошла
}

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    /**
     * Устанавливает текущую категорию и сбрасывает страницу на первую.
     * @param {Object} state - Текущее состояние.
     * @param {Object} action - Экшен с новой категорией.
     */
    setCategory(state, action) {
      state.category = action.payload
      state.page = 1 // При изменении категории начинаем с первой страницы
    },

    /**
     * Устанавливает текущий поисковой запрос.
     * @param {Object} state - Текущее состояние.
     * @param {Object} action - Экшен с новым запросом.
     */
    setQuery(state, action) {
      state.query = action.payload
    },

    /**
     * Устанавливает текущую страницу.
     * @param {Object} state - Текущее состояние.
     * @param {Object} action - Экшен с номером страницы.
     */
    setPage(state, action) {
      state.page = action.payload
    },
  },
  extraReducers: (builder) => {
    // Пагинация: загрузка данных для текущей страницы
    builder
      .addCase(paginationThunk.pending, handlePending) // Флаг загрузки
      .addCase(paginationThunk.fulfilled, (state, action) => {
        state.loading = false // Завершаем загрузку
        state.carts = [...action.payload?.items] // Обновляем список карточек
        state.totalPage = Math.ceil(action.payload?.countTotalCarts / state.limit) // Пересчитываем общее количество страниц
      })
      .addCase(paginationThunk.rejected, handleRejected) // Обработка ошибки

    // Загрузка всех категорий
    builder
      .addCase(getAllCategoriesThunk.pending, handlePending) // Флаг загрузки
      .addCase(getAllCategoriesThunk.fulfilled, (state, action) => {
        state.loading = false // Завершаем загрузку
        state.allCategories = [...action.payload?.allCategories] // Обновляем список категорий
      })
      .addCase(getAllCategoriesThunk.rejected, handleRejected) // Обработка ошибки

    // Пагинация: загрузка следующей страницы
    builder
      .addCase(paginationNextPageThunk.pending, handlePending) // Флаг загрузки
      .addCase(paginationNextPageThunk.fulfilled, (state, action) => {
        state.loading = false // Завершаем загрузку
        state.carts = [...state.carts, ...action.payload?.items] // Добавляем новые карточки к текущему списку
        state.totalPage -= 1 // Уменьшаем общее количество оставшихся страниц
        state.page += 1 // Увеличиваем номер текущей страницы
      })
      .addCase(paginationNextPageThunk.rejected, handleRejected) // Обработка ошибки
  },
})

export const { setCategory, setQuery, setPage } = catalogSlice.actions
export default catalogSlice.reducer
