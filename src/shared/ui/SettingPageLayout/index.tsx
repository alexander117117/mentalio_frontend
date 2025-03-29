import { TitleSetting } from "@/shared/ui/titles/TitleSetting";
import { ButtonReturnSetting } from "@/shared/ui/buttons/ButtonReturnSetting";

interface SettingPageLayoutProps {
  img: string
  circle?: boolean
  title: string
}
export function SettingPageLayout({ img, circle, title }: SettingPageLayoutProps) {
  return (
    <>
      <div className="relative w-full text-center">
        <ButtonReturnSetting />
        <TitleSetting>Аккаунт Mentalio</TitleSetting>
      </div>
      
      <div className="w-full flex flex-col items-center">
        <img src={img} alt="image" className={`w-[100px] sm:w-[200px] aspect-square object-cover mb-[10px] ` + (circle ? 'rounded-full' : 'rounded-[50px]')}/>
        <p className="text-lg sm:text-3xl font-bold text-center">{title}</p>
      </div>
    </>
  )
}