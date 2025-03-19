import { Id } from '@/shared/types/types'

export interface translatedWordItem {
  id: Id
  translatedWord: string
}

export interface WordsItem {
  id: Id
  sourceWord: string
  translated_words: translatedWordItem[]
  translatedImg: string
  imageFile?: FileList | null
  chosen: boolean
  isEdit?: boolean | null
}

export interface TopicsItem {
  id: Id
  topicName: string
  description: string
  dateCreated: string
  percentStudy?: number
  cards: WordsItem[]
}

export interface FolderItem {
  id: Id
  userName?: string
  folderName: string
  description: string
  dateCreated?: string
  categoryName: string
  topics: TopicsItem[]
}

export type FolderItemWithUserName = Omit<FolderItem, 'userName'> & {
  userName: string
}

export interface CategoriesItem {
  id: Id
  categoryName: string
}

export type apiTranslatedWords = Pick<translatedWordItem, 'translatedWord'>[]
