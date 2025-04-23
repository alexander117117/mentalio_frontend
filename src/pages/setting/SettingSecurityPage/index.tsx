import { SettingPageLayout } from '@/shared/ui/SettingPageLayout'
import { test } from '@/shared/assets/images'
import { Dropdown } from '@/widgets/Dropdown'
import { settingLayout, settingItemPage } from '@/shared/lib/classNames'
import { ReactComponent as ChangeNameIcon } from '@/shared/assets/images/assets/change_name_icon.svg?react'
import { AppDispatch, RootState } from '@/app/store/configureStore'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUserThunk, updateUserThunk } from '@/entities/user/model/store/auth/authThunks'
import { ButtonLogout } from '@/shared/ui/buttons/ButtonLogout'
import { FormSettingEmail } from '@/shared/ui/form/FormSettingEmail'
import { useState, useEffect } from 'react'

export function SettingSecurityPage() {
  const dispatch = useDispatch<AppDispatch>()

  const avatar = useSelector((s: RootState) => s.auth.user?.avatar)
  const email = useSelector((s: RootState) => s.auth.user?.email)
  const user = useSelector((s: RootState) => s.auth.user)

  // локальный email, который показываем в заголовке
  const [localEmail, setLocalEmail] = useState(email ?? '')

  // если стейт-редакса изменился извне (например, после обновления профиля с другого устройства)
  useEffect(() => {
    setLocalEmail(email ?? '')
  }, [email])

  const handleSubmit = (val: string) => {
    if (!user || val === email) return

    // 1) отображаем новый e-mail сразу
    setLocalEmail(val)

    // 2) запускаем запрос к серверу
    dispatch(updateUserThunk({ ...user, email: val }))
      .unwrap()
      .catch(() => {
        // если сервер вернул ошибку — откатываем показанное значение
        setLocalEmail(email ?? '')
      })
  }

  return (
    <div className={settingLayout}>
      <SettingPageLayout img={avatar ? `/images/${avatar}.png` : test} circle title={localEmail} />

      <div className={settingItemPage}>
        <Dropdown title="Email" svgImg={<ChangeNameIcon />}>
          <FormSettingEmail type="email" initialValue={email ?? ''} onSubmit={handleSubmit} />
        </Dropdown>
      </div>

      <div className="w-[90%] md:w-[650px] sm:mt-10">
        <ButtonLogout isGrey onClick={() => dispatch(deleteUserThunk())}>
          Удалить&nbsp;аккаунт
        </ButtonLogout>
      </div>
    </div>
  )
}
