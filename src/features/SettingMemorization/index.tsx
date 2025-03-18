import { SettingModal } from '@/shared/ui/SettingModal'
import { FormSettingMemorization } from './ui/FormSettingMemorization'

interface SettingMemorizationProps {
  isModalOpen: boolean
  setIsModalOpen: (isOpen: boolean) => void
}

export function SettingMemorization({ isModalOpen, setIsModalOpen }: SettingMemorizationProps) {
  return (
    <SettingModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} title="Настройте заучивание">
      <FormSettingMemorization />
    </SettingModal>
  )
}
