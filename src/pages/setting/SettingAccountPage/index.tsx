import { test } from "@/shared/assets/images";
import { Dropdown } from "@/widgets/Dropdown";
import { ReactComponent as ChangeNameIcon } from '@/shared/assets/images/assets/change_name_icon.svg?react'
import { ButtonAvatar } from "@/shared/ui/buttons/ButtonAvatar";
import { FormSetting } from "@/shared/ui/form/FormSetting";
import { SettingPageLayout } from "@/shared/ui/SettingPageLayout";
import { settingLayout, settingItemPage } from "@/shared/lib/classNames";
export function SettingAccountPage() {
  return (
    <div className={settingLayout}>
      
      <SettingPageLayout img={test} circle={true} title={"Лев"}/>

      <div className={settingItemPage}>
        <ButtonAvatar />

        <Dropdown title={'Имя'} svgImg={<ChangeNameIcon />}>
          <FormSetting type={"text"} value={"Лев"}/>
        </Dropdown>
      </div>
    </div>
  )
}