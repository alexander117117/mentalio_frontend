import { useCallback } from 'react'
import { TitleCommon } from '@/shared/ui/titles/TitleCommon'
import { TestPagination } from '@/features/TestPagination'
import { TestChooseAnswer } from '@/features/testInteractive/ui/interactiveWindows/TestChooseAnswer'
import { TestTrueFalse } from '@/features/testInteractive/ui/interactiveWindows/TestTrueFalse'
import { TestInputAnswer } from '@/features/testInteractive/ui/interactiveWindows/TestInputAnswer'
import { useTestInteractive } from '@/features/testInteractive/hooks/useTestInteractive'
import { setIndex } from '@/entities/testInteractive/store/slice'
import { useDispatch } from 'react-redux'
import styles from '@/shared/lib/classNames/index.module.css'

export function TestPage() {
  const dispatch = useDispatch()

  const { words, currentIndex, current, total, handleSelectAnswer } = useTestInteractive()

  const handlePageChange = useCallback(
    (_: React.ChangeEvent<unknown>, page: number) => {
      dispatch(setIndex(page - 1))
    },
    [dispatch],
  )

  function renderTest() {
    const question = words[currentIndex]
    if (!question) return null

    switch (question.type) {
      case 'multiple_choice':
        return <TestChooseAnswer question={question} onSelectAnswer={handleSelectAnswer} />
      case 'true_false':
        return <TestTrueFalse question={question} onSelectAnswer={handleSelectAnswer} />
      case 'written':
        return (
          <TestInputAnswer
            question={{
              ...question,
              correctAnswer: question.correctAnswer ?? '',
            }}
            onSelectAnswer={handleSelectAnswer}
          />
        )
      default:
        return null
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
