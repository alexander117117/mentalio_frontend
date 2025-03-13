import { ProgressBar } from "@/shared/ui/ProgressBar";
import styles from "@/shared/lib/classNames/index.module.css"
import { TestType1 } from "../UiKit/features/TestType1";
import { TestType2 } from "../UiKit/features/TestType2";
import { TestType3 } from "../UiKit/features/TestType3";
interface FlashcardProps{
  isTest?: boolean
}
export function Flashcard({ isTest = false }: FlashcardProps) {


  return (
    <div className={styles.flashcard}>
      
      {!isTest && <ProgressBar current={5} total={10} percent={"50"}/>}
      
      <TestType1 />
      {/* <TestType2 /> */}
      {/* <TestType3 /> */}
    </div>
  )
}