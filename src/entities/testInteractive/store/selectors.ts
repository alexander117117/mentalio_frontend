import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '@/app/store/configureStore'
import { shuffleArray } from '@/shared/lib/shuffleArray'
import { WordsItem } from '@/entities/folder/lib/types'

export const selectCardMode = (state: RootState) => state.testInteractive
export const selectWord = (state: RootState) => state.testInteractive.words
export const selectIsFavoritesOnly = (state: RootState) => state.testInteractive.setting?.isFavoritesOnly
export const selectIsShuffle = (state: RootState) => state.testInteractive.setting?.isShuffle
export const selectCurrentIndex = (state: RootState) => state.testInteractive.currentIndex

export const selectPreparedWords = createSelector(
  [selectIsFavoritesOnly, selectIsShuffle, selectWord],
  (isFavoritesOnly, isShuffle, selectWord) => {
    let card = [...selectWord] as WordsItem[]
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
