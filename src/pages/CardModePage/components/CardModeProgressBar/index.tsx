import styles from '../../index.module.css'
export function CardModeProgressBar() {
  return (
    <div className={styles.contentProgressBar}>
      <div className={styles.contentProgressBarTop}></div>
      <div className={styles.contentProgressBarBottom} style={{ width: '50%' }}></div>
    </div>
  )
}
