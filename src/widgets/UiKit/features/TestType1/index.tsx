import { OptionButtons } from '@/features/OptionButtons'
import styles from '@/shared/lib/classNames/index.module.css'

export function TestType1() {
  const testData = [
    'Articulacióndddddddddddddddd',
    'Articulacióndddddddddddddddd',
    'Articulacióndddddddddddddddd',
    'Articulacióndddddddddddddddd',
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
