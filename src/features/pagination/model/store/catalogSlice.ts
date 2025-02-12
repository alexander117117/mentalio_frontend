import { createSlice } from '@reduxjs/toolkit'
import { handlePending, handleRejected } from '@/shared/helpers/StoreHandlers.ts'
import { paginationThunk, paginationNextPageThunk, getAllCategoriesThunk } from './catalogThunks.ts'

/**
 * Интерфейс для одной карточки (должен совпадать с CardItem из thunks).
 */
interface CardItem {
  id: number
  userName: string
  title: string
  desc: string
}

/**
 * Интерфейс состояния catalog-слайса.
 */
interface CatalogState {
  carts: CardItem[]
  allCategories: string[]
  query: string
  category: string
  page: number
  totalPage: number
  limit: number
  loading: boolean
  error: string | null
}

const initialState: CatalogState = {
  carts: [],
  allCategories: [],
  query: '',
  category: '',
  page: 1,
  totalPage: 0,
  limit: 10,
  loading: false,
  error: null,
}

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    /**
     * Устанавливает текущую категорию и сбрасывает страницу на первую.
     */
    setCategory(state, action): void {
      state.category = action.payload
      state.page = 1
    },
    /**
     * Устанавливает текущий поисковой запрос.
     */
    setQuery(state, action) {
      state.query = action.payload
    },
    /**
     * Устанавливает текущую страницу.
     */
    setPage(state, action) {
      state.page = action.payload
    },
  },
  extraReducers: (builder) => {
    // Пагинация: загрузка данных для текущей страницы
    builder
      .addCase(paginationThunk.pending, handlePending)
      .addCase(paginationThunk.fulfilled, (state, action) => {
        state.loading = false
        if (action.payload) {
          state.carts = [...action.payload.items]
          if (action.payload.countTotalCarts !== undefined) {
            state.totalPage = Math.ceil(action.payload.countTotalCarts / state.limit)
          }
        }
      })
      .addCase(paginationThunk.rejected, handleRejected)

    // Загрузка всех категорий
    builder
      .addCase(getAllCategoriesThunk.pending, handlePending)
      .addCase(getAllCategoriesThunk.fulfilled, (state, action) => {
        state.loading = false
        if (action.payload) {
          state.allCategories = action.payload.allCategories
        }
      })
      .addCase(getAllCategoriesThunk.rejected, handleRejected)

    // Пагинация: загрузка следующей страницы
    builder
      .addCase(paginationNextPageThunk.pending, handlePending)
      .addCase(paginationNextPageThunk.fulfilled, (state, action) => {
        state.loading = false
        if (action.payload) {
          state.carts = [...state.carts, ...action.payload.items]
          state.totalPage = state.totalPage > 0 ? state.totalPage - 1 : 0
          state.page += 1
        }
      })
      .addCase(paginationNextPageThunk.rejected, handleRejected)
  },
})

export const { setCategory, setQuery, setPage } = catalogSlice.actions
export default catalogSlice.reducer
