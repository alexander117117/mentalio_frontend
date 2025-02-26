import style from './index.module.css'
interface ButtonAddWordTranslateProps {
  children: React.ReactNode
}
export function ButtonAddWordTranslate({ children }: ButtonAddWordTranslateProps) {
  return <button className={style.button_add_word_translate}>{children}</button>
}
