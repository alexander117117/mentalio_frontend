import { ModalWrapper } from '@/shared/ui/ModalWrapper'
import style from "./index.module.css"
import { InfoFolder } from '../infoFolder'
import { ButtonControlFolder } from '@/shared/ui/buttons/ButtonControlFolder'
import { groupClass } from '@/shared/lib/classNames'
interface InfoUserFolderProps {
  isModalOpen: boolean
  setIsModalOpen: (isOpen: boolean) => void
}
export function InfoPublicFolder({ isModalOpen, setIsModalOpen }: InfoUserFolderProps) {
  return (
    <ModalWrapper 
      isOpen={isModalOpen} 
      onClose={() => setIsModalOpen(false)}
      isDark={true}
    >
      <div className="text-white pb-16 relative">
        <h2 className={style.InfoPublicFolder_title}>Испанский</h2>

        <div className={groupClass}>
          <InfoFolder title={'Поход в ресторанddd'} date={"21.07.25"}/>
          <InfoFolder title={'Поход в ресторанddd'} date={"21.07.25"}/>
          <InfoFolder title={'Поход в ресторанddd'} date={"21.07.25"}/>
          <InfoFolder title={'Поход в ресторанddd'} date={"21.07.25"}/>
        </div>

        <div className={style.buttonContainerClass}>
          <ButtonControlFolder>Добавить папку</ButtonControlFolder>
        </div>
      </div>
    </ModalWrapper>
  )
}

