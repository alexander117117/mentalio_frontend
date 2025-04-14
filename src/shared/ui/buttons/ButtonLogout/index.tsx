import cn from 'classnames'

interface ButtonLogoutProps {
  isGrey?: boolean
  children: React.ReactNode
  onClick: () => void
}

export function ButtonLogout({ isGrey = false, children, onClick }: ButtonLogoutProps) {
  return (
    <button
      className={cn('w-full h-[60px] rounded-[10px] text-logout', {
        'bg-[#F5F5F5]': isGrey,
        'bg-white': !isGrey,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
