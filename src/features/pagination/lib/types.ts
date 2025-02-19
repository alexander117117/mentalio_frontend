import { CartFolderItem, CartCategoriesItem } from '@/entities/folder/lib/types'

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
  results: {
    allCategories: CartCategoriesItem[]
  }
}
