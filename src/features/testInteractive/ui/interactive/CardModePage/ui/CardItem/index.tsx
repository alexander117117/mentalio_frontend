import { WordsItem } from '@/entities/folder/lib/types'
import styles from '../../index.module.css'

interface CardItemProps {
  cardData: WordsItem
}
export function CardItem({ cardData }: CardItemProps) {
  return (
    <div className={styles.scene}>
      <div
        className={styles.card}
        onClick={(e) => {
          e.currentTarget.classList.toggle(styles.cardIsFlipped)
        }}
      >
        <div className={`${styles.cardFace} ${styles.cardFaceFront}`}>
          <span className={`${styles.cardFaceFrontTitle} `}>{cardData.sourceWord}</span>
          {cardData.translatedImg && (
            <img src={cardData.translatedImg} alt="" className={styles.cardFaceFrontImg}></img>
          )}
        </div>

        <span className={`${styles.cardFace} ${styles.cardFaceBack}`}>
          {
            cardData?.translated_words && cardData.translated_words[0].translatedWord
          }
        </span>
      </div>
    </div>
  )
}
