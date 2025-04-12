import { ButtonLogout } from '@/shared/ui/buttons/ButtonLogout'
import { SiderSettingMenu } from '@/widgets/SiderSettingPage/components/SiderSettingMenu'

export const SettingPage = () => {
  return (
    <div className="flex flex-col items-center justify-start relative h-screen pt-5 sm:pt-16 overflow-hidden">
      <h1 className="text-5xl font-semibold">Настройки</h1>

      <div className="mt-10 w-[80%] sm:w-[30%]">
        <SiderSettingMenu />
      </div>


      <div className="sm:mt-10 w-[80%] sm:w-[30%] absolute top-[70%]">
        <ButtonLogout>Выход из аккаунта</ButtonLogout>
      </div>
    </div>
  )
}
