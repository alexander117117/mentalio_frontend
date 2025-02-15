import * as React from 'react'
import { ModalWrapper } from '@/shared/ui/ModalWrapper'
import style from "./index.module.css"
import { InfoFolder } from '../infoFolder'
import { ButtonControlFolder } from '@/shared/ui/buttons/ButtonControlFolder'
import classNames from 'classnames'

interface InfoUserFolderProps {
  isModalOpen: boolean
  setIsModalOpen: (isOpen: boolean) => void
}
export function InfoUserFolder({ isModalOpen, setIsModalOpen }: InfoUserFolderProps) {
  const groupClass = classNames(style.InfoPublicFolder_group, 'flex', 'flex-col', 'gap-7');
  return (
    <ModalWrapper 
      isOpen={isModalOpen} 
      onClose={() => setIsModalOpen(false)}
      isDark={true}
    >
      <div className="text-white pb-16 relative">
        <h2 className={style.InfoUserFolder_title}>Испанский</h2>

        <div className={groupClass}>
          <InfoFolder title={'Поход в ресторанddd'} date={"21.07.25"}/>
          <InfoFolder title={'Поход в ресторанddd'} date={"21.07.25"}/>
          <InfoFolder title={'Поход в ресторанddd'} date={"21.07.25"}/>
          <InfoFolder title={'Поход в ресторанddd'} date={"21.07.25"}/>
        </div>


        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-evenly">
          <ButtonControlFolder>Добавить тему</ButtonControlFolder>
          <ButtonControlFolder color={'text-[#FF4040]'}>Удалить папку</ButtonControlFolder>
        </div>
      </div>
    </ModalWrapper>
  )
}

