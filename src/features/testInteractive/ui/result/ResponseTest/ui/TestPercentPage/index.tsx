import { useSelector } from 'react-redux'
import { ButtonBack } from '@/shared/ui/buttons/ButtonBack'
import { CircleProgressBar } from '@/shared/ui/CircleProgressBar'
import { selectTestAnalytics } from '@/entities/testAnalytics/testAnalyticsSlice'

interface TestPercentPageProps {
  handleTryAgain: () => void
  setResponseRenderingLevel: (e: number) => void
}
export function TestPercentPage({ setResponseRenderingLevel, handleTryAgain }: TestPercentPageProps) {
  const { percent } = useSelector(selectTestAnalytics)
  const handleResponseRenderingLevel = () => {
    setResponseRenderingLevel(1)
  }
  return (
    <>
      <ButtonBack />
      <div className="flex flex-col items-center justify-center gap-6 p-8 h-screen relative container mx-auto sm:px-0 px-2">

        <h1 className="text-3xl sm:text-5xl font-bold tracking-wider text-center font-unbounded whitespace-nowrap mt-7">
          Вы набрали {percent}%
        </h1>

        <CircleProgressBar percent={percent} />
        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-[10px] sm:gap-5">
          <button
            onClick={handleTryAgain}
            className={`py-4 sm:py-5 w-[300px] rounded-[15px] text-white text-sm sm:text-xl text-center
            ${percent > 59 ? 'bg-primary' : percent >= 25 ? 'bg-bgYellow' : 'bg-bgRed'}`}
          >
            Попробовать снова
          </button>
          <button
            onClick={handleResponseRenderingLevel}
            className="py-4 sm:py-5 bg-[#DEF3DD] w-[300px] rounded-[15px] text-sm sm:text-xl text-center"
          >
            Посмотреть ответы
          </button>
        </div>
      </div>
    </>
  )
}
