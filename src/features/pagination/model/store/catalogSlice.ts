import { createSlice } from '@reduxjs/toolkit'
import { handlePending, handleRejected } from '@/shared/lib/helpers/StoreHandlers.ts'
import {
  paginationThunk,
  paginationNextPageThunk,
  getAllCategoriesThunk,
  getCartsFolderMentalio,
} from './catalogThunks.ts'
import { CartCategoriesItem, CartFolderItem } from '@/entities/folder/lib/types.ts'

/**
 * Интерфейс состояния catalog-слайса.
 */
interface CatalogState {
  carts: CartFolderItem[]
  cartsHome: CartFolderItem[]
  allCategories: CartCategoriesItem[]
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
  cartsHome: [],
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
          console.log('action.payload', action.payload)
          state.carts = [...action.payload.results.items]
          if (action.payload.results.countTotalCarts !== undefined) {
            state.totalPage = Math.ceil(action.payload.results.countTotalCarts / state.limit)
          }
        }
      })
      .addCase(paginationThunk.rejected, handleRejected)

    // Получение карточек только Mentalio
    builder
      .addCase(getCartsFolderMentalio.pending, handlePending)
      .addCase(getCartsFolderMentalio.fulfilled, (state, action) => {
        state.loading = false
        if (action.payload) {
          console.log('action.payload cartsHome', action.payload)
          state.cartsHome = [...action.payload.results.items]
        }
      })
      .addCase(getCartsFolderMentalio.rejected, handleRejected)

    // Загрузка всех категорий
    builder
      .addCase(getAllCategoriesThunk.pending, handlePending)
      .addCase(getAllCategoriesThunk.fulfilled, (state, action) => {
        state.loading = false
        if (action.payload) {
          console.log('action.payload allCategories:', action.payload.results.allCategories)
          state.allCategories = action.payload.results.allCategories
        }
      })
      .addCase(getAllCategoriesThunk.rejected, handleRejected)

    // Пагинация: загрузка следующей страницы
    builder
      .addCase(paginationNextPageThunk.pending, handlePending)
      .addCase(paginationNextPageThunk.fulfilled, (state, action) => {
        state.loading = false
        if (action.payload) {
          state.carts = [...state.carts, ...action.payload.results.items]
          state.totalPage = state.totalPage > 0 ? state.totalPage - 1 : 0
          state.page += 1
        }
      })
      .addCase(paginationNextPageThunk.rejected, handleRejected)
  },
})

export const { setCategory, setQuery, setPage } = catalogSlice.actions
export default catalogSlice.reducer
