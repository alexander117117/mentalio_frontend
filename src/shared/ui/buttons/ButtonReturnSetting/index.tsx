import { RiArrowLeftWideLine } from "react-icons/ri";
import { Link } from "react-router";

export function ButtonReturnSetting() {
  return (
    <Link 
      to={'/settings'} 
      className="absolute left-6 top-1/2 transform -translate-y-1/2 flex md:hidden items-center text-settingMain"
    >
      <RiArrowLeftWideLine />

      <span className="text-xs">Настройки</span>
    </Link>
  )
}