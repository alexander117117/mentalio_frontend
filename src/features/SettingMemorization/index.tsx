import { ModalWrapper } from "@/shared/ui/ModalWrapper";
import { FormSettingMemorization } from "./ui/FormSettingMemorization";

interface SettingTestProps {
  isModalOpen: boolean
  setIsModalOpen: (isOpen: boolean) => void
}
export function SettingMemorization({ isModalOpen, setIsModalOpen }: SettingTestProps) {
  return (
    <ModalWrapper isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} isDark={true}>
      <div className="pb-6 md:pb-0 relative text-white ">
        <h2 className="text-2xl sm:text-4xl font-normal mb-6 sm:mb-10 text-center">Настройте заучивание</h2>

        <FormSettingMemorization />
      </div>
    </ModalWrapper>
  )
}