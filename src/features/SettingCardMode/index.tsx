import { SettingModal } from '@/shared/ui/SettingModal'
import { FormSettingCardMode } from './ui/FormSettingCardMode'

interface SettingCardModeProps {
  isModalOpen: boolean
  setIsModalOpen: (isOpen: boolean) => void
}

export function SettingCardMode({ isModalOpen, setIsModalOpen }: SettingCardModeProps) {
  return (
    <SettingModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} title="Настройте карточки">
      <FormSettingCardMode />
    </SettingModal>
  )
}
