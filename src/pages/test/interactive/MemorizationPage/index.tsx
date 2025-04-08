import { RootState } from '@/app/store/configureStore'
import { TestChooseAnswer } from '@/entities/testInteractive/ui/interactiveWindows/TestChooseAnswer'
import { setIndex, setisShowSummary, setOptionsIsChoice } from '@/entities/testInteractive/store/slice'
import { QuestionsTest } from '@/entities/testInteractive/types/types'
import styles from '@/shared/lib/classNames/index.module.css'
import { ProgressBar } from '@/shared/ui/ProgressBar'
import { TitleCommon } from '@/shared/ui/titles/TitleCommon'
import { useMemo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export function MemorizationPage() {
  const dispatch = useDispatch()

  const { words, currentIndex } = useSelector((state: RootState) => state.testInteractive) as {
    words: QuestionsTest[]
    currentIndex: number
  }
  const total = words.length
  const current = currentIndex + 1

  const percent = useMemo(() => {
    if (total === 0) return 0
    return (currentIndex / total) * 100
  }, [currentIndex, total])

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

  return (
    <>
      <div className="mt-[50px]">
        <TitleCommon>Заучивание</TitleCommon>

        <div className={styles.flashcard}>
          <ProgressBar current={current} total={total} percent={percent} />
          <TestChooseAnswer question={words[currentIndex]} onSelectAnswer={handleSelectAnswer} />
        </div>
      </div>
    </>
  )
}
