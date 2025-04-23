import { RootState } from '@/app/store/configureStore'
import { setOptionsIsChoice, setisShowSummary, setIndex, putWordToEnd } from '@/entities/testInteractive/store/slice'
import { QuestionsMultipleChoice } from '@/entities/testInteractive/types'
import { handleSelectAnswerMemorizationProps } from '@/entities/testInteractive/types/handleSelectAnswerProps'
import { useCallback } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

export function useMemorizationInteractive() {
  const dispatch = useDispatch()
  const { words, currentIndex } = useSelector((s: RootState) => s.testInteractive, shallowEqual) as {
    words: QuestionsMultipleChoice[]
    currentIndex: number
  }

  const total = words.length


  const handleSelectAnswer = useCallback(
    ({ isCorrect, question }: handleSelectAnswerMemorizationProps) => {
      /* отмечаем выбор */
      dispatch(setOptionsIsChoice({ id: question.id, isChoice: true }))

      const isLastCard = currentIndex === total - 1

      /* ---------- 1. Последняя карточка ---------- */
      if (isLastCard) {
        if (isCorrect) {
          setTimeout(() => dispatch(setisShowSummary(true)), 1200)
        } else {
          setTimeout(() => {
            dispatch(putWordToEnd(question.id))
            dispatch(setIndex(total - 1))          // показываем новую последнюю
          }, 1200)
        }
        return
      }

      /* ---------- 2. НЕ последняя карточка ---------- */
      if (isCorrect) {
        // переходим к следующей
        setTimeout(() => dispatch(setIndex(currentIndex + 1)), 1200)
      } else {
        // переносим слово в конец, index остаётся (покажет след. карточку)
        setTimeout(() => dispatch(putWordToEnd(question.id)), 1200)
      }
    },
    [dispatch, currentIndex, total]
  )

  return { words, currentIndex, total, handleSelectAnswer }
}
