import { Dispatch, SetStateAction } from 'react'
import { SwiperClass } from 'swiper/react'

export const handleFinish = ({ setIsShowSummary }: { setIsShowSummary: Dispatch<SetStateAction<boolean>> }) => {
  setIsShowSummary(true)
}

export const handleSwiperPrev = ({ swiperRef }: { swiperRef: React.MutableRefObject<SwiperClass | null> }) => {
  swiperRef.current?.slidePrev()
}
export const handleSwiperNext = ({ swiperRef }: { swiperRef: React.MutableRefObject<SwiperClass | null> }) => {
  swiperRef.current?.slideNext()
}
