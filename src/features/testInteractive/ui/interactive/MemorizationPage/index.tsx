import { ProgressBar } from '@/shared/ui/ProgressBar'
import { TitleCommon } from '@/shared/ui/titles/TitleCommon'
import { TestChooseAnswer } from '@/features/testInteractive/ui/interactiveWindows/TestChooseAnswer'
import styles from '@/shared/lib/classNames/index.module.css'
import { useMemorizationInteractive } from '@/features/testInteractive/hooks/useMemorizationInteractive'

export function MemorizationPage() {
  const { words, currentIndex, handleSelectAnswer } = useMemorizationInteractive()

  return (
    <div className="mt-[50px]">
      <TitleCommon>Заучивание</TitleCommon>

      <div className={styles.flashcard}>
        <ProgressBar />
        {words[currentIndex] && <TestChooseAnswer question={words[currentIndex]} onSelectAnswer={handleSelectAnswer} />}
      </div>
    </div>
  )
}
