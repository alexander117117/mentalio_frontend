import { FaPlus } from 'react-icons/fa6'

export function ButtonSelectAvatar() {
  return (
    <button className="w-[90%] sm:w-[650px] bg-[#E7E7E7] h-[60px] sm:h-[80px] rounded-[20px] text-black flex items-center justify-between px-5 text-base sm:text-lg">
      <span>Выбрать</span>
      <div className="bg-[#DEF3DD] h-[30px] sm:w-[50px] aspect-square inline-flex items-center justify-center rounded-[10px]">
        <FaPlus />
      </div>
    </button>
  )
}
