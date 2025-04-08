import { TitleCommon } from '@/shared/ui/titles/TitleCommon'
import { TestPagination } from '@/features/TestPagination'
import { TestChooseAnswer } from '@/entities/testInteractive/ui/interactiveWindows/TestChooseAnswer'
import styles from '@/shared/lib/classNames/index.module.css'

import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/app/store/configureStore'
import { setIndex, setisShowSummary, setOptionsIsChoice } from '@/entities/testInteractive/store/slice'
import { QuestionsTest } from '@/entities/testInteractive/types/types'
import { TestTrueFalse } from '@/entities/testInteractive/ui/interactiveWindows/TestTrueFalse'
import { TestInputAnswer } from '@/entities/testInteractive/ui/interactiveWindows/TestInputAnswer'


export function TestPage() {
  const dispatch = useDispatch()

  const { words, currentIndex } = useSelector((state: RootState) => state.testInteractive) as {
    words: QuestionsTest[]
    currentIndex: number
  }
  const total = words.length
  const current = currentIndex + 1

  const handlePageChange = useCallback(
    (_: React.ChangeEvent<unknown>, page: number) => {
      dispatch(setIndex(page - 1))
    },
    [dispatch],
  )

  const handleSelectAnswer = useCallback(
    (isCorrect: boolean | null, idQuestions: string) => {
      console.log('selectAnswer', {
        idQuestions,
        isCorrect,
      })
      dispatch(setOptionsIsChoice({ idQuestions }))
      if (current === total) {
        dispatch(setisShowSummary(true))
      } else {
        dispatch(setIndex(currentIndex + 1))
      }
    },
    [current, total, currentIndex, dispatch],
  )

  function renderTest() {
    switch (words[currentIndex].type) {
      case 'multiple_choice':
        return <TestChooseAnswer question={words[currentIndex]} onSelectAnswer={handleSelectAnswer} />
      case 'true_false':
        return <TestTrueFalse question={words[currentIndex]} onSelectTrueFalse={handleSelectAnswer} />
      case 'written':
        return <TestInputAnswer question={words[currentIndex]} onSelectAnswer={handleSelectAnswer} />
    }
  }

  return (
    <div className="mt-[50px]">
      <TitleCommon>Тест</TitleCommon>

      <TestPagination count={total} page={current} onChange={handlePageChange} />

      <div className={styles.flashcard}>{renderTest()}</div>
    </div>
  )
}
