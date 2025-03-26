import { SiderSettingMenu } from "@/widgets/SiderSettingPage/components/SiderSettingMenu"
import { Link } from "react-router"

export const SettingPage = () => {
  return (
    <div className="flex flex-col items-center justify-start sm:justify-center bg-[#F1F1F1] h-screen w-screen relative pt-10 sm:pt-0">

      <Link 
        to={'/'}
        className="absolute top-5 left-5 p-5 bg-slate-400 rounded-xl text-white hidden md:block"
      >
        Главная
      </Link>

      <h1 className="text-5xl font-semibold">Настройки</h1>

      <div className="mt-10 w-[80%] sm:w-[30%]">
        <SiderSettingMenu />
      </div>
    </div>
  )
}
