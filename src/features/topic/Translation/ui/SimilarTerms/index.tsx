import { TranslatedWord } from '@/features/topic/CreateWordForm/lib/types'
import { TranslationWord } from '@/shared/ui/TranslationWord'
import { UseFieldArrayRemove } from 'react-hook-form'

interface SimilarTermsProps {
  fields: TranslatedWord[]
  remove: UseFieldArrayRemove
}

export function SimilarTerms({ fields, remove }: SimilarTermsProps) {
  return (
    <div className="mt-4">
      <p className="text-xs text-zinc-500 mb-2">Похожие варианты:</p>
      <div className="flex gap-2 flex-wrap">
        {fields.map((field, index) => (
          <TranslationWord key={field.id} word={field.translatedWord} remove={remove} index={index} />
        ))}
      </div>
    </div>
  )
}
