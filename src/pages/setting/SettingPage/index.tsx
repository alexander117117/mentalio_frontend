import { SiderSettingMenu } from '@/widgets/SiderSettingPage/components/SiderSettingMenu'

export const SettingPage = () => {
  return (
    <div className="flex flex-col items-center justify-start relative h-screen pt-28 sm:pt-16">
      <h1 className="text-5xl font-semibold">Настройки</h1>

      <div className="mt-10 w-[80%] sm:w-[30%]">
        <SiderSettingMenu />
      </div>
    </div>
  )
}
