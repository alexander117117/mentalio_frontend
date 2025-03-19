import { AppDispatch } from '@/app/store/configureStore'
import { setTranslatedWord } from '@/entities/topic/model/store'
import { CreateWords } from '@/features/topic/CreateWordForm/lib/types'
import { UseFieldArrayAppend } from 'react-hook-form'

interface handleAddTranslateProps {
  word: string
  dispatch: AppDispatch
  append: UseFieldArrayAppend<CreateWords>
}
export const handleAddTranslate = ({ word, dispatch, append }: handleAddTranslateProps) => {
  append({
    id: String(Date.now()),
    translatedWord: word,
  })
  dispatch(setTranslatedWord(word))
}
