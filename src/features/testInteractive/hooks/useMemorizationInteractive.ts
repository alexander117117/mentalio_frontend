import { useCallback } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { RootState } from '@/app/store/configureStore'
import {
  putWordToEnd,
  setIndex,
  setisShowSummary,
  setSelectedOptionIndex,
} from '@/entities/testInteractive/store/slice'
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
      if (current === total) {
        setTimeout(() => {
          dispatch(setisShowSummary(true))
        }, 1500)
      } else {
        if (isCorrect) {
          setTimeout(() => {
            dispatch(addLengthAnswer(current + 1))
            dispatch(setSelectedOptionIndex({ id: question.id, selectedIndex: null }))
            dispatch(setIndex(currentIndex + 1))
          }, 1500)
        } else {
          setTimeout(() => {
            dispatch(setSelectedOptionIndex({ id: question.id, selectedIndex: null }))
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
