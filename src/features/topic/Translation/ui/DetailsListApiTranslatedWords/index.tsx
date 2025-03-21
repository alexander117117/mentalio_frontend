import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { AppDispatch, RootState } from '@/app/store/configureStore'
import { apiTranslatedWords } from '@/entities/folder/lib/types'
import { handleAddTranslate } from '../../lib/handles'
import { UseFieldArrayAppend } from 'react-hook-form'
import { CreateWords } from '@/features/topic/CreateWordForm/lib/types'
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md'
import { TranslationWord } from '@/shared/ui/TranslationWord'

interface DetailsListApiTranslatedWordsProps {
  append: UseFieldArrayAppend<CreateWords>
}

export function DetailsListApiTranslatedWords({ append }: DetailsListApiTranslatedWordsProps) {
  const dispatch = useDispatch<AppDispatch>()
  const { apiTranslatedWords } = useSelector((state: RootState) => state.userTopic)

  const [translations, setTranslations] = useState<apiTranslatedWords>([])
  const [isOpen, setIsOpen] = useState(false)
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
    <details className="mt-2" open={isOpen} onToggle={() => setIsOpen(!isOpen)}>
      <summary className="details-summary flex items-center opacity-50 mb-2 cursor-pointer">
        <span className="text-sm">Google translate:</span>
        {isOpen ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
      </summary>
      <ul className="list-disc flex items-center gap-2">
        {translations.map((item, index) => (
          <TranslationWord key={index} word={item.translatedWord} add={handleAdd} />
        ))}
      </ul>
    </details>
  )
}
