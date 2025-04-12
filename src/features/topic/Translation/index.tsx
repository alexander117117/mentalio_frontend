import { useState, useEffect } from 'react'
import {
  UseFormRegister,
  FieldErrors,
  UseFormSetValue,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  UseFormGetValues,
  WatchInternal,
} from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

import { Panel } from '@/shared/ui/Panel'
import { LabelTranslation } from '@/entities/topic/ui/LabelTranslation'
import { LanguageSelector } from '@/features/topic/LanguageSelector'
import { SimilarTerms } from '@/features/topic/Translation/ui/SimilarTerms'
import { DetailsListApiTranslatedWords } from '@/features/topic/Translation/ui/DetailsListApiTranslatedWords'
import { ButtonAddWordTranslate } from '@/features/topic/Translation/ui/ButtonAddWordTranslate'
import { ButtonAddFile } from '@/features/topic/Translation/ui/ButtonAddFile'
import { TextError } from '@/shared/ui/TextError'

import { handleAddTranslatedWord, handleCancelEdit, handleUpload } from './lib/handles'
import { AppDispatch, RootState } from '@/app/store/configureStore'

import style from './index.module.css'
import { InputTranslateSearch } from '@/entities/topic/ui/InputTranslateSearch'
import { CreateWords, TranslatedWord } from '../CreateWordForm/lib/types'
import { UploadProgress } from './ui/UploadProgress'
import { validateNewUserTranslatedWord } from '../CreateWordForm/lib/validation'
import { handleAddLang } from '@/entities/topic/lib/handles/addLang'
import { setTargetLanguage } from '@/entities/topic/model/store'

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
  watch: WatchInternal<CreateWords>
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
  watch,
}: TranslationProps) {
  const dispatch = useDispatch<AppDispatch>()
  const { isEdit } = useSelector((state: RootState) => state.userTopic.createdWord)

  const [uploadProgress, setUploadProgress] = useState(0)
  const [uploadedSize, setUploadedSize] = useState(0)
  const [totalSize, setTotalSize] = useState(0)
  const [uploadError, setUploadError] = useState<string | null>(null)

  const imageFile = watch('imageFile')

  useEffect(() => {
    if (!imageFile || imageFile.length === 0) return
    setUploadProgress(0)
    setUploadedSize(0)
    setTotalSize(0)
    setUploadError(null)

    const file = imageFile[0]
    handleUpload({
      file,
      setUploadedSize,
      setTotalSize,
      setUploadProgress,
      setUploadError,
      setValue,
    })
  }, [imageFile, setValue])

  return (
    <div className="mt-[10px]">
      <Panel>
        <LanguageSelector
          primaryLang="en"
          onChangeLanguage={(lang) => handleAddLang({ dispatch, lang, stateSave: setTargetLanguage })}
        />

        <LabelTranslation>Переводы:</LabelTranslation>

        <div className={style.translation_group}>
          <div className="flex gap-2">
            <InputTranslateSearch
              type="text"
              register={register('typedWord', validateNewUserTranslatedWord)}
              placeholder="Введите слово"
              isSmall
            />
            <button
              type="button"
              className="h-[35px] sm:h-[24px] aspect-square border border-[#272727] rounded-[5px] text-primary text-2xl leading-[1rem] font-light"
              onClick={() => handleAddTranslatedWord({ setValue, getValues, append, dispatch })}
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
                onClick={() => handleCancelEdit({ setValue, dispatch })}
              >
                Отменить изменения
              </button>
            </div>
          ) : (
            <ButtonAddWordTranslate>Добавить</ButtonAddWordTranslate>
          )}
          <ButtonAddFile registerFile={register('imageFile')} />

          {imageFile && imageFile.length > 0 && (
            <UploadProgress
              progress={uploadProgress}
              uploaded={uploadedSize}
              total={totalSize}
              error={uploadError}
              fileName={imageFile[0].name}
              fileType={imageFile[0].type.split('/').pop() || ''}
            />
          )}
        </div>

        <TextError errorMessage={serverErrorMessage || errorStore} />
      </Panel>
    </div>
  )
}
