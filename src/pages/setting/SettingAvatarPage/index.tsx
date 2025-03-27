import { TitleSetting } from "@/shared/ui/titles/TitleSetting"
import { settingLayout } from "@/shared/lib/classNames";
import { ButtonSelectAvatar } from "@/shared/ui/buttons/ButtonSelectAvatar";
import { AvatarChoosing } from "@/shared/ui/AvatarChoosing";

export function SettingAvatarPage() {
  return (
    <div className={settingLayout}>
      <TitleSetting>Аватар</TitleSetting>
      
      <AvatarChoosing />
      
      {/* <div className="w-[320px] block xs:hidden">
        <SliderAvatarOnPhone avatar={avatar} handleAvatarSelect={handleAvatarSelect} />
      </div> */}

      <ButtonSelectAvatar />
    </div>
  )
}