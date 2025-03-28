import { useEffect } from 'react'
import { Sider } from '@/widgets/Sider'
import { Outlet } from 'react-router'
import { MiniNavbar } from 'src/widgets/MiniNavbar'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/app/store/configureStore.ts'
import { getAllCategoriesThunk, getUserFiles } from '@/entities/folder/model/store'

export function LayoutMain() {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(getAllCategoriesThunk())
    dispatch(getUserFiles())
  }, [])

  return (
    <main>
      <div className={`flex items-start pr-0 sm:pr-[30px] pb-24 md:pb-0 relative`}>
        <Sider />

        <div className="w-full sm:w-auto sm:flex-1 px-7 sm:ml-12 xl:ml-[60px] mt-5 sm:mt-[60px] pb-5">
          <Outlet />
        </div>

        <MiniNavbar />
      </div>
    </main>
  )
}
