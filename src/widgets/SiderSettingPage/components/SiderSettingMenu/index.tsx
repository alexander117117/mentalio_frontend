import { SiderSettingItem } from '../SiderSettingItem'
import { MenuSettingData } from './const'
export function SiderSettingMenu() {
  return (
    <div className="flex flex-col gap-[10px]">
      {MenuSettingData.map((item: any, index: number) => (
        <SiderSettingItem key={index} img={item.img} title={item.title} subtitle={item.subtitle} link={item.link} />
      ))}
    </div>
  )
}
