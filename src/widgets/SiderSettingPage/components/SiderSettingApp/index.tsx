import { SiderSettingMenu } from '../SiderSettingMenu'
import { Link } from 'react-router'
import { ButtonLogout } from '@/shared/ui/buttons/ButtonLogout'
import { AppDispatch } from '@/app/store/configureStore'
import { useDispatch } from 'react-redux'
import { logoutUser } from '@/entities/user/model/store/auth/authSlice'
import { ReactComponent as LeftArrowIcon } from '@/shared/assets/images/assets/left_arrow_icon.svg?react'

export function SiderSettingApp() {
  const dispatch = useDispatch<AppDispatch>()

  return (
    <nav>
      <aside className={`w-[250px] xl:w-[285px] h-[100vh] bg-[#F6F6F6] pt-[33px] pl-[25px] pr-[15px] fixed z-[10]`}>
        <Link to={'/settings'} className="flex items-center gap-[25px]">
          <LeftArrowIcon className="text-3xl text-primary cursor-pointer" />
          <span className="text-xl font-[500]">Настройки</span>
        </Link>

        <div className="mt-[63px]">
          <SiderSettingMenu />
        </div>

        <div className="absolute bottom-10 w-[210px]">
          <ButtonLogout
            onClick={() => {
              dispatch(logoutUser())
            }}
          >
            Выход из аккаунта
          </ButtonLogout>
        </div>
      </aside>
    </nav>
  )
}
