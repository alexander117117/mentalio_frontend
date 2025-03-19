import {
  UseFormRegister,
  FieldErrors,
  UseFormSetValue,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  UseFormGetValues,
} from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

import { Panel } from '@/shared/ui/Panel'
import { LabelTranslation } from '@/entities/topic/ui/LabelTranslation'
import { LanguageSelector } from '@/features/topic/LanguageSelector'
import { SimilarTerms } from '@/features/topic/Translation/ui/SimilarTerms'
import { DetailsListApiTranslatedWords } from '@/features/topic/Translation/ui/DetailsListApiTranslatedWords'
import { ButtonAddWordTranslate } from '@/features/topic/Translation/ui/ButtonAddWordTranslate'
import { ButtonAddFile } from '@/shared/ui/buttons/ButtonAddFile'
import { TextError } from '@/shared/ui/TextError'

import { handleAddTranslate } from './lib/handles'
import { clearCreatedWord, setTargetLanguage } from '@/entities/topic/model/store'
import { AppDispatch, RootState } from '@/app/store/configureStore'

import style from './index.module.css'
import { CreateWords, TranslatedWord } from '../CreateWordForm/lib/types'
import { validateNewUserTranslatedWord } from '../CreateWordForm/lib/validation'
import { InputTranslateSearch } from '@/entities/topic/ui/InputTranslateSearch'

interface TranslationProps {
  serverErrorMessage: string
  register: UseFormRegister<CreateWords>
  errors: FieldErrors<CreateWords>
  errorStore: string | null
  setValue: UseFormSetValue<CreateWords>
  fields: TranslatedWord[]
  append: UseFieldArrayAppend<CreateWords>
  remove: UseFieldArrayRemove
  getValues: UseFormGetValues<CreateWords>
}

export function Translation({
  serverErrorMessage,
  register,
  errors,
  errorStore,
  setValue,
  fields,
  append,
  remove,
  getValues,
}: TranslationProps) {
  const dispatch = useDispatch<AppDispatch>()
  const { isEdit } = useSelector((state: RootState) => state.userTopic.createdWord)

  const handleAddLang = (lang: string) => {
    dispatch(setTargetLanguage(lang))
  }

  const handleCancelEdit = () => {
    setValue('typedWord', '')
    setValue('translated_words', [])
    setValue('sourceWord', '')
    dispatch(clearCreatedWord())
  }

  const handleAddTranslatedWord = () => {
    const typedValue = getValues('typedWord')
    if (!typedValue) return
    handleAddTranslate({ word: typedValue, dispatch, append })
    setValue('typedWord', '')
  }

  return (
    <div className="mt-[10px]">
      <Panel>
        <LanguageSelector primaryLang="en" onChangeLanguage={handleAddLang} />

        <LabelTranslation>Переводы:</LabelTranslation>

        <div className={style.translation_group}>
          <div className="flex gap-2">
            <InputTranslateSearch
              type="text"
              register={register('typedWord', validateNewUserTranslatedWord)}
              placeholder="Введите слово"
              isSmall={true}
            />

            <button
              type="button"
              className="h-[35px] sm:h-[24px] aspect-square border border-[#272727] rounded-[5px] text-primary text-2xl leading-[1rem] font-light"
              onClick={handleAddTranslatedWord}
            >
              +
            </button>
          </div>

          <SimilarTerms remove={remove} fields={fields} />
          <TextError errorMessage={errors.translated_words?.root?.message} />
          <DetailsListApiTranslatedWords append={append} />
        </div>

        <div className="flex items-center gap-3 mt-3 sm:mt-5">
          {isEdit ? (
            <div className="flex gap-3">
              <ButtonAddWordTranslate>Изменить</ButtonAddWordTranslate>
              <button
                className="px-4 py-2 rounded-md bg-gray-500 text-white hover:bg-gray-600 transition-colors duration-200 text-sm"
                type="button"
                onClick={handleCancelEdit}
              >
                Отменить изменения
              </button>
            </div>
          ) : (
            <ButtonAddWordTranslate>Добавить</ButtonAddWordTranslate>
          )}
          <ButtonAddFile />
        </div>

        <TextError errorMessage={serverErrorMessage || errorStore} />
      </Panel>
    </div>
  )
}
