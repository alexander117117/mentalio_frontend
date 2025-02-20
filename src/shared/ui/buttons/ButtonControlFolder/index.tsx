import * as React from 'react'

interface ButtonControlFolderProps {
  color?: string
  customPadding?: string
  children: React.ReactNode
  onClick?: () => void
}
export function ButtonControlFolder({
  color = 'text-white',
  customPadding = 'px-8',
  children,
  onClick,
}: ButtonControlFolderProps) {
  return (
    <button
      className={`border border-[#272727] rounded-[10px] ${customPadding} h-[30px] md:h-[46px] ${color} text-[0.5rem] xxs:text-[0.625rem] sm:text-base`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
