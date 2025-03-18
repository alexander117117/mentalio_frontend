import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import debounce from 'lodash.debounce'
import { FieldErrors, UseFormRegister, WatchInternal } from 'react-hook-form'

import { InputTranslateSearch } from '@/entities/topic/ui/InputTranslateSearch'
import { LabelTranslation } from '@/entities/topic/ui/LabelTranslation'
import { Panel } from '@/shared/ui/Panel'
import { LanguageSelector } from '@/features/topic/LanguageSelector'
import { TextError } from '@/shared/ui/TextError'
import { setSourceLanguage, setSourceWord } from '@/entities/topic/model/store'
import { AppDispatch } from '@/app/store/configureStore'

import { CreateWords } from '../CreateWordForm/lib/types'
import { validateSourceWord } from '../CreateWordForm/lib/validation'

interface TranslationSearchProps {
  register: UseFormRegister<CreateWords>
  errorForm: FieldErrors<CreateWords>
  watch: WatchInternal<CreateWords>
}

export function TranslationSearch({ errorForm, register }: TranslationSearchProps) {
  const dispatch = useDispatch<AppDispatch>()

  const handleSearch = (searchTerm: string) => {
    dispatch(setSourceWord(searchTerm))
  }

  const debouncedFetchData = useCallback(
    debounce((value: string) => {
      handleSearch(value)
    }, 1000),
    [],
  )

  const handleAddLang = (lang: string) => {
    dispatch(setSourceLanguage(lang))
  }

  return (
    <Panel>
      <LanguageSelector primaryLang="ru" onChangeLanguage={handleAddLang} />

      <LabelTranslation>Введите слово:</LabelTranslation>
      <InputTranslateSearch
        register={register('sourceWord', validateSourceWord)}
        onChange={(e) => debouncedFetchData(e.target.value)}
        type="text"
        placeholder="Введите слово"
      />

      <TextError errorMessage={errorForm.sourceWord?.message} />
    </Panel>
  )
}
