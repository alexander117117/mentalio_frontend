import { ReactNode } from 'react'
import style from './index.module.css'

interface ButtonAddWordTranslateProps {
  children: ReactNode
  className?: string
}

export function ButtonAddWordTranslate({ children, className = '' }: ButtonAddWordTranslateProps) {
  return (
    <button type="submit" className={`${style.button_add_word_translate} ${className}`}>
      {children}
    </button>
  )
}
