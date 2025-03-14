import { flag_icon } from '@/shared/assets/images'
import { Link } from 'react-router'
import { HiArrowLeft } from 'react-icons/hi2'

export function SummaryPage() {
  return (
    <>
      <div className="flex items-center justify-center h-screen relative">
        <Link
          to={'/my-folders'}
          className="absolute top-5 left-5 w-[60px] aspect-square bg-[#DEF3DD] rounded-[20px] inline-flex items-center justify-center"
        >
          <HiArrowLeft size={30} />
        </Link>

        <div className="flex flex-col items-center">
          <img src={flag_icon} alt="flag_icon" />
          <h1 className="text-2xl md:text-5xl font-unbounded font-bold mt-[10px] text-center">
            Поздравляем, у тебя отлично получается
          </h1>

          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-[10px] sm:gap-5">
            <Link
              to={'/my-folders'}
              className="py-4 sm:py-5 bg-[#DEF3DD] w-[300px] rounded-[15px] text-sm sm:text-xl text-center"
            >
              Вернуться в меню
            </Link>
            <Link
              to={'/'}
              className="py-4 sm:py-5 bg-primary w-[300px] rounded-[15px] text-white text-sm sm:text-xl text-center"
            >
              Следующий раунд
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
