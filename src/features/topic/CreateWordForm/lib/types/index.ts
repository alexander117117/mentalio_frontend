import { WordsItem } from '@/entities/folder/lib/types'
import { Id } from '@/shared/types'

export interface TranslatedWord {
  id: Id
  translatedWord: string
}
export type CreateWords = WordsItem & {
  typedWord: string
}
