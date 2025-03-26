import { MiniNavbar } from "@/widgets/MiniNavbar";
import { SiderSettingPage } from "@/widgets/SiderSettingPage";
import { Outlet, useLocation } from "react-router";

export function LayoutSetting() {
  const location = useLocation()
  return (
    <main>
      <div className={`flex items-start pb-24 md:pb-0 relative`}>
        {
          location.pathname === '/settings' 
          ? 
          <>
            <div className="w-full sm:w-auto sm:flex-1">
              <Outlet />
            </div>
          </> 
          : 
            <>
              <SiderSettingPage />

              <div className="w-full sm:w-auto sm:flex-1 sm:ml-12 xl:ml-[60px] mt-5 sm:mt-[60px] pb-5">
                <Outlet />
              </div>

            </>
        }
        <MiniNavbar />
        
      </div>
    </main>
  )
}