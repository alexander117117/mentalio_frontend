import { cross_icon, edit_icon, favorite_word_icon, favorite_word_mark_icon } from '@/shared/assets/images'
import style from './lib/style/index.module.css'
import { onEdit, onToggleFavorite, onDelete } from './lib/handles'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/app/store/configureStore'
import { WordsItem } from '@/entities/folder/lib/types'

interface CardWordActionProps {
  favorite: boolean
  cardDetails: WordsItem
}

export function CardWordAction({ favorite, cardDetails }: CardWordActionProps) {
  const dispatch = useDispatch<AppDispatch>()
  const { mapId } = useSelector((state: RootState) => state.userTopic)
  const { idTopic } = mapId

  const handleEdit = () => {
    onEdit({ dispatch, cardDetails })
  }

  const handleToggleFavorite = () => {
    onToggleFavorite({ dispatch, cardDetails, idTopic })
  }

  const handleDelete = () => {
    onDelete({ dispatch, idCard: cardDetails.id, idTopic })
  }

  return (
    <div className={style.word_group_action}>
      <button type="button" aria-label="Редактировать слово" onClick={handleEdit} className="w-[24px] sm:w-auto">
        <img src={edit_icon} alt="Редактировать слово" />
      </button>

      <button
        type="button"
        aria-label={favorite ? 'Убрать из избранного' : 'Добавить в избранное'}
        onClick={handleToggleFavorite}
        className="w-[24px] sm:w-auto"
      >
        <img src={favorite ? favorite_word_mark_icon : favorite_word_icon} alt="Избранное" />
      </button>

      <button type="button" aria-label="Удалить слово" onClick={handleDelete} className="w-[24px] sm:w-auto">
        <img src={cross_icon} alt="Удалить слово" />
      </button>
    </div>
  )
}
