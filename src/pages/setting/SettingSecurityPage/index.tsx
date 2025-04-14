import { SettingPageLayout } from '@/shared/ui/SettingPageLayout'
import { lock_icon } from '@/shared/assets/images'
import { Dropdown } from '@/widgets/Dropdown'
import { FormSetting } from '@/shared/ui/form/FormSetting'
import { settingLayout, settingItemPage } from '@/shared/lib/classNames'
import { ReactComponent as ChangeNameIcon } from '@/shared/assets/images/assets/change_name_icon.svg?react'
import { AppDispatch, RootState } from '@/app/store/configureStore'
import { useDispatch, useSelector } from 'react-redux'
import { User } from '@/entities/user/lib/types'
import { deleteUserThunk, updateUserThunk } from '@/entities/user/model/store/auth/authThunks'
import { ButtonLogout } from '@/shared/ui/buttons/ButtonLogout'

export function SettingSecurityPage() {
  const dispatch = useDispatch<AppDispatch>()
  const { email } = useSelector((state: RootState) => state.auth.user) as User
  const user = useSelector((state: RootState) => state.auth.user)

  function handleSubmit(e: string) {
    if (!user) return
    dispatch(
      updateUserThunk({
        ...user,
        email: e,
      }),
    )
  }

  return (
    <div className={settingLayout}>
      <SettingPageLayout img={lock_icon} title={email} />

      <div className={settingItemPage}>
        <Dropdown title="Email" svgImg={<ChangeNameIcon />}>
          <FormSetting type="email" initialValue={email} onSubmit={handleSubmit} />
        </Dropdown>
      </div>

      <div className="w-[90%] md:w-[650px] sm:mt-10">
        <ButtonLogout
          isGrey={true}
          onClick={() => {
            dispatch(deleteUserThunk())
          }}
        >
          Удалить аккаунта
        </ButtonLogout>
      </div>
    </div>
  )
}
