import { http, HttpResponse } from 'msw'
import { axiosInstance } from '@/shared/api/axiosInstance'
import { mockCards, mockCategories, totalCards } from '../lib/const'

const URL = axiosInstance.defaults.baseURL

export const catalogHandlers = [
  http.get(`${URL}/catalog`, () => {
    return HttpResponse.json({
      results: {
        items: mockCards,
        countTotalCarts: totalCards,
      },
    })
  }),

  http.get(`${URL}/catalog/categories`, () => {
    return HttpResponse.json({ results: { allCategories: mockCategories } })
  }),
]
