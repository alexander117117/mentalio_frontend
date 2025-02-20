import { Link } from 'react-router'
import { ShowFolders } from '@/widgets/ShowFolders'
import { ListCard } from '@/features/pagination/ui/ListCard'
import { useSelector } from 'react-redux'
import { useGetCards } from './hooks/useGetCards'

export const HomePage = () => {
  const { cardsHome } = useSelector((state: any) => state.catalog)

  useGetCards()

  return (
    <>
      <ShowFolders />

      <div className="w-full sm:w-[98%] 2xl:w-[1440px] mt-[50px] md:mt-[90px]">
        <h1 className="text-2xl lg:text-[56px] 2xl:text-[64px] font-bold">Каталог папок</h1>

        <div className="w-full sm:w-[95%] 2xl:w-[99%] flex justify-between items-center">
          <span className="text-xs sm:text-xl font-normal text-[#636363]">Подобрано для Вас</span>
          <Link
            to={'/catalog'}
            className="inline-block py-0 xs:py-[12px] px-0 xs:px-[18px] xs:bg-[#36E326] rounded-[10px] text-xs sm:text-base"
          >
            Смотреть все
          </Link>
        </div>

        <div className="flex items-center justify-between 2xl:justify-normal flex-wrap mt-[15px] sm:mt-[40px] 2xl:gap-x-[90px] gap-y-2 sm:gap-y-[40px] pr-3 sm:pr-0">
          <ListCard cards={cardsHome} />
        </div>
      </div>
    </>
  )
}
