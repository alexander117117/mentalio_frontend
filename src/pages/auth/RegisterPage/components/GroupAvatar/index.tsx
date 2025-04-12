import SliderAvatarOnPhone from '@/pages/auth/UI/SliderAvatarOnPhone'
import PropTypes from 'prop-types'

interface GroupAvatarProps {
  avatar: any[]
  handleAvatarSelect: any
  isError: boolean
}
const GroupAvatar = ({ avatar, handleAvatarSelect, isError }: GroupAvatarProps) => {
  return (
    <>
      <div className="w-[95%] mx-auto 2xl:mx-0 2xl:w-full mt-[2.5rem]">
        <div className="text-[2rem] sm:text-[48px] font-[600] mb-[40px]">Выберите своего аватара</div>
        <div className="hidden sm:flex items-center flex-nowrap gap-[0.625rem] md:gap-[40px]">
          {avatar.map((item, index) => (
            <div
              className="w-full md:w[250px] lg:w-[430px] aspect-square rounded-full truncate cursor-pointer"
              key={index}
              onClick={() => handleAvatarSelect(item.id)}
              style={{ border: item.chosen ? '2px solid green' : 'none' }}
            >
              <img
                src={'/images/' + item.avatar + '.png'}
                alt={'avatar ' + item.id}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <SliderAvatarOnPhone avatar={avatar} handleAvatarSelect={handleAvatarSelect} />
      {isError && (
        <div className="Error__text">
          <p
            className="
          text-[#FF0000] text-[12px] sm:text-[16px] font-[400] mt-[20px]
         "
          >
            Выберите один из аватаров
          </p>
        </div>
      )}
    </>
  )
}

GroupAvatar.propTypes = {
  avatar: PropTypes.array.isRequired,
  handleAvatarSelect: PropTypes.func.isRequired,
  isError: PropTypes.bool.isRequired,
}

export default GroupAvatar
