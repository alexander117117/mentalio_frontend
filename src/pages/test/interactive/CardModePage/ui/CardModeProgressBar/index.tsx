import { useSelector } from 'react-redux'
import { selectCurrentIndex, selectPreparedWords } from '@/entities/cardMode/store/selectors'
import styles from '../../index.module.css'
export function CardModeProgressBar() {
  const currentIndex = useSelector(selectCurrentIndex)
  const words = useSelector(selectPreparedWords)
  const totalCards = words.length
  const progress = totalCards === 0 ? 0 : ((currentIndex + 1) / totalCards) * 100

  return (
    <div className={styles.contentProgressBar}>
      <div className={styles.contentProgressBarTop}></div>
      <div className={styles.contentProgressBarBottom} style={{ width: `${progress}%` }}></div>{' '}
    </div>
  )
}
