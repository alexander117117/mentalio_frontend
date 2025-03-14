import styles from "../../index.module.css"
import { voice } from "@/shared/assets/images"
export function CardItem() {
  return (
    <div className={styles.scene}>
      <div className={styles.card + ' '} onClick={(e) => {e.currentTarget.classList.toggle(styles.cardIsFlipped)}}>
        <div className={`${styles.cardFace} ${styles.cardFaceFront}`}>
          <div className={`${styles.cardFaceFrontTitle} `}>
            Articulación
          </div>

          <img src="https://s3-alpha-sig.figma.com/img/c8ba/b8b9/45e03f4e062d80706230adf33d2507a0?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gfjf4y2agzevctFNsmwGTd3yaAbvr8PVXp0MYVAHWqsa~gNCue-xTyzNSeIwiuhUejdKnO6ntYRkEs5xxfB59P-qgcEBZYsWdilIYHJL6ddw89xYH2iwk3Sq5NGospF~jtlqZkf8dZ~pdCi0f8NfqI4wadkH1cgESh0G6Q-u-nduuA~shbyobduEWTgA-RN866VjNl~jsrqPr5m88WqjyV14P3TNKwKlGLDyQ8oAJpWhWC5uYb4tIy-TDL~ftrtpcHNdtFULQewhg0I48-6wMq88xB3rOUv~vmZN9lHqUa0r9b5zm1NP4s6yEF9qkaLWpj8UkGnIT9Vgg5zVCJ5Alw__" alt="" className={styles.cardFaceFrontImg}></img>


          <div className="flex justify-center">
            <img
              src={voice}
              alt=""
              className={styles.cardFaceFrontVoice}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>

        
        <div className={`${styles.cardFace} ${styles.cardFaceBack}`}>
          Сустав
        </div>
      </div>
    </div>
  )
}