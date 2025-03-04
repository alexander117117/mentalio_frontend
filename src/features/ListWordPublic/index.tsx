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
            <span>{card.sourceWord}</span>
            <span className="opacity-50">{card.translatedWord}</span>
          </li>
        ))
      ) : (
        <h1 className="text-base">Слов нет</h1>
      )}
    </ul>
  )
}
