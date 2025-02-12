
export interface CardItem {
  id: number
  userName: string
  title: string
  desc: string
}

export interface PaginatedResponse {
  items: CardItem[]
  countTotalCarts?: number
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
  allCategories: string[]
}