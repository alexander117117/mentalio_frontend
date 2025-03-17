import { OptionButtons } from '@/features/OptionButtons'
import styles from '@/shared/lib/classNames/index.module.css'

export function TestChooseAnswer() {
  const testData = [
    {
      title: 'Articulacióndddddddddddddddd',
      isCorrect: true
    },
    {
      title: 'Articulacióndddddddddddddddd2',
      isCorrect: false
    },
    {
      title: 'Articulacióndddddddddddddddd3',
      isCorrect: false
    },
    {
      title: 'Articulacióndddddddddddddddd4',
      isCorrect: false
    },
  ]

  return (
    <>
      <div className={styles.flashcard__content}>
        <h1 className={styles.flashcard__title}>Сустав</h1>
        {/* <p className={styles.flashcard__subtitle }>Так держать!</p> */}
      </div>

      <OptionButtons data={testData} />
    </>
  )
}
