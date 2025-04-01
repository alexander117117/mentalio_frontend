import { WordsItem } from '@/entities/folder/lib/types'
import { PayloadAction } from '@reduxjs/toolkit'
import { CardModeState } from '../types/types'

export const cardModeReducer = {
  setCurrentIndex(state: CardModeState, action: PayloadAction<number>) {
    state.currentIndex = action.payload
  },
  setTopicName(state: CardModeState, action: PayloadAction<string>) {
    state.topicName = action.payload
  },
  updateCardSettings(
    state: CardModeState,
    action: PayloadAction<{
      isInfinite?: boolean
      isShuffle?: boolean
      isFavoritesOnly?: boolean
    }>,
  ) {
    if (typeof action.payload.isInfinite === 'boolean') {
      state.isInfinite = action.payload.isInfinite
    }
    if (typeof action.payload.isShuffle === 'boolean') {
      state.isShuffle = action.payload.isShuffle
    }
    if (typeof action.payload.isFavoritesOnly === 'boolean') {
      state.isFavoritesOnly = action.payload.isFavoritesOnly
    }
  },
  setWords(state: CardModeState, action: PayloadAction<WordsItem[]>) {
    state.words = action.payload
    state.currentIndex = 0
  },
  toggleFavorite(state: CardModeState, action: PayloadAction<{ id: string }>) {
    const idx = state.words.findIndex((item) => item.id === action.payload.id)
    if (idx !== -1) {
      state.words[idx].chosen = !state.words[idx].chosen
    }
  },
  setIndex(state: CardModeState, action: PayloadAction<number>) {
    state.currentIndex = action.payload
  },
}
