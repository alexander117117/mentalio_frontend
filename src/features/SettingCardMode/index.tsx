import { ModalWrapper } from "@/shared/ui/ModalWrapper";
import { FormSettingCardMode } from "./ui/FormSettingCardMode";

interface SettingTestProps {
  isModalOpen: boolean
  setIsModalOpen: (isOpen: boolean) => void
}

export function SettingCardMode({ isModalOpen, setIsModalOpen }: SettingTestProps) {
  return (
    <ModalWrapper isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} isDark={true}>
      <div className="pb-6 md:pb-0 relative text-white ">
        <h2 className="text-2xl sm:text-4xl font-normal mb-6 sm:mb-10 text-center">Настройте карточки</h2>

        <FormSettingCardMode />
      </div>
    </ModalWrapper>
  )
}