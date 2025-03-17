import styles from '../../index.module.css'
import { voice } from '@/shared/assets/images'
import { test } from '@/shared/assets/images'
export function CardItem() {
  return (
    <div className={styles.scene}>
      <div
        className={styles.card + ' '}
        onClick={(e) => {
          e.currentTarget.classList.toggle(styles.cardIsFlipped)
        }}
      >
        <div className={`${styles.cardFace} ${styles.cardFaceFront}`}>
          <span className={`${styles.cardFaceFrontTitle} `}>Articulación</span>

          <img
            src={test}
            alt=""
            className={styles.cardFaceFrontImg}
          ></img>

          <div className="flex justify-center">
            <img src={voice} alt="" className={styles.cardFaceFrontVoice} onClick={(e) => e.stopPropagation()} />
          </div>
        </div>

        <span className={`${styles.cardFace} ${styles.cardFaceBack}`}>Сустав</span>
      </div>
    </div>
  )
}
