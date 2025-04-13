import * as React from 'react'

interface ButtonControlFolderProps {
  type?: 'button' | 'submit' | 'reset'
  color?: string
  customPadding?: string
  isSmall?: boolean
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
}
export function ButtonControlFolder({
  type = 'button',
  color = 'text-white',
  customPadding = 'px-4',
  isSmall = false,
  children,
  onClick,
  disabled = false,
}: ButtonControlFolderProps) {
  return (
    <button
      type={type}
      className={`${isSmall ? 'md:w-[200px] h-9' : 'w-[90%] sm:w-[48%] h-[60px] sm:h-10'} bg-popup border border-[#272727] rounded-[10px] ${customPadding} ${color} text-base whitespace-nowrap`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
