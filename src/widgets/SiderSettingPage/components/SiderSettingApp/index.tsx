import { RiArrowLeftSLine } from "react-icons/ri";
import { SiderSettingMenu } from "../SiderSettingMenu";
import { Link } from "react-router";

export function SiderSettingApp() {
  return (
    <nav>
      <aside className={`w-[250px] xl:w-[285px] h-[100vh] bg-[#F6F6F6] pt-[33px] pl-[25px] pr-[15px] fixed z-[10]`}>
        
        <Link to={'/settings'} className="flex items-center gap-[25px]">
          <RiArrowLeftSLine className="text-3xl text-primary cursor-pointer"/>
          <span className="text-xl font-semibold">Настройки</span>
        </Link>

        <div className="mt-[63px]">
          <SiderSettingMenu />
        </div>
      </aside>
    </nav>
  )
}