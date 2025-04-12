import cn from 'classnames'
import { colors } from '@/shared/constants/color'

interface ButtonLogoutProps {
  isGrey?: boolean
  children: React.ReactNode
}


export function ButtonLogout({ isGrey = false, children }: ButtonLogoutProps) {
  return (
    <button className={
      cn('w-full h-[60px] rounded-[10px] text-logout',
      {
        [`bg-[${colors.buttonLogoutGrey}]`]: isGrey,
        [`bg-white`]: !isGrey
      }
      )}>
      {children}
    </button>
  )
}
