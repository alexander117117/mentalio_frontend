import { Dispatch, SetStateAction } from 'react'

export interface AvatarItem {
  id: number
  avatar: string
  chosen: boolean
}

/**
 * Хук для управления выбором аватара.
 *
 * @param avatars - Список аватаров (AvatarItem[]).
 * @param setAvatars - Функция для обновления списка аватаров.
 * @returns Состояние аватаров и функция обработчика.
 */
export function useAvatarSelection(avatars: AvatarItem[], setAvatars: Dispatch<SetStateAction<AvatarItem[]>>) {
  /**
   * Обрабатывает выбор аватара.
   * @param id - ID выбранного аватара.
   */
  const handleAvatarSelect = (id: number) => {
    setAvatars((prev) =>
      prev.map((item) => ({
        ...item,
        chosen: item.id === id,
      })),
    )
  }

  return { avatars, handleAvatarSelect }
}

export interface QuestionItem {
  id: number
  answer: boolean
  // Дополнительные поля: question?: string, etc.
}

/**
 * Хук для управления взаимодействием с вопросами.
 *
 * @param questions - Список вопросов (QuestionItem[]).
 * @param setQuestions - Функция для обновления списка вопросов.
 * @returns Состояние вопросов и функция обработчика.
 */
export function useQuestions(questions: QuestionItem[], setQuestions: Dispatch<SetStateAction<QuestionItem[]>>) {
  /**
   * Переключает статус ответа на вопрос.
   * @param id - ID вопроса для переключения.
   */
  const handleQuestionAnswer = (id: number) => {
    setQuestions((prev) =>
      prev.map((question) => (question.id === id ? { ...question, answer: !question.answer } : question)),
    )
  }

  return { questions, handleQuestionAnswer }
}
