import { CardsWordsItem } from '@/entities/folder/lib/types'

interface ListWordPublicProps {
  cards: CardsWordsItem[]
}
export function ListWordPublic({ cards }: ListWordPublicProps) {
  return (
    <ul className="w-full h-full py-3 pl-4 bg-popup rounded-[10px] overflow-y-scroll flex flex-col gap-[10px]">
      {cards.length > 0 ? (
        cards.map((card) => (
          <li 
            className="flex items-center justify-between p-[10px] bg-[#353030] rounded-[10px]"
            key={card.id}
          >
            <span>{card.word}</span>
            <span>{card.translate}</span>
          </li>
        ))
      ) : (
        <h1>Слов нет</h1>
      )}
    </ul>
  )
}
