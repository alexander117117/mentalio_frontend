import style from "../../index.module.css"
import { WordAction } from "../WordAction"
interface WordProps{
  original: string;
  translate: string;
  favorite?: boolean
}
export function Word({ original, translate, favorite }: WordProps){
  return (
    <div className={style.word_card}>
      <div className="flex flex-col gap-2">
        <span>{original}</span>
        <span className="opacity-60">{translate}</span>
      </div>

      <WordAction favorite={favorite}/>
    </div>
  )
}