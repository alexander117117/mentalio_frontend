import { AppDispatch } from '@/app/store/configureStore'
import { CreateWords } from '@/features/topic/CreateWordForm/lib/types'
import { UseFormSetValue, UseFormGetValues, UseFieldArrayAppend } from 'react-hook-form'
import { handleAddTranslate } from './addTranslate'

export interface handleAddTranslatedWordProps {
  setValue: UseFormSetValue<CreateWords>
  getValues: UseFormGetValues<CreateWords>
  append: UseFieldArrayAppend<CreateWords>
  dispatch: AppDispatch
}
export const handleAddTranslatedWord = ({ setValue, getValues, append, dispatch }: handleAddTranslatedWordProps) => {
  const typedValue = getValues('typedWord')
  if (!typedValue) return
  handleAddTranslate({ word: typedValue, dispatch, append })
  setValue('typedWord', '')
}
