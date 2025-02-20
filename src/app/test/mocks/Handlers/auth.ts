import { http, HttpResponse } from 'msw'
import { axiosInstance } from '@/shared/api/axiosInstance.js'

const URL: string | undefined = axiosInstance.defaults.baseURL

export const authHandlers = [
  http.post(`${URL}/auth/check-login`, () => {
    const resError: boolean = false
    if (resError) {
      const error = { error: 'Login занят.' }
      return new HttpResponse(JSON.stringify(error), { status: 400 })
    } else {
      return HttpResponse.json({
        status: 'success',
        message: 'login свободен',
        questions: [
          {
            id: 1,
            question: 'вопрос1',
            answer: false,
          },
          {
            id: 2,
            question: 'вопрос2',
            answer: false,
          },
          {
            id: 3,
            question: 'вопрос2',
            answer: false,
          },
          {
            id: 4,
            question: 'вопрос2',
            answer: false,
          },
          {
            id: 5,
            question: 'вопрос2',
            answer: false,
          },
          {
            id: 6,
            question: 'вопрос2',
            answer: false,
          },
          {
            id: 7,
            question: 'вопрос2',
            answer: false,
          },
          {
            id: 8,
            question: 'вопрос2',
            answer: false,
          },
          {
            id: 9,
            question: 'вопрос2',
            answer: false,
          },
        ],
      })
    }
  }),
  http.post(`${URL}/auth/register`, () => {
    const resError: boolean = false
    if (resError) {
      const error = { error: 'Пользователь не найден.' }
      return new HttpResponse(JSON.stringify(error), { status: 400 })
    } else {
      return HttpResponse.json({
        status: 'success',
        message: 'Пользователь успешно зарегистрирован',
        token: '12345',
      })
    }
  }),
  http.post(`${URL}/auth/login`, () => {
    const resError: boolean = false
    if (resError) {
      const error = { error: 'Пользователь не найден.' }
      return new HttpResponse(JSON.stringify(error), { status: 400 })
    } else {
      return HttpResponse.json({
        status: 'success',
        user: {
          id: '123',
          name: 'John Doe',
          email: 'user@example.com',
          phone: '1234567890',
          avatar: 'аватар_пользователя',
          icon: 'url_icon',
          role: 'user', // или "admin"
        },
        token: 'jwt_token_here',
        user_files: [],
      })
    }
  }),
  http.post(`${URL}/auth/password-reset/request`, () => {
    const resError: boolean = false
    if (resError) {
      const error = { error: 'Login не найден.' }
      return new HttpResponse(JSON.stringify(error), { status: 400 })
    } else {
      return HttpResponse.json({
        status: 'success',
        token_resetPassword: 'fce60a0d1fbda3221d7c6bccf3384d7b',
        message: 'код отправлен на email/SMS',
      })
    }
  }),
  http.post(`${URL}/auth/password-reset/verification`, () => {
    const resError: boolean = false
    if (resError) {
      const error = { error: 'Код не верный.' }
      return new HttpResponse(JSON.stringify(error), { status: 400 })
    } else {
      return HttpResponse.json({
        status: 'success',
        message: 'код верный',
      })
    }
  }),
  http.post(`${URL}/auth/password-reset/confirm`, () => {
    const resError: boolean = false
    if (resError) {
      const error = { error: 'Не удалось изменить пароль.' }
      return new HttpResponse(JSON.stringify(error), { status: 400 })
    } else {
      return HttpResponse.json({
        status: 'success',
        message: 'Пароль успешно изменен',
      })
    }
  }),
]
