import { cross_icon, edit_icon, favorite_word_icon, favorite_word_mark_icon } from '@/shared/assets/images'
import style from '../../index.module.css'
interface WordActionProps {
  favorite?: boolean
}
export function WordAction({ favorite = false }: WordActionProps) {
  return (
    <div className={style.word_group_action}>
      <img src={edit_icon} alt="Редактировать Слово" className="cursor-pointer w-[24px] sm:w-auto" />
      <img
        src={favorite ? favorite_word_mark_icon : favorite_word_icon}
        alt="Любимое Слово"
        className="cursor-pointer w-[24px] sm:w-auto"
      />
      <img src={cross_icon} alt="Удалить Слово" className="cursor-pointer w-[24px] sm:w-auto" />
    </div>
  )
}
