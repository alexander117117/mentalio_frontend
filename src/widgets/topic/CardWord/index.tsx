import style from './index.module.css'
import { CardWordAction } from '../../../features/topic/CardWordAction'
import { WordsItem } from '@/entities/folder/lib/types/folder'

interface CardWordProps {
  cardDetails: WordsItem
}

export function CardWord({ cardDetails }: CardWordProps) {
  const { sourceWord, translated_words, chosen } = cardDetails

  return (
    <div className={style.word_card}>
      <div className="flex flex-col gap-2">
        <span className="font-semibold">{sourceWord}</span>

        <div>
          {translated_words.length ? (
            translated_words.map((item) => (
              <span key={item.id} className="opacity-60 mr-2">
                {item.translatedWord}
              </span>
            ))
          ) : (
            <span className="text-sm text-gray-400">Нет перевода</span>
          )}
        </div>
      </div>

      <CardWordAction favorite={chosen} cardDetails={cardDetails} />
    </div>
  )
}
