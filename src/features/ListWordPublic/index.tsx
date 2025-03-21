import { WordsItem } from '@/entities/folder/lib/types'

interface ListWordPublicProps {
  cards: WordsItem[]
}
export function ListWordPublic({ cards }: ListWordPublicProps) {
  return (
    <ul className="w-full h-full py-3 px-2 md:px-0 md:pl-4 bg-popup rounded-[10px] overflow-y-scroll flex flex-col gap-[10px]">
      {cards.length > 0 ? (
        cards.map((card) => (
          <li
            className="flex items-center justify-between p-[10px] bg-[#353030] rounded-[10px] text-xs md:text-base"
            key={card.id}
          >
            <span className="w-1/2 text-right truncate">{card.sourceWord}</span>
            {card.translated_words[0] && (
              <span className="opacity-50 w-1/2 text-right truncate">{card.translated_words[0].translatedWord}</span>
            )}
          </li>
        ))
      ) : (
        <h1 className="text-base">Слов нет</h1>
      )}
    </ul>
  )
}
