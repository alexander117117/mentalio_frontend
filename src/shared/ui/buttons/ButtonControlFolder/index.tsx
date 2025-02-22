import * as React from 'react'

interface ButtonControlFolderProps {
  type?: 'button' | 'submit' | 'reset'
  color?: string
  customPadding?: string
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
}
export function ButtonControlFolder({
  type = 'button',
  color = 'text-white',
  customPadding = 'px-8',
  children,
  onClick,
  disabled = false,
}: ButtonControlFolderProps) {
  return (
    <button
      type={type}
      className={`border border-[#272727] rounded-[10px] ${customPadding} h-[30px] md:h-[46px] ${color} text-[0.5rem] xxs:text-[0.625rem] sm:text-base`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
