import { AppDispatch } from '@/app/store/configureStore'
import { CreateWord, updateCardInTopic } from '@/entities/topic/model/store/userTopicThunks'
import { CreateWords } from '@/features/topic/CreateWordForm/lib/types'
import { Id } from '@/shared/types'
import { clearCreatedWord } from '@/entities/topic/model/store'

interface HandleOnSubmitProps {
  data: CreateWords
  idTopic: Id
  setServerErrorMessage: (error: string) => void
  reset: () => void
  dispatch: AppDispatch
}

export const handleOnSubmit = async ({
  data,
  idTopic,
  setServerErrorMessage,
  reset,
  dispatch,
}: HandleOnSubmitProps) => {
  try {
    let res
    if (data?.isEdit) {
      res = await dispatch(updateCardInTopic({ idTopic, cardData: data }))
    } else {
      const cardData = {
        sourceWord: data.sourceWord,
        translated_words: data.translated_words,
        translatedImg: data.translatedImg ?? '',
        chosen: false,
      }
      res = await dispatch(CreateWord({ idTopic, cardData }))
    }

    if (res.meta?.requestStatus === 'fulfilled') {
      setServerErrorMessage('')
      dispatch(clearCreatedWord())
      reset()
    } else {
      setServerErrorMessage('Произошла ошибка, попробуйте позже')
    }
  } catch (error) {
    console.error('Ошибка при отправке запроса:', error)
    setServerErrorMessage('Произошла непредвиденная ошибка. Попробуйте позже.')
  }
}
