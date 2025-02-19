export interface CartsWordsItem {
  id: number | string
  word: string
  translate: string
}

export interface TopicsItem {
  date_created: string
  description: string
  id: number | string
  name: string
  percent_study: number
  cards: CartsWordsItem[]
}
export interface CartFolderItem {
  id: number | string
  name: string
  category_name: string
  date_created: string
  description: string
  topics: TopicsItem[]
}
export interface CartCategoriesItem {
  id: number | string
  name: string
}
