import { ReactComponent as CloseIcon } from '@/shared/assets/images/assets/close_icon.svg?react'
import styles from './index.module.css'

interface ButtonDeleteProps {
  idObject: number
  handeleOnClick: () => void
}
export function ButtonDelete({ handeleOnClick }: ButtonDeleteProps) {
  return (
    <button className={styles.className} onClick={handeleOnClick}>
      <CloseIcon title="delete topic" />
    </button>
  )
}
