import { useRef } from 'react'
import styles from './index.module.css'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa6'

import { CardModeProgressBar } from './ui/CardModeProgressBar'
import { CardItem } from './ui/CardItem'
import { handleFinish, handleSwiperNext, handleSwiperPrev } from './lib/handles'
import { useCardModeSlider } from './lib/hooks'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/app/store/configureStore'
import { WordsItem } from '@/entities/folder/lib/types'

export function CardModePage() {
  const dispatch = useDispatch<AppDispatch>()
  const swiperRef = useRef<SwiperClass | null>(null)
  const { isReachEnd, handleSlideChange, words, topicName, isInfinite } = useCardModeSlider()

  return (
    <div className={styles.content}>
      <div className={styles.contentTitle}>{topicName}</div>
      <CardModeProgressBar />
      <Swiper
        loop={isInfinite}
        modules={[Navigation]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}
        onSlideChange={handleSlideChange}
        className="mySwiper"
      >
        {words.map((item) => (
          <SwiperSlide key={item.id}>
            <CardItem cardData={item as WordsItem} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-[50%] sm:w-[125%] flex items-center justify-between absolute bottom-0 sm:top-1/2 transform -translate-y-1/2 left-1/2 right-1/2 -translate-x-1/2 sm:-translate-x-0 sm:left-[-80px] z-30 sm:z-[0]">
        <button className="custom-prev" onClick={() => handleSwiperPrev({ swiperRef })}>
          <FaAngleLeft className="text-xs sm:text-base" />
        </button>
        {isReachEnd || words.length === 1 ? (
          <button
            type="button"
            onClick={() => handleFinish({ dispatch })}
            className="bg-primary py-2 px-4 rounded-lg text-white"
          >
            Завершить
          </button>
        ) : (
          <button className="custom-next" onClick={() => handleSwiperNext({ swiperRef })}>
            <FaAngleRight className="text-xs sm:text-base" />
          </button>
        )}
      </div>
    </div>
  )
}
