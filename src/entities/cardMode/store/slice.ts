import { createSlice } from '@reduxjs/toolkit'
import { CardModeState } from '../types/types'
import { cardModeReducer } from './reducers'

const initialState: CardModeState = {
  words: [],
  currentIndex: 0,
  topicName: '',
  isInfinite: false,
  isShuffle: false,
  isFavoritesOnly: false,
  loading: false,
  error: null,
}

export const cardModeSlice = createSlice({
  name: 'cardMode',
  initialState,
  reducers: cardModeReducer,
})

export const { updateCardSettings, setWords, toggleFavorite, setTopicName, setIndex } = cardModeSlice.actions
export default cardModeSlice.reducer
