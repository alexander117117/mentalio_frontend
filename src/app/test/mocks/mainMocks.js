import { http, HttpResponse } from 'msw'
import axios from '@axios'

const URL = axios.defaults.baseURL

export const mainMocks = [
  http.get(`${URL}/userFiles`, () => {
    let resError = false
    if (resError) {
      let error = { error: 'Ошибка получения файлов.' }
      return new HttpResponse(JSON.stringify(error), { status: 400 })
    } else {
      return HttpResponse.json({
        userFiles: [
          {
            id: 1,
            name: 'File 1',
            description: 'Description for File 1',
            dateCreated: '2024-12-07',
            category: 'General',
            topics: [
              {
                id: 1,
                name: 'Topic 1',
                description: 'Description for Topic 1',
                dateCreated: '2024-12-07',
                percentStudy: 100,
                cards: [
                  {
                    id: 1,
                    question: { text: '1', language: 'Исп' },
                    answer: { text: '2', language: 'Рус', transcription: '' },
                    chosen: true,
                  },
                ],
              },
            ],
          },
        ],
      })
    }
  }),
  http.post(`${URL}/userFiles`, () => {
    let resError = false
    if (resError) {
      let error = { error: 'Ошибка создания файла.' }
      return new HttpResponse(JSON.stringify(error), { status: 400 })
    } else {
      return HttpResponse.json(
        {
          file: {
            id: Math.floor(Math.random() * 1000),
            name: 'New File',
            description: '',
            dateCreated: new Date().toISOString().split('T')[0],
            category: 'Category 1',
            topics: [],
          },
        },
        { status: 201 },
      )
    }
  }),
  http.get(`${URL}/userFiles/:fileId`, () => {
    let resError = false
    if (resError) {
      let error = { error: 'Файл не найден.' }
      return new HttpResponse(JSON.stringify(error), { status: 404 })
    } else {
      return HttpResponse.json({
        file: {
          id: 1,
          name: 'File 1',
          description: 'Description for File 1',
          dateCreated: '2024-12-07',
          category: 'General',
          topics: [
            {
              id: 1,
              name: 'Topic 1',
              description: 'Description for Topic 1',
              dateCreated: '2024-12-07',
              percentStudy: 100,
              cards: [],
            },
          ],
        },
      })
    }
  }),
  http.put(`${URL}/userFiles/:fileId`, () => {
    let resError = false
    if (resError) {
      let error = { error: 'Ошибка обновления файла.' }
      return new HttpResponse(JSON.stringify(error), { status: 400 })
    } else {
      return HttpResponse.json({
        file: {
          id: 1,
          name: 'Updated File',
          description: 'Updated description',
          dateCreated: '2024-12-07',
          category: 'Updated Category',
          topics: [],
        },
      })
    }
  }),
  http.delete(`${URL}/userFiles/:fileId`, () => {
    let resError = false
    if (resError) {
      let error = { error: 'Ошибка удаления файла.' }
      return new HttpResponse(JSON.stringify(error), { status: 400 })
    } else {
      return new HttpResponse(null, { status: 204 })
    }
  }),
]
