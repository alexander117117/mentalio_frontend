import { WordsItem } from '@/entities/folder/lib/types'
export interface CardModeState {
  words: WordsItem[]
  currentIndex: number
  topicName: string
  isInfinite: boolean
  isShuffle: boolean
  isFavoritesOnly: boolean
  loading: boolean
  error: string | null
}
