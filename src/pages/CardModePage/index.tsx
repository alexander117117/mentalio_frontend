import styles from './index.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa6'

import { CardModeProgressBar } from './components/CardModeProgressBar'
import { CardItem } from './components/CardItem'
import { ButtonBack } from '@/shared/ui/buttons/ButtonBack'
import { MiniNavbar } from '@/widgets/MiniNavbar'
export function CardModePage() {
  const tempData: number[] = [1, 2, 3]
  return (
    <div className="container mx-auto flex justify-center pt-[90px] pb-28 relative">
      <ButtonBack />

      <div className={styles.content}>
        <div className={styles.contentTitle}>Термины B2</div>

        <CardModeProgressBar />

        <Swiper
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {tempData.map((item, index) => (
            <SwiperSlide key={index}>
              <CardItem />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom navigation buttons */}
        <div className="w-[50%] sm:w-[125%] flex items-center justify-between absolute bottom-0 sm:top-1/2 transform -translate-y-1/2 left-1/2 right-1/2 -translate-x-1/2 sm:-translate-x-0 sm:left-[-80px] z-30 sm:z-[0]">
          <div className="custom-prev">
            <FaAngleLeft className="text-xs sm:text-base" />
          </div>
          <div className="custom-next">
            <FaAngleRight className="text-xs sm:text-base" />
          </div>
        </div>
      </div>

      <MiniNavbar />
    </div>
  )
}
