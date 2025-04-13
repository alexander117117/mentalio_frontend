import { useCallback } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { RootState } from '@/app/store/configureStore'
import { putWordToEnd, setIndex, setisShowSummary, setOptionsIsChoice } from '@/entities/testInteractive/store/slice'
import { handleSelectAnswerMemorizationProps } from '@/entities/testInteractive/types/handleSelectAnswerProps'
import { QuestionsTest } from '@/entities/testInteractive/types'
import { addLengthAnswer } from '@/entities/testAnalytics/testAnalyticsSlice'

export function useMemorizationInteractive() {
  const dispatch = useDispatch()

  const { words, currentIndex } = useSelector((state: RootState) => state.testInteractive, shallowEqual) as {
    words: QuestionsTest[]
    currentIndex: number
  }

  const total = words.length
  const current = currentIndex + 1

  const handleSelectAnswer = useCallback(
    ({ isCorrect, question }: handleSelectAnswerMemorizationProps) => {
      // Помечаем, что пользователь выбрал вариант ответа
      dispatch(setOptionsIsChoice({ id: question.id, isChoice: true }))

      // Если это последний вопрос — показываем результат
      if (current === total) {
        dispatch(setisShowSummary(true))
      } else {
        if (isCorrect) {
          dispatch(setOptionsIsChoice({ id: question.id, isChoice: true }))
          setTimeout(() => {
            dispatch(addLengthAnswer(current + 1))
            dispatch(setIndex(currentIndex + 1))
          }, 1500)
        } else {
          dispatch(setOptionsIsChoice({ id: question.id, isChoice: true }))
          setTimeout(() => {
            dispatch(setOptionsIsChoice({ id: question.id, isChoice: null }))
            dispatch(putWordToEnd(question.id))
          }, 1500)
        }
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
