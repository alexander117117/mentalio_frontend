import styles from './index.module.css'

interface ProgressBarProps {
  current: string | number
  total: string | number
  percent: string | number
}

export function ProgressBar({ current, total, percent }: ProgressBarProps) {
  return (
    <>
      <div className={styles.progressBar}>
        <div className={styles.progressBar__labels}>
          <span>{current}</span>
          <span>{total}</span>
        </div>
        <div className={styles.progressBar__track}>
          <div className={`absolute h-[3px] bg-primary`} style={{ width: `${percent}%` }}></div>
        </div>
      </div>
    </>
  )
}
