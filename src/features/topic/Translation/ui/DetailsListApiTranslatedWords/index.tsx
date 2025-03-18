import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { AppDispatch, RootState } from '@/app/store/configureStore'
import { apiTranslatedWords } from '@/entities/folder/lib/types'
import { handleAddTranslate } from '../../lib/handles'
import { UseFieldArrayAppend } from 'react-hook-form'
import { CreateWords } from '@/features/topic/CreateWordForm/lib/types'

interface DetailsListApiTranslatedWordsProps {
  append: UseFieldArrayAppend<CreateWords>
}

export function DetailsListApiTranslatedWords({ append }: DetailsListApiTranslatedWordsProps) {
  const dispatch = useDispatch<AppDispatch>()
  const { apiTranslatedWords } = useSelector((state: RootState) => state.userTopic)

  const [translations, setTranslations] = useState<apiTranslatedWords>([])

  useEffect(() => {
    setTranslations(apiTranslatedWords)
  }, [apiTranslatedWords])

  const handleAdd = (word: string) => {
    handleAddTranslate({ word, dispatch, append })
  }

  if (!translations.length) {
    return null
  }

  return (
    <details className="mt-2">
      <summary className="cursor-pointer">Предложения Google Translate:</summary>
      <ul className="pl-5 list-disc">
        {translations.map((item, index) => (
          <li key={index}>
            <button
              type="button"
              onClick={() => handleAdd(item.translatedWord)}
              className="underline text-blue-600 hover:text-blue-400 transition-colors"
            >
              {item.translatedWord}
            </button>
          </li>
        ))}
      </ul>
    </details>
  )
}
