import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '@/app/store/configureStore'
import { shuffleArray } from '@/shared/lib/shuffleArray'

export const selectCardMode = (state: RootState) => state.cardMode
export const selectWord = (state: RootState) => state.cardMode.words
export const selectIsFavoritesOnly = (state: RootState) => state.cardMode.isFavoritesOnly
export const selectIsShuffle = (state: RootState) => state.cardMode.isShuffle
export const selectCurrentIndex = (state: RootState) => state.cardMode.currentIndex

export const selectPreparedWords = createSelector(
  [selectIsFavoritesOnly, selectIsShuffle, selectWord],
  (isFavoritesOnly, isShuffle, selectWord) => {
    let card = [...selectWord]
    if (isFavoritesOnly) {
      card = card.filter((w) => w.chosen)
    }
    if (isShuffle) {
      card = shuffleArray(card)
    }
    return card
  },
)

export const selectCurrentCard = createSelector(selectPreparedWords, selectCurrentIndex, (preparedWords, index) => {
  if (!preparedWords.length || index < 0 || index >= preparedWords.length) {
    return null
  }
  return preparedWords[index]
})
