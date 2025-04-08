import { PayloadAction } from '@reduxjs/toolkit'
import { ModesInteractive, SettingInteractive, TestInteractiveState, WordsInteractive } from '../types'
import { Id } from '@/shared/types'

export const testInteractiveReducer = {
  setDataTestInteractive(
    state: TestInteractiveState,
    action: PayloadAction<{
      words: WordsInteractive
      modes: ModesInteractive
      setting: SettingInteractive
      topicName: string
    }>,
  ) {
    console.log('setDataTestInteractive', {
      words: action.payload.words,
      modes: action.payload.modes,
      setting: action.payload.setting,
      topicName: action.payload.topicName,
    })

    state.words = action.payload.words
    state.modes = action.payload.modes
    state.setting = action.payload.setting
    state.topicName = action.payload.topicName
  },
  setCurrentIndex(state: TestInteractiveState, action: PayloadAction<number>) {
    state.currentIndex = action.payload
  },
  setOptionsIsChoice(state: TestInteractiveState, action: PayloadAction<Id>) {
    const idQuestions = action.payload
    state.words = state.words.map((item) => {
      if (item.id === idQuestions) {
        return { ...item, isChoice: true }
      }
      return item
    }) as WordsInteractive
  },
  setisShowSummary(state: TestInteractiveState, action: PayloadAction<boolean>) {
    state.isShowSummary = action.payload
  },
  setTopicName(state: TestInteractiveState, action: PayloadAction<string>) {
    state.topicName = action.payload
  },
  updateCardSettings(
    state: TestInteractiveState,
    action: PayloadAction<{
      isInfinite?: boolean
      isShuffle?: boolean
      isFavoritesOnly?: boolean
    }>,
  ) {
    if (!state.setting) return

    if (typeof action.payload.isInfinite === 'boolean') {
      state.setting.isInfinite = action.payload.isInfinite
    }
    if (typeof action.payload.isShuffle === 'boolean') {
      state.setting.isShuffle = action.payload.isShuffle
    }
    if (typeof action.payload.isFavoritesOnly === 'boolean') {
      state.setting.isFavoritesOnly = action.payload.isFavoritesOnly
    }
  },
  setWords(state: TestInteractiveState, action: PayloadAction<WordsInteractive>) {
    state.words = action.payload
    state.currentIndex = 0
  },
  setIndex(state: TestInteractiveState, action: PayloadAction<number>) {
    state.currentIndex = action.payload
  },
  setLoadingInteractive(state: TestInteractiveState, action: PayloadAction<boolean>) {
    state.loading = action.payload
  },
  setErrorInteractive(state: TestInteractiveState, action: PayloadAction<string | null>) {
    state.error = action.payload
  },
  resetStateInteractive(state: TestInteractiveState) {
    state.words = []
    state.modes = ''
    state.currentIndex = 0
    state.isShowSummary = false
    state.topicName = ''
    state.setting = null
    state.loading = false
    state.error = null
  },
}
