import { TestAnalytic } from '@/widgets/test/TestAnalytic'
import styles from './index.module.css'
export function TestResultPage() {
  return (
    <div className={styles.testResultPage}>
      <h1 className={styles.testResultPage__title}>
        Тест <span className={styles.testResultPage__titleSpan}>16/20</span>
      </h1>
      <div className={styles.testResultPage__content}>
        <TestAnalytic />
        <TestAnalytic />
        <TestAnalytic wrong={true} />
      </div>
    </div>
  )
}
