import style from "../../index.module.css"
import { WordAction } from "../WordAction"
interface WordProps{
  original: string,
  translate: string
}
export function Word({ original, translate }: WordProps){
  return (
    <div className={style.word_card}>
      <div className="flex flex-col gap-2">
        <span>{original}</span>
        <span>{translate}</span>
      </div>

      <WordAction />
    </div>
  )
}