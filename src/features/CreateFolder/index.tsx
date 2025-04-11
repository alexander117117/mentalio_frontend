import { ModalWrapper } from '@/shared/ui/ModalWrapper'
import { FormCreateFolder } from './ui/FormCreateFolder'

interface CreateFolderProps {
  isModalOpen: boolean
  setIsModalOpen: (isOpen: boolean) => void
  quantityTopicInput: number
  setQuantityTopicInput: (quantity: number) => void
}
export function CreateFolder({ isModalOpen, setIsModalOpen }: CreateFolderProps) {
  return (
    <ModalWrapper isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <div className="relative">
        <h2 className="text-white text-2xl sm:text-4xl font-normal mb-6 sm:mb-6 text-center">Создание папки</h2>
        <FormCreateFolder setIsModalOpen={setIsModalOpen} />
      </div>
    </ModalWrapper>
  )
}
