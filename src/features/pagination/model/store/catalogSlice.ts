import { createSlice } from '@reduxjs/toolkit'
import { handlePending, handleRejected } from '@/shared/lib/helpers/StoreHandlers.ts'
import {
  paginationThunk,
  paginationNextPageThunk,
  getAllCategoriesThunk,
  getCardsFolderMentalio,
} from './catalogThunks.ts'
import { CardCategoriesItem, CardFolderItem } from '@/entities/folder/lib/types'

/**
 * Интерфейс состояния catalog-слайса.
 */
interface CatalogState {
  cards: CardFolderItem[]
  cardsHome: CardFolderItem[]
  allCategories: CardCategoriesItem[]
  query: string
  category: string
  page: number
  totalPage: number
  limit: number
  loading: boolean
  error: string | null
}

const initialState: CatalogState = {
  cards: [],
  cardsHome: [],
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
          state.cards = [...action.payload.results.items]
          if (action.payload.results.countTotalCards !== undefined) {
            state.totalPage = Math.ceil(action.payload.results.countTotalCards / state.limit)
          }
        }
      })
      .addCase(paginationThunk.rejected, handleRejected)

    // Получение карточек только Mentalio
    builder
      .addCase(getCardsFolderMentalio.pending, handlePending)
      .addCase(getCardsFolderMentalio.fulfilled, (state, action) => {
        state.loading = false
        if (action.payload) {
          state.cardsHome = [...action.payload.results.items]
        }
      })
      .addCase(getCardsFolderMentalio.rejected, handleRejected)

    // Загрузка всех категорий
    builder
      .addCase(getAllCategoriesThunk.pending, handlePending)
      .addCase(getAllCategoriesThunk.fulfilled, (state, action) => {
        state.loading = false
        if (action.payload) {
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
          state.cards = [...state.cards, ...action.payload.results.items]
          state.totalPage = state.totalPage > 0 ? state.totalPage - 1 : 0
          state.page += 1
        }
      })
      .addCase(paginationNextPageThunk.rejected, handleRejected)
  },
})

export const { setCategory, setQuery, setPage } = catalogSlice.actions
export default catalogSlice.reducer
