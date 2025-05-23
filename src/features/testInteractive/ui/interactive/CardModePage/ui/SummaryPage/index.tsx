import { flag_icon } from '@/shared/assets/images'
import { Link, useNavigate } from 'react-router'

export function SummaryPage() {
  const navigate = useNavigate()
  return (
    <>
      <div className="flex items-center justify-center h-screen relative">
        <div className="flex flex-col items-center">
          <img src={flag_icon} alt="flag_icon" />
          <h1 className="text-2xl md:text-5xl font-unbounded font-bold mt-[10px] text-center">
            Поздравляем, у тебя отлично получается
          </h1>

          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-[10px] sm:gap-5">
            <Link to="/" className="py-4 sm:py-5 bg-[#DEF3DD] w-[300px] rounded-[15px] text-sm sm:text-xl text-center">
              Вернуться в меню
            </Link>
            <button
              onClick={() => navigate(-1)}
              className="py-4 sm:py-5 bg-primary w-[300px] rounded-[15px] text-white text-sm sm:text-xl text-center"
            >
              Следующий раунд
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
