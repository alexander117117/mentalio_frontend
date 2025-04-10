import { test } from '@/shared/assets/images'
import { Dropdown } from '@/widgets/Dropdown'
import { ReactComponent as ChangeNameIcon } from '@/shared/assets/images/assets/change_name_icon.svg?react'
import { ButtonAvatar } from '@/shared/ui/buttons/ButtonAvatar'
import { FormSetting } from '@/shared/ui/form/FormSetting'
import { SettingPageLayout } from '@/shared/ui/SettingPageLayout'
import { settingLayout, settingItemPage } from '@/shared/lib/classNames'
import { AppDispatch, RootState } from '@/app/store/configureStore'
import { useDispatch, useSelector } from 'react-redux'
import { updateUserThunk } from '@/entities/user/model/store/auth/authThunks'
export function SettingAccountPage() {
  const dispatch = useDispatch<AppDispatch>()
  const avatar = useSelector((state: RootState) => state.auth.user?.avatar)
  const name = useSelector((state: RootState) => state.auth.user?.name)
  const user = useSelector((state: RootState) => state.auth.user)

  function handleSubmit(e: string) {
    if (!user) return
    dispatch(
      updateUserThunk({
        ...user,
        name: e,
      }),
    )
  }
  return (
    <div className={settingLayout}>
      <SettingPageLayout img={avatar ? '/images/' + avatar + '.png' : test} circle={true} title={name || ''} />

      <div className={settingItemPage}>
        <ButtonAvatar />

        <Dropdown title={'Имя'} svgImg={<ChangeNameIcon />}>
          <FormSetting type={'text'} initialValue={name || ''} onSubmit={handleSubmit} />
        </Dropdown>
      </div>
    </div>
  )
}
