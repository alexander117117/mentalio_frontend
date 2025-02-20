import { ModalWrapper } from '@/shared/ui/ModalWrapper'
import style from './index.module.css'
import { InfoFolder } from '../InfoFolder'
import { ButtonControlFolder } from '@/shared/ui/buttons/ButtonControlFolder'
import { groupClass } from '@/shared/lib/classNames'
import { CardFolderItem } from '@/entities/folder/lib/types'
interface InfoUserFolderProps {
  isModalOpen: boolean
  setIsModalOpen: (isOpen: boolean) => void
  dataFolder: CardFolderItem
}
export function InfoPublicFolder({ isModalOpen, setIsModalOpen, dataFolder }: InfoUserFolderProps) {
  const handelAddFolder = () => {
    console.log('add folder')
  }
  return (
    <ModalWrapper isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} isDark={true}>
      <div className="text-white pb-16 relative">
        <h2 className={style.InfoPublicFolder_title}>{dataFolder.name}</h2>

        <div className={groupClass}>
          {dataFolder.topics.length > 0 ? (
            dataFolder.topics.map((topic) => <InfoFolder key={topic.id} dataTopic={topic} />)
          ) : (
            <h1>Тем нет</h1>
          )}
        </div>

        <div className={style.buttonContainerClass}>
          <ButtonControlFolder onClick={handelAddFolder}>Добавить папку</ButtonControlFolder>
        </div>
      </div>
    </ModalWrapper>
  )
}
