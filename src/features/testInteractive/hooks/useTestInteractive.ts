import { useCallback } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { RootState } from '@/app/store/configureStore'
import { setIndex, setisShowSummary, setOptionsIsChoice } from '@/entities/testInteractive/store/slice'
import { storeAnswer } from '@/entities/testAnalytics/testAnalyticsSlice'
import { handleSelectAnswerProps } from '@/entities/testInteractive/types/handleSelectAnswerProps'
import { QuestionsTest } from '@/entities/testInteractive/types'

export function useTestInteractive() {
  const dispatch = useDispatch()

  const { words, currentIndex } = useSelector((state: RootState) => state.testInteractive, shallowEqual) as {
    words: QuestionsTest[]
    currentIndex: number
  }

  const total = words.length
  const current = currentIndex + 1

  const handleSelectAnswer = useCallback(
    ({ isCorrect, question, userChoice, correctAnswer }: handleSelectAnswerProps) => {
      // Помечаем, что пользователь выбрал вариант ответа
      dispatch(setOptionsIsChoice(question.id))

      // Сохраняем ответ
      dispatch(
        storeAnswer({
          questionId: question.id,
          questionText: question.sourceWord,
          correctAnswer,
          userAnswer: userChoice,
          isCorrect,
        }),
      )

      // Если это последний вопрос — показываем результат
      if (current === total) {
        dispatch(setisShowSummary(true))
      } else {
        dispatch(setIndex(currentIndex + 1))
      }
    },
    [current, total, currentIndex, dispatch],
  )

  return {
    words,
    currentIndex,
    current,
    total,
    handleSelectAnswer,
    dispatch,
  }
}
