import { http, HttpResponse } from 'msw'
import { axiosInstance } from '@/shared/api/axiosInstance.js'
import { mockCreateFolder, mockPutUserFolder, mockUserFolder, mockUserFolders } from '../lib/const'
const URL: string | undefined = axiosInstance.defaults.baseURL

export const userHandlers = [
  http.get(`${URL}/userFiles`, () => {
    const resError: boolean = false
    if (resError) {
      const error = { error: 'Ошибка получения файлов.' }
      return new HttpResponse(JSON.stringify(error), { status: 400 })
    } else {
      return HttpResponse.json({
        userFiles: mockUserFolders,
      })
    }
  }),
  http.post(`${URL}/userFiles`, () => {
    const resError: boolean = false
    if (resError) {
      const error = { error: 'Ошибка создание файлов.' }
      return new HttpResponse(JSON.stringify(error), { status: 400 })
    } else {
      return HttpResponse.json(
        {
          file: mockCreateFolder,
        },
        { status: 201 },
      )
    }
  }),
  http.get(`${URL}/userFiles/:fileId`, () => {
    const resError: boolean = false
    if (resError) {
      const error = { error: 'Файл не найден.' }
      return new HttpResponse(JSON.stringify(error), { status: 404 })
    } else {
      return HttpResponse.json({
        file: mockUserFolder,
      })
    }
  }),
  http.put(`${URL}/userFiles/:fileId`, () => {
    const resError: boolean = false
    if (resError) {
      const error = { error: 'Ошибка обновления файла.' }
      return new HttpResponse(JSON.stringify(error), { status: 400 })
    } else {
      return HttpResponse.json({
        file: mockPutUserFolder({
          id: 2,
          name: 'string',
          description: 'string',
          category: 'string',
        }),
      })
    }
  }),
  http.delete(`${URL}/userFiles/:fileId`, () => {
    const resError: boolean = false
    if (resError) {
      const error = { error: 'Ошибка удаления файла.' }
      return new HttpResponse(JSON.stringify(error), { status: 400 })
    } else {
      return new HttpResponse(null, { status: 204 })
    }
  }),
]
