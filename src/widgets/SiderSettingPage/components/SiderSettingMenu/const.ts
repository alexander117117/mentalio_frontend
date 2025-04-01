import { logo_circle, lock_icon, support_icon } from '@/shared/assets/images'

export interface MenuSettingItem {
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
    link: '/settings/account',
  },
  {
    img: lock_icon,
    title: 'Безопасность',
    link: '/settings/security',
  },
  {
    img: support_icon,
    title: 'Поддержка',
    link: '/settings/support',
  },
]
