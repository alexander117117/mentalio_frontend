import { SettingPageLayout } from "@/shared/ui/SettingPageLayout";
import { lock_icon } from "@/shared/assets/images";
import { Dropdown } from "@/widgets/Dropdown";
import { FormSetting } from "@/shared/ui/form/FormSetting";
import { settingLayout, settingItemPage } from "@/shared/lib/classNames";
import { ReactComponent as ChangeNameIcon } from '@/shared/assets/images/assets/change_name_icon.svg?react'

export function SettingSecurityPage() {
  return (
    <div className={settingLayout}>
          
      <SettingPageLayout img={lock_icon} title={"latavin@yandex.ru"}/>

      <div className={settingItemPage}>
        <Dropdown title={'Email'} svgImg={<ChangeNameIcon />}>
          <FormSetting type={"email"} value={"latavin@yandex.ru"}/>
        </Dropdown>

        <Dropdown title={'Пароль'} svgImg={<ChangeNameIcon />}>
          <FormSetting type={"password"} value={"dddd"}/>
        </Dropdown>
      </div>
    </div>
  )
}