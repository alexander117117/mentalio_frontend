import { FaArrowRight } from 'react-icons/fa6'

export function TestType3() {
  return (
    <>
      <div className="flex items-center justify-center pt-[141px]">
        <span className="text-3xl sm:text-4xl text-center">Articulacion</span>
      </div>

      <div className="h-[50px] mt-[107px] sm:mt-[151px] px-0 sm:px-[28px] flex gap-[10px] sm:gap-3">
        <input
          type="text"
          className="w-full bg-[#DEF3DD] py-[13px] px-5 outline-none rounded-[10px] placeholder-[#878787]"
          placeholder="Введите ответ"
        />
        <button className="bg-primaryOpacity height-full w-[74px] sm:w-[131px] flex items-center justify-center rounded-[10px] text-white">
          <FaArrowRight />
        </button>
      </div>
    </>
  )
}
