export interface CardsWordsItem {
  id: number | string
  word: string
  translate: string
}

export interface TopicsItem {
  id: number | string
  name: string
  description: string
  dateCreated: string
  percentStudy?: number
  cards: CardsWordsItem[]
}

export interface CardFolderItem {
  id: number | string
  userName?: string
  name: string
  description: string
  dateCreated?: string
  category: string
  topics: TopicsItem[]
}

export type CardFolderItemWithUserName = Omit<CardFolderItem, 'userName'> & {
  userName: string
}

export interface CardCategoriesItem {
  id: number | string
  name: string
}
