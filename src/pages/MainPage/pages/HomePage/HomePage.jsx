import React, { useEffect, useState } from 'react'
import EmptyFolder from '../../components/EmptyFolder/EmptyFolder'
import NonEmptyFolder from '../../components/NonEmptyFolder/NonEmptyFolder'
import { Link } from 'react-router'
import ListCart from '../CatalogPage/component/ListCart'
import { useDispatch, useSelector } from 'react-redux'
import { getUserFiles } from '@/store/features/userFiles/userFilesThunks.js'

const HomePage = () => {
  const dispatch = useDispatch()
  const [carts, setCarts] = useState([
    {
      id: 1,
      userName: 'Mentalio',
      title: 'Папка 1',
      desc: 'Описание папки 1',
    },
    {
      id: 2,
      userName: 'Mentalio',
      title: 'Папка 2',
      desc: 'Описание папки 2',
    },
    {
      id: 3,
      userName: 'Mentalio',
      title: 'Папка 3',
      desc: 'Описание папки 3',
    },
    {
      id: 4,
      userName: 'Mentalio',
      title: 'Папка 4',
      desc: 'Описание папки 4',
    },
    {
      id: 5,
      userName: 'Mentalio',
      title: 'Папка 5',
      desc: 'Описание папки 5',
    },
    {
      id: 6,
      userName: 'Mentalio',
      title: 'Папка 6',
      desc: 'Описание папки 6',
    },
  ])
  const { files } = useSelector((state) => state.userFiles)
  useEffect(() => {
    dispatch(getUserFiles())
  }, [])
  // useCarts(useGetCarts())

  return (
    <>
      {!!files?.length ? ( // Проверяем, есть ли файлы
        <NonEmptyFolder files={files} />
      ) : (
        <EmptyFolder />
      )}

      {/* Каталог папок */}
      <div className="w-full sm:w-[98%] 2xl:w-[1440px] mt-[50px] md:mt-[90px]">
        <h1 className="text-2xl lg:text-[56px] 2xl:text-[64px] font-bold">Каталог папок</h1>

        <div className="w-full sm:w-[95%] 2xl:w-[99%] flex justify-between items-center">
          <span className="text-xs sm:text-xl font-normal text-[#636363]">Подобрано для Вас</span>
          <Link to={'/catalog'} className="inline-block py-0 xs:py-[12px] px-0 xs:px-[18px] xs:bg-[#36E326] rounded-[10px] text-xs sm:text-base">
            Смотреть все
          </Link>
        </div>

        <div className="flex items-center justify-between 2xl:justify-normal flex-wrap mt-[15px] sm:mt-[40px] 2xl:gap-x-[90px] gap-y-2 sm:gap-y-[40px] pr-3 sm:pr-0">
          <ListCart carts={carts} />
        </div>
      </div>
    </>
  )
}

export default HomePage
