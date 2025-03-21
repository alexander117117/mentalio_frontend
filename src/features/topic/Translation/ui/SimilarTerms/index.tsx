import { TranslatedWord } from '@/features/topic/CreateWordForm/lib/types'
import { ButtonDelete } from '@/shared/ui/ButtonDelete'
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
          <div key={field.id} className="relative">
            <div className="px-3 py-1 rounded bg-popup text-sm border border-zinc-700 hover:bg-zinc-700 transition-colors">
              {field.translatedWord}
            </div>
            <ButtonDelete classNameSWG="size-[1em]" handeleOnClick={() => remove(index)} />
          </div>
        ))}
      </div>
    </div>
  )
}
