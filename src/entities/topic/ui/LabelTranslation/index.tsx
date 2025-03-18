import style from './index.module.css'
import { ReactNode } from 'react'

interface LabelTranslationProps {
  children: ReactNode
}

export function LabelTranslation({ children }: LabelTranslationProps) {
  return <label className={style.label_translation}>{children}</label>
}
