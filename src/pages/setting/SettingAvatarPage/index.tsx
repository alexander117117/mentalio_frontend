import { TitleSetting } from '@/shared/ui/titles/TitleSetting'
import { settingLayout } from '@/shared/lib/classNames'
import { ButtonSelectAvatar } from '@/shared/ui/buttons/ButtonSelectAvatar'
import { AvatarChoosing } from '@/features/chosenAvatar/ui/AvatarChoosing'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/app/store/configureStore'
import { useState } from 'react'
import { avatarItem } from '@/shared/constants/avatarItem'
import { AvatarItem } from '@/pages/auth/RegisterPage/hooks/useManageSelection'
import { setSelectedAvatar } from '@/features/chosenAvatar/chosenAvatarSlice'
import SliderAvatarOnPhone from '@/pages/auth/UI/SliderAvatarOnPhone'
export function SettingAvatarPage() {
  const userAvatar = useSelector((state: RootState) => state.auth.user?.avatar)
  
  const [avatars, setAvatars] = useState<AvatarItem[]>(() => {
    return avatarItem.map((item) => ({
      ...item,
      chosen: item.avatar === userAvatar,
    }))
  })

  const dispatch = useDispatch<AppDispatch>()

  const handleAvatarSelect = (id: number) => {
    const updated = avatars.map((item) => ({
      ...item,
      chosen: item.id === id,
    }))
    setAvatars(updated)

    const chosen = updated.find((item) => item.chosen)
    if (chosen) {
      dispatch(setSelectedAvatar(chosen.avatar))
    }
  }
  return (
    <div className={settingLayout}>
      <TitleSetting>Аватар</TitleSetting>

      <AvatarChoosing />

      <div className="w-full block xs:hidden">
        <SliderAvatarOnPhone avatar={avatars} handleAvatarSelect={handleAvatarSelect} />
      </div>

      <ButtonSelectAvatar />
    </div>
  )
}
