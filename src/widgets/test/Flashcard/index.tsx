import { ProgressBar } from '@/shared/ui/ProgressBar'
import styles from '@/shared/lib/classNames/index.module.css'
import { TestChooseAnswer } from '../../../entities/test/ui/interactiveWindows/TestChooseAnswer'
interface FlashcardProps {
  isTest?: boolean
}
export function Flashcard({ isTest = false }: FlashcardProps) {
  return (
    <div className={styles.flashcard}>
      {!isTest && <ProgressBar current={5} total={10} percent={'50'} />}

      <TestChooseAnswer />
      {/* <TestTrueFalse /> */}
      {/* <TestInputAnswer /> */}
    </div>
  )
}
