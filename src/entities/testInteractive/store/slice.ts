import { createSlice } from '@reduxjs/toolkit'
import { TestInteractiveState } from '../types/types'
import { testInteractiveReducer } from './reducers'

const initialState: TestInteractiveState = {
  words: [],
  modes: '',
  currentIndex: 0,
  isShowSummary: false,
  topicName: '',
  setting: null,
  loading: false,
  error: null,
}

export const testInteractiveSlice = createSlice({
  name: 'testInteractive',
  initialState,
  reducers: testInteractiveReducer,
})

export const { updateCardSettings, setWords, toggleFavorite, setTopicName, setIndex, setDataTestInteractive, setisShowSummary, resetStateInteractive, setErrorInteractive, setLoadingInteractive } = testInteractiveSlice.actions
export const testInteractive = testInteractiveSlice.reducer
