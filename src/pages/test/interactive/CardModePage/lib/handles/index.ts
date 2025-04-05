import { AppDispatch } from '@/app/store/configureStore'
import { setisShowSummary } from '@/entities/testInteractive/store/slice'
import { SwiperClass } from 'swiper/react'

export const handleFinish = ({ dispatch }: { dispatch: AppDispatch }) => {
  dispatch(setisShowSummary(true))
}

export const handleSwiperPrev = ({ swiperRef }: { swiperRef: React.MutableRefObject<SwiperClass | null> }) => {
  swiperRef.current?.slidePrev()
}
export const handleSwiperNext = ({ swiperRef }: { swiperRef: React.MutableRefObject<SwiperClass | null> }) => {
  swiperRef.current?.slideNext()
}
