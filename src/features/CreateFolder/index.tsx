import { ModalWrapper } from '@/shared/ui/ModalWrapper'
import { FormCreatFolder } from './ui/FormCreatFolder'

interface CreateFolderProps {
  isModalOpen: boolean
  setIsModalOpen: (isOpen: boolean) => void
  quantityTopicInput: number
  setQuantityTopicInput: (quantity: number) => void
}
export function CreateFolder({ isModalOpen, setIsModalOpen }: CreateFolderProps) {
  return (
    <ModalWrapper isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} isDark={true}>
      <div className="pb-12 md:pb-16 relative">
        <h2 className="text-white text-2xl sm:text-4xl font-normal mb-6 sm:mb-10 text-center">Создание папки</h2>
        <FormCreatFolder />
      </div>
    </ModalWrapper>
  )
}
