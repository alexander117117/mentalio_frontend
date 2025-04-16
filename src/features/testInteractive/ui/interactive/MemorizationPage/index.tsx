import { ProgressBar } from '@/shared/ui/ProgressBar'
import { TitleCommon } from '@/shared/ui/titles/TitleCommon'
import styles from '@/shared/lib/classNames/index.module.css'
import { useMemorizationInteractive } from '@/features/testInteractive/hooks/useMemorizationInteractive'
import { TestChooseAnswerMemorization } from '../../interactiveWindows/TestChooseAnswerMemorization'
import { QuestionsMultipleChoice } from '@/entities/testInteractive/types'
import { handleSelectAnswerMemorizationProps } from '@/entities/testInteractive/types/handleSelectAnswerProps'

export function MemorizationPage() {
  const { words, currentIndex, handleSelectAnswer } = useMemorizationInteractive() as {
    words: QuestionsMultipleChoice[]
    currentIndex: number
    handleSelectAnswer: (props: handleSelectAnswerMemorizationProps) => void
  }

  return (
    <div className="mt-[50px]">
      <TitleCommon>Заучивание</TitleCommon>

      <div className={styles.flashcard}>
        <ProgressBar />
        {words[currentIndex] && (
          <TestChooseAnswerMemorization question={words[currentIndex]} onSelectAnswer={handleSelectAnswer} />
        )}
      </div>
    </div>
  )
}
