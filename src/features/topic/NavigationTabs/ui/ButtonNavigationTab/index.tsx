import { useState } from 'react'
import { SettingModal } from '@/shared/ui/SettingModal'

interface ButtonNavigationTabProps {
  ComponentForm: React.ReactNode
  children: React.ReactNode
  title: string
}

export function ButtonNavigationTab({ ComponentForm, children, title }: ButtonNavigationTabProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-zinc-900 text-white hover:bg-zinc-800 px-[17px] sm:px-[24px] py-[8px] rounded-[10px] text-xs sm:text-base"
      >
        {children}
      </button>
      <SettingModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} title={title}>
        {ComponentForm}
      </SettingModal>
    </>
  )
}
