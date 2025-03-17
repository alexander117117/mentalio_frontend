import { SettingCardMode } from '@/features/SettingCardMode'
import { SettingMemorization } from '@/features/SettingMemorization'
import { SettingTest } from '@/features/SettingTest'
import { useState } from 'react'

interface ButtonNavigationTabProps {
  link?: string | undefined
  children: React.ReactNode
}
export function ButtonNavigationTab({ link, children }: ButtonNavigationTabProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-zinc-900 text-white hover:bg-zinc-800 px-[17px] sm:px-[24px] py-[8px] rounded-[10px] text-xs sm:text-base"
      >
        {children}
      </button>
      {
        link === "/test" ?
        <SettingTest 
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
        :
        link === "/learning" ?
        <SettingMemorization 
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
        : 
        <SettingCardMode 
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      }
    </>
  )
}
