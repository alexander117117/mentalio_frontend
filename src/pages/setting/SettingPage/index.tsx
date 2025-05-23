import { AppDispatch } from '@/app/store/configureStore'
import { logoutUser } from '@/entities/user/model/store/auth/authSlice'
import { ButtonLogout } from '@/shared/ui/buttons/ButtonLogout'
import { SiderSettingMenu } from '@/widgets/SiderSettingPage/components/SiderSettingMenu'
import { useDispatch } from 'react-redux'

export const SettingPage = () => {
  const dispatch = useDispatch<AppDispatch>()
  return (
    <div className="flex flex-col items-center justify-start relative h-screen pt-5 sm:pt-16 overflow-hidden">
      <h1 className="text-5xl font-semibold">Настройки</h1>

      <div className="mt-10 w-[80%] sm:w-[30%]">
        <SiderSettingMenu />
      </div>

      <div className="sm:mt-10 w-[80%] sm:w-[30%] absolute top-[70%]">
        <ButtonLogout
          onClick={() => {
            dispatch(logoutUser())
          }}
        >
          Выход из аккаунта
        </ButtonLogout>
      </div>
    </div>
  )
}
