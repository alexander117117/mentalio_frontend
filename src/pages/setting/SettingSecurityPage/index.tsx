import { SettingPageLayout } from "@/shared/ui/SettingPageLayout";
import { change_name_icon, lock_icon } from "@/shared/assets/images";
import { Dropdown } from "@/widgets/Dropdown";
import { FormSetting } from "@/shared/ui/form/FormSetting";
import { settingLayout, settingItemPage } from "@/shared/lib/classNames";

export function SettingSecurityPage() {
  return (
    <div className={settingLayout}>
          
      <SettingPageLayout img={lock_icon} title={"latavin@yandex.ru"}/>

      <div className={settingItemPage}>
        <Dropdown img={change_name_icon} title={'Email'}>
          <FormSetting type={"email"} value={"latavin@yandex.ru"}/>
        </Dropdown>

        <Dropdown img={change_name_icon} title={'Пароль'}>
          <FormSetting type={"password"} value={"dddd"}/>
        </Dropdown>
      </div>
    </div>
  )
}