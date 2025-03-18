import { SettingCardMode } from '@/features/SettingCardMode'
import { SettingMemorization } from '@/features/SettingMemorization'
import { SettingTest } from '@/features/SettingTest'
import { useState } from 'react'

interface ButtonNavigationTabProps {
  typeModal?: string
  children: React.ReactNode
}

const typeModalComponentMap: Record<string, React.ComponentType<any>> = {
  'test': SettingTest,
  'memorization': SettingMemorization,
  'card-mode': SettingCardMode,
}

export function ButtonNavigationTab({ typeModal, children }: ButtonNavigationTabProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const ModalComponent = typeModal ? typeModalComponentMap[typeModal] : null

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-zinc-900 text-white hover:bg-zinc-800 px-[17px] sm:px-[24px] py-[8px] rounded-[10px] text-xs sm:text-base"
      >
        {children}
      </button>
      {ModalComponent && <ModalComponent isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />}
    </>
  )
}
