import { ReactComponent as CloseIcon } from '@/shared/assets/images/assets/close_icon.svg?react'
import styles from './index.module.css'

interface ButtonDeleteProps {
  handeleOnClick: () => void
  classNameSWG?: string
}
export function ButtonDelete({ classNameSWG, handeleOnClick }: ButtonDeleteProps) {
  return (
    <button type="button" className={`${styles.className}`} onClick={handeleOnClick}>
      <CloseIcon className={classNameSWG} title="delete topic" />
    </button>
  )
}
