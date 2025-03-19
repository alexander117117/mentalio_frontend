import { useState } from 'react'
import { FormSettingCardMode } from '@/features/FormSettingCardMode'
import { FormSettingMemorization } from '@/features/FormSettingMemorization'
import { FormSettingTest } from '@/features/FormSettingTest'
import { SettingModal } from '../../SettingModal'

interface ButtonNavigationTabProps {
  typeModal?: string
  children: React.ReactNode
}

const typeModalComponentMap: Record<string, React.ComponentType<any>> = {
  test: FormSettingTest,
  memorization: FormSettingMemorization,
  'card-mode': FormSettingCardMode,
}

export function ButtonNavigationTab({ typeModal, children }: ButtonNavigationTabProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const ModalComponent = typeModal ? typeModalComponentMap[typeModal] : null
  const title =
    typeModal === 'test'
      ? 'Настройте свой тест'
      : typeModal === 'card-mode'
        ? 'Настройте карточки'
        : 'Настройте заучивание'
  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-zinc-900 text-white hover:bg-zinc-800 px-[17px] sm:px-[24px] py-[8px] rounded-[10px] text-xs sm:text-base"
      >
        {children}
      </button>
      {ModalComponent && (
        <SettingModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} title={title}>
          <ModalComponent />
        </SettingModal>
      )}
    </>
  )
}
