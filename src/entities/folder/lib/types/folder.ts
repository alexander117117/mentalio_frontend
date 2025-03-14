import { Id } from '@/shared/types/types'

export interface WordsItem {
  id: Id
  sourceWord: string
  translatedWord: string
  translatedImg?: string
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
