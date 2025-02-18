export interface CartsWordsItem {}

export interface TopicsItem {
  date_created: string
  description: string
  id: number
  name: string
  percent_study: number
  cards: CartsWordsItem[]
}
export interface CartFolderItem {
  id: number
  name: string
  category_name: string
  date_created: string
  description: string
  topics: TopicsItem[]
}
export interface CartCategoriesItem {
  id: number
  name: string
}
export interface PaginatedResponse {
  code: number
  next: number
  previous: number
  results: {
    items: CartFolderItem[]
    countTotalCarts?: number
    status: string
  }
}

export interface PaginationParams {
  query: string
  page: number
  category: string
  userName?: string
  limit?: number
}

export interface PaginationNextPageParams {
  query: string
  page: number
  category: string
  limit?: number
}

export interface AllCategoriesResponse {
  allCategories: CartCategoriesItem[]
}
