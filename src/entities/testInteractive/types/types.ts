import { Id } from '@/shared/types'

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

export type WordsInteractive = QuestionsTest[] | QuestionsMultipleChoice[] | []
export interface TestInteractiveState {
  words: WordsInteractive
  modes: ModesInteractive
  currentIndex: number
  isShowSummary: boolean
  topicName: string
  setting: SettingInteractive | null
  loading: boolean
  error: string | null
}

export interface QuestionsTest {
  id: Id
  type: 'true_false' | 'multiple_choice' | 'written'
  sourceWord: string
  options?: {
    text: string
    isCorrect: boolean
  }[]
  correctAnswer?: string
  isChoice?: boolean | null
}
export interface QuestionsMultipleChoice {
  id: Id
  sourceWord: string
  options: {
    text: string
    isCorrect: boolean
  }[]
  isChoice?: boolean | null
}
