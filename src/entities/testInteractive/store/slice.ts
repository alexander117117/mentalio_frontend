import { createSlice } from '@reduxjs/toolkit'
import { TestInteractiveState } from '../types/types'
import { testInteractiveReducer } from './reducers'
import { handlePending, handleRejected } from '@/shared/lib/helpers'
import { getDataMemorizationThunks, getDataTestThunks } from './thunks'

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
  extraReducers: (builder) => {
    builder
      .addCase(getDataMemorizationThunks.pending, handlePending)
      .addCase(getDataMemorizationThunks.fulfilled, (state, action) => {
        state.loading = false
        state.words = action.payload
      })
      .addCase(getDataMemorizationThunks.rejected, handleRejected)

      //
      .addCase(getDataTestThunks.pending, handlePending)
      .addCase(getDataTestThunks.fulfilled, (state, action) => {
        state.loading = false
        state.words = action.payload
      })
      .addCase(getDataTestThunks.rejected, handleRejected)
  },
})

export const {
  updateCardSettings,
  setWords,
  setTopicName,
  setIndex,
  setDataTestInteractive,
  setisShowSummary,
  resetStateInteractive,
  setErrorInteractive,
  setLoadingInteractive,
  setOptionsIsChoice,
} = testInteractiveSlice.actions
export const testInteractive = testInteractiveSlice.reducer
