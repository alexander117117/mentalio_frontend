import { TitleSetting } from "@/shared/ui/titles/TitleSetting";
import { test } from "@/shared/assets/images";
import { Dropdown } from "@/widgets/Dropdown";
import { avatar_icon, change_name_icon } from "@/shared/assets/images"
import { Link } from "react-router";
import { FaChevronRight } from "react-icons/fa6";

export function SettingAccountPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <TitleSetting>Аккаунт Mentalio</TitleSetting>

      <div className="text-center">
        <img src={test} alt="" className="w-[200px] aspect-square rounded-full object-cover mb-[10px]"/>
        <span className="text-3xl font-bold">Лев</span>
      </div>

      <div className="w-[90%] md:w-[650px] flex flex-col gap-5">
        <Link
          to={'/settings/avatar'} 
          className="flex items-center justify-between h-fit py-[15px] pl-[10px] pr-5 bg-[#E7E7E7] rounded-[20px] cursor-pointer overflow-hidden transition-all duration-300 ease-in-out"
        >
          <div className="flex items-center gap-5">
            <img src={avatar_icon} alt="" />
            <span className="text-[18px] font-medium">Аватар</span>
          </div>
          <FaChevronRight />
        </Link>

        <Dropdown img={change_name_icon} title={'Имя'}>
          <input 
            type="text" 
            className="w-full px-5 py-[15px] rounded-[20px] border-none outline-none" 
            value={'Лев'}
          />
        </Dropdown>
      </div>
    </div>
  )
}