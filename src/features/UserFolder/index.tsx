import { ModalWrapper } from '@/shared/ui/ModalWrapper'
import style from './index.module.css'
import { ButtonControlFolder } from '@/shared/ui/buttons/ButtonControlFolder'
import { InfoUserFolder } from '@/features/InfoUserFolder'
import { groupClass } from '@/shared/lib/classNames'
import { FolderItem } from '@/entities/folder/lib/types'
import { handeleAddTopic, handeleDelleteFolder } from './lib/handele'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/app/store/configureStore'
import { useTopicNavigation } from '@/shared/lib/helpers'

interface InfoUserFolderProps {
  isModalOpen: boolean
  setIsModalOpen: (isOpen: boolean) => void
  dataFolder: FolderItem
}
export function UserFolder({ isModalOpen, setIsModalOpen, dataFolder }: InfoUserFolderProps) {
  const dispatch = useDispatch<AppDispatch>()
  const goToTopic = useTopicNavigation()

  return (
    <ModalWrapper isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} isDark={true}>
      <div className="text-white pb-44 md:pb-16 relative">
        <h2 className={style.InfoUserFolder_title}>{dataFolder.folderName}</h2>

        <div className={groupClass}>
          {dataFolder?.topics && dataFolder.topics.length > 0 ? (
            dataFolder.topics.map((topic) => (
              <InfoUserFolder key={topic.id} dataTopic={topic} dataFolder={dataFolder} />
            ))
          ) : (
            <h1 className="w-full md:w-96 text-center">Нет данных</h1>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-evenly md:flex-row flex-col gap-4 md:gap-0">
          <ButtonControlFolder onClick={() => handeleAddTopic({ idFolder: dataFolder.id, goToTopic, dispatch })}>
            Добавить тему
          </ButtonControlFolder>
          <ButtonControlFolder
            onClick={() => handeleDelleteFolder({ id: dataFolder.id, dispatch })}
            color={'text-[#FF4040]'}
          >
            Удалить папку
          </ButtonControlFolder>
        </div>
      </div>
    </ModalWrapper>
  )
}
