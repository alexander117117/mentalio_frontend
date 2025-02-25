import { cross_icon, edit_icon, favorite_word_icon } from "@/shared/assets/images";
import style from "../../index.module.css"
export function WordAction(){
  return (
    <div className={style.word_group_action}>
      <img src={edit_icon} alt="Редактировать Слово" className="cursor-pointer"/>
      <img src={favorite_word_icon} alt="Любимое Слово" className="cursor-pointer"/>
      <img src={cross_icon} alt="Удалить Слово" className="cursor-pointer"/>
    </div>
  )
}