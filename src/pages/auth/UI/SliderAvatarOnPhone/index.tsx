import React from 'react'
import { test } from 'src/shared/assets/images'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

interface SliderAvatarOnPhoneProps {
  avatar: any[]
  handleAvatarSelect: any
}
const SliderAvatarOnPhone = ({ avatar, handleAvatarSelect }: SliderAvatarOnPhoneProps) => {
  return (
    <>
      <Swiper slidesPerView={1.07} spaceBetween={10} className="mySwiper">
        {avatar.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={test}
              alt=""
              className="w-full h-[500px] object-cover rounded-[20px]"
              onClick={() => handleAvatarSelect(item.id)}
              style={{ border: item.chosen ? '2px solid green' : 'none' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
export default SliderAvatarOnPhone
