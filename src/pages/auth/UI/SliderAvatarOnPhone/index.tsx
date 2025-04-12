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
      <div className="block sm:hidden">
        <Swiper slidesPerView={1.3} spaceBetween={10} className="mySwiper">
          {avatar.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                src={'/images/' + item.avatar + '.png'}
                alt=""
                className="w-auto aspect-square object-cover rounded-full"
                onClick={() => handleAvatarSelect(item.id)}
                style={{ border: item.chosen ? '2px solid green' : 'none' }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}
export default SliderAvatarOnPhone
