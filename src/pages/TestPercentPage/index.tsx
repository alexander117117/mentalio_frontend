import { ButtonBack } from "@/shared/ui/buttons/ButtonBack";
import { CircleProgressBar } from "@/shared/ui/CircleProgressBar";
import { Link } from "react-router";

export function TestPercentPage() {
  const percent: number = 80
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-6 p-8 h-screen relative container mx-auto sm:px-0 px-2">
        <ButtonBack />

        <h1 className="text-3xl sm:text-5xl font-bold tracking-wider text-center font-unbounded whitespace-nowrap">Вы набрали 80%</h1>
        
        <CircleProgressBar percent={percent}/>

        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-[10px] sm:gap-5">
          <Link to={'/'} className={`py-4 sm:py-5 w-[300px] rounded-[15px] text-white text-sm sm:text-xl text-center ${percent > 59 ? 'bg-primary' : percent >= 25 ? 'bg-bgYellow' : 'bg-bgRed'}`}>Попробовать снова</Link>
          <Link to={'/test-result'} className="py-4 sm:py-5 bg-[#DEF3DD] w-[300px] rounded-[15px] text-sm sm:text-xl text-center">Посмотреть ответы</Link>
        </div>
      </div>
    </>
  )
}
