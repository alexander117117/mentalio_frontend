import { ModalWrapper } from '@/shared/ui/ModalWrapper'
import style from './index.module.css'
import { ButtonControlFolder } from '@/shared/ui/buttons/ButtonControlFolder'
import { InfoUserFolder } from '@/features/InfoUserFolder'
import { groupClass } from '@/shared/lib/classNames'
import { CardFolderItem } from '@/entities/folder/lib/types'
import { handeleAddTopic, handeleDelleteFolder } from './lib/handele'

interface InfoUserFolderProps {
  isModalOpen: boolean
  setIsModalOpen: (isOpen: boolean) => void
  dataFolder: CardFolderItem
}
export function UserFolder({ isModalOpen, setIsModalOpen, dataFolder }: InfoUserFolderProps) {
  return (
    <ModalWrapper isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} isDark={true}>
      <div className="text-white pb-44 md:pb-16 relative">
        <h2 className={style.InfoUserFolder_title}>{dataFolder.name}</h2>

        <div className={groupClass}>
          {dataFolder?.topics && dataFolder.topics.length > 0 ? (
            dataFolder.topics.map((topic) => (
              <InfoUserFolder key={topic.id} dataTopic={topic} idFolder={dataFolder.id} />
            ))
          ) : (
            <h1 className="w-full md:w-96 text-center">Нет данных</h1>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-evenly md:flex-row flex-col gap-4 md:gap-0">
          <ButtonControlFolder onClick={() => handeleAddTopic(dataFolder.id)}>Добавить тему</ButtonControlFolder>
          <ButtonControlFolder onClick={() => handeleDelleteFolder(dataFolder.id)} color={'text-[#FF4040]'}>
            Удалить папку
          </ButtonControlFolder>
        </div>
      </div>
    </ModalWrapper>
  )
}
