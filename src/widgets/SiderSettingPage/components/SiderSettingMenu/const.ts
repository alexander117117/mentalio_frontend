import { logo_circle, change_name_icon, avatar_icon } from "@/shared/assets/images"


interface MenuSettingItem {
  img: string
  title: string
  subtitle?: string
  link: string
}
export const MenuSettingData: MenuSettingItem[] = [
  {
    img: logo_circle,
    title: 'Аккаунт',
    subtitle: 'Учетная запись Mentalio',
    link: '/settings/account'
  },
  {
    img: change_name_icon,
    title: 'Безопасность',
    link: '/settings/security'
  },
  {
    img: avatar_icon,
    title: 'Поддержка',
    link: '/settings/support'
  }
]