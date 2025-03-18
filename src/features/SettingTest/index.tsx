import { SettingModal } from '@/shared/ui/SettingModal'
import { FormSettingTest } from './ui/FormSettingTest'

interface SettingTestProps {
  isModalOpen: boolean
  setIsModalOpen: (isOpen: boolean) => void
}

export function SettingTest({ isModalOpen, setIsModalOpen }: SettingTestProps) {
  return (
    <SettingModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} title="Настройте свой тест">
      <FormSettingTest />
    </SettingModal>
  )
}
