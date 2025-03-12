import { OptionButtons } from "@/features/OptionButtons";
import { ProgressBar } from "@/shared/ui/ProgressBar";
import styles from "./index.module.css"
export function Flashcard() {
  return (
    <div className={styles.flashcard}>
      
      <ProgressBar current={5} total={10} percent={"50"}/>

      <div className={styles.flashcard__content}>
        <h2 className={styles.flashcard__title}>Сустав</h2>
        <p className={styles.flashcard__subtitle }>Так держать!</p>
      </div>

      <OptionButtons />
    </div>
  )
}