import { Sider } from '@/widgets/Sider'
import { Outlet } from 'react-router'
import { MiniNavbar } from 'src/widgets/MiniNavbar'

export function LayoutMain() {
  return (
    <main>
      <div className={`flex items-start pr-0 sm:pr-[30px] pb-24 md:pb-0 relative`}>
        <Sider />

        <div className="w-full sm:w-auto sm:flex-1 mx-7 sm:ml-12 xl:ml-[60px] mt-5 sm:mt-[60px] pb-5">
          <Outlet />
        </div>

        <MiniNavbar />
      </div>
    </main>
  )
}
