import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCreatedWord, clearError, translateWord } from '@/entities/topic/model/store'
import { AppDispatch, RootState } from '@/app/store/configureStore'
import { useCreateWordForm } from './model/hooks/useCreateWordForm'
import { handleOnSubmit } from './lib/handles'
import { TranslationSearch } from '../TranslationSearch'
import { Translation } from '../Translation'

export function CreateWordForm() {
  const dispatch = useDispatch<AppDispatch>()

  const { error, mapId, sourceLanguage, targetLanguage, createdWord } = useSelector(
    (state: RootState) => state.userTopic,
  )
  const { idTopic } = mapId

  const [serverErrorMessage, setServerErrorMessage] = useState('')

  // Инициализация формы
  const { reset, handleSubmit, append, register, errors, setValue, remove, getValues, fields, watch } =
    useCreateWordForm()

  // Автоперевод, если пользователь ввел слово
  useEffect(() => {
    if (createdWord.sourceWord && sourceLanguage && targetLanguage) {
      dispatch(
        translateWord({
          sourceLanguage,
          sourceWord: createdWord.sourceWord,
          targetLanguage,
        }),
      )
    }
  }, [sourceLanguage, targetLanguage, createdWord.sourceWord, dispatch])

  // Очистка ошибок при монтировании
  useEffect(() => {
    dispatch(clearError())
  }, [dispatch])

  // Если пользователь редактирует карточку, подставляем данные в форму
  useEffect(() => {
    if (createdWord.isEdit) {
      setServerErrorMessage('')
      dispatch(clearCreatedWord())
      reset()
      setValue('sourceWord', createdWord.sourceWord)
      setValue('translated_words', createdWord.translated_words)
      setValue('translatedImg', createdWord.translatedImg)
      setValue('isEdit', createdWord.isEdit)
      if (createdWord.id) {
        setValue('id', createdWord.id)
      }
      if (createdWord.translatedImg) {
        setValue('translatedImg', createdWord.translatedImg)
      }
    }
  }, [createdWord.isEdit])

  return (
    <form
      onSubmit={handleSubmit((data) =>
        handleOnSubmit({
          data,
          setServerErrorMessage,
          reset,
          dispatch,
          idTopic,
        }),
      )}
    >
      <TranslationSearch watch={watch} register={register} errorForm={errors} />
      <Translation
        serverErrorMessage={serverErrorMessage}
        register={register}
        errors={errors}
        errorStore={error}
        setValue={setValue}
        fields={fields}
        append={append}
        remove={remove}
        getValues={getValues}
        watch={watch}
      />
    </form>
  )
}
