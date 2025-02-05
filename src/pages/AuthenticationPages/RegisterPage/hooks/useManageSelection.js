/**
 * Хук для управления выбором аватара.
 *
 * @param {Array} avatars - Список аватаров.
 * @param {Function} setAvatars - Функция для обновления списка аватаров.
 * @returns {Object} - Состояние аватаров и функция обработчика.
 */
export function useAvatarSelection(avatars, setAvatars) {
  // Локальное состояние для отслеживания аватаров и их статуса выбора.

  /**
   * Обрабатывает выбор аватара.
   * @param {number} id - ID выбранного аватара.
   */
  const handleAvatarSelect = (id) => {
    setAvatars((prev) =>
      prev.map((item) => ({
        ...item,
        chosen: item.id === id, // Пометить выбранный аватар.
      })),
    )
  }

  return { avatars, handleAvatarSelect }
}

/**
 * Хук для управления взаимодействием с вопросами.
 *
 * @param {Array} questions - Список вопросов.
 * @param {Function} setQuestions - Функция для обновления списка вопросов.
 * @returns {Object} - Состояние вопросов и функция обработчика.
 */
export function useQuestions(questions, setQuestions) {
  // Локальное состояние для отслеживания вопросов и их статуса ответов.

  /**
   * Переключает статус ответа на вопрос.
   * @param {number} id - ID вопроса для переключения.
   */
  const handleQuestionAnswer = (id) => {
    setQuestions((prev) => prev.map((question) => (question.id === id ? { ...question, answer: !question.answer } : question)))
  }

  console.log(questions)
  return { questions, handleQuestionAnswer }
}
