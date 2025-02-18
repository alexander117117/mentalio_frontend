import { http, HttpResponse } from 'msw'
import { axiosInstance } from '@/shared/api/axiosInstance'

const URL = axiosInstance.defaults.baseURL


const mockCards = [
  { id: 1, name: 'Ivan', category_name: 'Папка', description: 'ddddsddddsddddsDDDDASS2424432rfdsfhx fsdfg sfdsf sd' },
  { id: 2, name: 'Ivan3', category_name: 'Папка3', description: 'ddddsddddsddddsDDDDASS2424432rfdsfhx fsdfg sfdsf sd' },
  { id: 3, name: 'Ivan3', category_name: 'Папка3', description: 'ddddsddddsddddsDDDDASS2424432rfdsfhx fsdfg sfdsf sd' },
  { id: 4, name: 'Ivan3', category_name: 'Папка3', description: 'ddddsddddsddddsDDDDASS2424432rfdsfhx fsdfg sfdsf sd' },
  { id: 5, name: 'Ivan3', category_name: 'Папка3', description: 'ddddsddddsddddsDDDDASS2424432rfdsfhx fsdfg sfdsf sd' },
]

const totalCards = 12

const mockCategories = [
  { id: 1, name: 'Папка' },
  { id: 2, name: 'Папка2' },
  { id: 3, name: 'Папка3' },
  { id: 4, name: 'Папка4' },
  { id: 5, name: 'Папка5' },
]

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
