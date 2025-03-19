import { AppDispatch } from '@/app/store/configureStore'
import { clearCreatedWord } from '@/entities/topic/model/store'
import { CreateWords } from '@/features/topic/CreateWordForm/lib/types'
import { UseFormSetValue } from 'react-hook-form'

export interface handleCancelEditProps {
  setValue: UseFormSetValue<CreateWords>
  dispatch: AppDispatch
}
export const handleCancelEdit = ({ setValue, dispatch }: handleCancelEditProps) => {
  setValue('typedWord', '')
  setValue('translated_words', [])
  setValue('sourceWord', '')
  setValue('translatedImg', '')
  dispatch(clearCreatedWord())
}
