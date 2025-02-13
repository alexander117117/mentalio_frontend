import { http, HttpResponse } from 'msw'
import { axiosInstance } from '@/shared/api/axiosInstance'

const URL = axiosInstance.defaults.baseURL

const mockCards = [
  { id: 1, userName: 'Ivan', title: 'Папка', desc: 'dddds' },
  { id: 2, userName: 'Ivan3', title: 'Папка3', desc: 'dddds' },
  { id: 3, userName: 'Ivan3', title: 'Папка3', desc: 'dddds' },
  { id: 4, userName: 'Ivan3', title: 'Папка3', desc: 'dddds' },
  { id: 5, userName: 'Ivan3', title: 'Папка3', desc: 'dddds' },
]

const totalCards = 12

const mockCategories = ['Медицина', 'Химия', 'Другое', 'Точные науки', 'Математика', 'Информатика']

export const catalogHandlers = [
  http.get(`${URL}/catalog`, () => {
    return HttpResponse.json({
      items: mockCards,
      countTotalCarts: totalCards,
    })
  }),

  http.get(`${URL}/catalog/getAllCategory`, () => {
    return HttpResponse.json({ allCategories: mockCategories })
  }),
]
