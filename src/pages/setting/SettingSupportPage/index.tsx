import { support_icon } from "@/shared/assets/images";
import { settingItemPage, settingLayout } from "@/shared/lib/classNames";
import { SettingPageLayout } from "@/shared/ui/SettingPageLayout";
import { Dropdown } from "@/widgets/Dropdown";
import { ReactComponent as SupportIcon } from '@/shared/assets/images/assets/support_icon_1.svg?react'

export function SettingSupportPage() {
  return (
    <div className={settingLayout}>
      <SettingPageLayout img={support_icon} title={"Mentaliosupport@gmail.com"}/>

      <div className={settingItemPage}>

        <Dropdown title={'Поддержка'} svgImg={<SupportIcon />}>
          <span className="">hehe</span>
        </Dropdown>
      </div>
    </div>
  )
}