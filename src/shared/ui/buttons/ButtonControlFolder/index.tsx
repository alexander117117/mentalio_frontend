import * as React from 'react'

interface ButtonControlFolderProps {
  type?: 'button' | 'submit' | 'reset'
  color?: string
  customPadding?: string
  isSmall?: boolean
  children: React.ReactNode
  onClick?: () => void
}
export function ButtonControlFolder({
  type = 'button',
  color = 'text-white',
  customPadding = 'px-4',
  isSmall = false,
  children,
  onClick,
}: ButtonControlFolderProps) {
  return (
    <button
      type={type}
      className={`${isSmall ? 'w-auto h-9' : 'w-full md:w-auto h-[4.375rem] md:h-10'} border border-[#272727] rounded-[10px] ${customPadding} ${color} text-xs md:text-base whitespace-nowrap`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
