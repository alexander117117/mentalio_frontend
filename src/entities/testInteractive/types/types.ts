import { WordsItem } from '@/entities/folder/lib/types'

export type ModesInteractive = 'card-mode' | 'memorization' | 'test' | ''
export type SettingInteractive = SettingInteractiveCardMode & SettingInteractiveMemorization & SettingInteractiveTest
export type SettingInteractiveCardMode = {
  isInfinite: boolean
  isShuffle: boolean
  isFavoritesOnly: boolean
}
export type SettingInteractiveMemorization = {
  num_questions: number
  isFavoritesOnly: boolean
}
export type SettingInteractiveTest = {
  num_questions: number
  isAnswerTrueFalse: boolean
  isAnswerMultipleChoice: boolean
  isAnswerWritten: boolean
}
export interface TestInteractiveState {
  words: WordsItem[]
  modes: ModesInteractive
  currentIndex: number
  isShowSummary: boolean
  topicName: string
  setting: SettingInteractive | null
  loading: boolean
  error: string | null
}
