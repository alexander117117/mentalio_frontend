import style from "./index.module.css"
interface LabelTranslationProps {
  children: React.ReactNode
}
export function LabelTranslation({ children }: LabelTranslationProps) {
  return (
    <label className={style.label_translation}>{children}</label>
  )
}