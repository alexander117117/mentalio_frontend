import { AppDispatch } from '@/app/store/configureStore'
import { WordsItem } from '@/entities/folder/lib/types'
import { deleteCardFromTopic, updateCardInTopic, onEditCard } from '@/entities/topic/model/store'
import { Id } from '@/shared/types'

interface onEditParams {
  dispatch: AppDispatch
  cardDetails: WordsItem
}
export function onEdit({ dispatch, cardDetails }: onEditParams) {
  const onEdit: WordsItem = {
    isEdit: true,
    ...cardDetails,
  }
  dispatch(onEditCard(onEdit))
}

interface onToggleFavoriteParams {
  dispatch: AppDispatch
  cardDetails: WordsItem
  idTopic: Id
}
export function onToggleFavorite({ dispatch, idTopic, cardDetails }: onToggleFavoriteParams) {
  const updateCard: WordsItem = {
    ...cardDetails,
    chosen: !cardDetails.chosen,
  }
  dispatch(updateCardInTopic({ idTopic, cardData: updateCard }))
}
interface onDeleteParams {
  dispatch: AppDispatch
  idCard: Id
  idTopic: Id
}
export function onDelete({ dispatch, idTopic, idCard }: onDeleteParams) {
  dispatch(deleteCardFromTopic({ idTopic, idCard }))
}
