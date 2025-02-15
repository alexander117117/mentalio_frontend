import * as React from 'react'

interface ButtonControlFolderProps {
  color?: string
  children: React.ReactNode
}
export function ButtonControlFolder({ color="text-white", children }: ButtonControlFolderProps) {
  return (
  <button className={`border border-[#272727] rounded-[10px] px-8 h-[46px] ${color}`}>
      {children}
    </button>
  )
}