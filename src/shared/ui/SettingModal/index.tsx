import { ModalWrapper } from '@/shared/ui/ModalWrapper'

interface SettingModalProps {
  isModalOpen: boolean
  setIsModalOpen: (isOpen: boolean) => void
  title: string
  children: React.ReactNode
}

export function SettingModal({ isModalOpen, setIsModalOpen, title, children }: SettingModalProps) {
  return (
    <ModalWrapper isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <div className="pb-6 md:pb-0 relative text-white">
        <h2 className="text-2xl sm:text-4xl font-normal mb-6 sm:mb-10 text-center">{title}</h2>
        {children}
      </div>
    </ModalWrapper>
  )
}
