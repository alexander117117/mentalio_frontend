import { TitleSetting } from "@/shared/ui/titles/TitleSetting";

interface SettingPageLayoutProps {
  img: string
  circle?: boolean
  title: string
}
export function SettingPageLayout({ img, circle, title }: SettingPageLayoutProps) {
  return (
    <>
      <TitleSetting>Аккаунт Mentalio</TitleSetting>
      
      <div className="w-full flex flex-col items-center">
        <img src={img} alt="" className={`w-[100px] sm:w-[200px] aspect-square object-cover mb-[10px] ` + (circle ? 'rounded-full' : 'rounded-[50px]')}/>
        <p className="text-lg sm:text-3xl font-bold text-center">{title}</p>
      </div>
    </>
  )
}