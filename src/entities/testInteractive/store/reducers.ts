import { PayloadAction } from '@reduxjs/toolkit'
import {
  ModesInteractive,
  QuestionsMultipleChoice,
  SettingInteractive,
  TestInteractiveState,
  WordsInteractive,
} from '../types'
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
    state.words = action.payload.words
    state.modes = action.payload.modes
    state.setting = action.payload.setting
    state.topicName = action.payload.topicName
  },
  setCurrentIndex(state: TestInteractiveState, action: PayloadAction<number>) {
    state.currentIndex = action.payload
  },

  setOptionsIsChoice(state: TestInteractiveState, action: PayloadAction<{ id: Id; isChoice: boolean | null }>) {
    const idQuestions = action.payload.id
    const isChoice = action.payload.isChoice

    state.words = state.words.map((item) => {
      if (item.id === idQuestions) {
        return { ...item, isChoice: isChoice }
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
  repeatTestInteractive(state: TestInteractiveState) {
    state.words = state.words.map((item) => {
      return { ...item, isChoice: null }
    }) as WordsInteractive
    state.currentIndex = 0
    state.isShowSummary = false
    state.loading = false
    state.error = null
  },
  // Положить слово в конец массива и удалить там где он был раньше
  putWordToEnd(state: any, action: PayloadAction<Id>) {
    const idx = state.words.findIndex((w) => w.id === action.payload)
    if (idx === -1) return

    const [word] = state.words.splice(idx, 1) as [QuestionsMultipleChoice]
    word.isChoice = null
    word.selectedOptionIndex = null
    state.words.push(word as never)
  },

  setSelectedOptionIndex(
    state: TestInteractiveState,
    action: PayloadAction<{
      id: string
      selectedIndex: number | null
    }>,
  ) {
    const { id, selectedIndex } = action.payload

    const questionIndex = state.words.findIndex((q) => q.id === id)
    if (questionIndex === -1) return

    const question = state.words[questionIndex] as QuestionsMultipleChoice
    question.selectedOptionIndex = selectedIndex

    question.isChoice = true
  },
}
