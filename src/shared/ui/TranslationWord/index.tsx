import { ButtonDelete } from '../ButtonDelete'
import { UseFieldArrayRemove } from 'react-hook-form'

interface TranslationWordProps {
  word: string
  remove?: UseFieldArrayRemove
  add?: (word: string) => void
  index?: number
}
export function TranslationWord({ word, remove, index, add }: TranslationWordProps) {
  return (
    <div className="relative cursor-pointer" onClick={add ? () => add(word) : undefined}>
      <div
        className={`px-3 py-1 rounded bg-popup text-sm border border-zinc-700 hover:bg-zinc-700 transition-colors ${add ? 'opacity-60' : 'opacity-100'}`}
      >
        {word}
      </div>

      {remove && <ButtonDelete classNameSWG="size-[1em]" handeleOnClick={() => remove(index!)} />}
    </div>
  )
}
