import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from '@/../axios.config.ts'

/**
 * Асинхронный экшен для загрузки карточек для текущей страницы.
 * @param {Object} params - Параметры запроса.
 * @param {string} params.query - Поисковой запрос.
 * @param {number} params.page - Номер страницы.
 * @param {string} params.category - Выбранная категория.
 * @param {number} params.limit - Лимит карточек на странице.
 * @returns {Promise<Object>} Данные для обновления состояния.
 */
export const paginationThunk = createAsyncThunk('catalog/PaginationThunk', async ({ query, page, category, userName = '', limit = 10 }) => {
  const res = {
    data: {
      items: [
        {
          id: 1,
          userName: 'Ivan',
          title: 'Папка',
          desc: 'dddds',
        },
        {
          id: 2,
          userName: 'Ivan3',
          title: 'Папка3',
          desc: 'dddds',
        },
        {
          id: 3,
          userName: 'Ivan3',
          title: 'Папка3',
          desc: 'dddds',
        },
        {
          id: 4,
          userName: 'Ivan3',
          title: 'Папка3',
          desc: 'dddds',
        },
        {
          id: 5,
          userName: 'Ivan3',
          title: 'Папка3',
          desc: 'dddds',
        },
        {
          id: 6,
          userName: 'Ivan3',
          title: 'Папка3',
          desc: 'dddds',
        },
        {
          id: 7,
          userName: 'Ivan3',
          title: 'Папка3',
          desc: 'dddds',
        },
        {
          id: 8,
          userName: 'Ivan3',
          title: 'Папка3',
          desc: 'dddds',
        },
        {
          id: 9,
          userName: 'Ivan3',
          title: 'Папка3',
          desc: 'dddds',
        },
        {
          id: 10,
          userName: 'Ivan3',
          title: 'Папка3',
          desc: 'dddds',
        }
        ],
      countTotalCarts: 12, // Общее количество элементов
    },
  }
  try {
    // const res = await axios.get('/catalog', {
    //   params: { query, page, category, userName, limit },
    // })
    console.log(res.data)
    return res.data
  } catch (e) {
    console.error(e)
  }
})

/**
 * Асинхронный экшен для загрузки карточек для следующей страницы.
 * @param {Object} params - Параметры запроса.
 * @param {string} params.query - Поисковой запрос.
 * @param {number} params.page - Текущая страница.
 * @param {string} params.category - Выбранная категория.
 * @param {number} params.limit - Лимит карточек на странице.
 * @returns {Promise<Object>} Данные для обновления состояния.
 */
export const paginationNextPageThunk = createAsyncThunk('catalog/paginationNextPageThunk', async ({ query, page, category, limit = 10 }) => {
  const res = {
    data: {
      items: [
        {
          id: 5,
          userName: 'Ivan',
          title: 'Папка4',
          desc: 'dddds',
        },
        {
          id: 6,
          userName: 'Ivan2',
          title: 'Папка6',
          desc: 'dddds',
        },
      ],
    },
  }
  try {
    // const res = await axios.get('/catalog', {
    // 	params: { query, page, category, limit },
    // });
    // console.log(res.data)
    return res.data
  } catch (e) {
    console.error(e)
  }
})

/**
 * Асинхронный экшен для загрузки списка всех категорий.
 * @returns {Promise<Object>} Массив категорий.
 */
export const getAllCategoriesThunk = createAsyncThunk('catalog/getAllCategoriesThunk', async () => {
  const res = {
    data: {
      allCategories: ['Медицина', 'Химия', 'Другое', 'Точные науки', 'Математика', 'Информатика'], // Массив категорий
    },
  }
  try {
    // const res = await axios.get('/api/catalog/getAllCategory')
    // console.log(res.data)
    return res.data
  } catch (e) {
    console.error(e)
  }
})
