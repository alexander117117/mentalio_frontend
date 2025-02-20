import { CardsWordsItem } from '@/entities/folder/lib/types'

interface ListWordPublicProps {
  cards: CardsWordsItem[]
}
export function ListWordPublic({ cards }: ListWordPublicProps) {
  return (
    <ul className="w-full h-full">
      {cards.length > 0 ? (
        cards.map((card) => (
          <li key={card.id}>
            {card.word}
            {card.translate}
          </li>
        ))
      ) : (
        <h1>Слов нет</h1>
      )}
    </ul>
  )
}
