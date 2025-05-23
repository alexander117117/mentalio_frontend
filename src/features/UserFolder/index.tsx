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
import { EditableTitle } from '@/shared/ui/EditableTitle'
import { handleTitleSave } from './lib/handele/titleSave'

interface InfoUserFolderProps {
  isModalOpen: boolean
  setIsModalOpen: (isOpen: boolean) => void
  dataFolder: FolderItem
}
export function UserFolder({ isModalOpen, setIsModalOpen, dataFolder }: InfoUserFolderProps) {
  const dispatch = useDispatch<AppDispatch>()
  const goToTopic = useTopicNavigation()

  return (
    <ModalWrapper isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <div className="text-white">
        <h2 className={style.InfoUserFolder_title}>
          {' '}
          <EditableTitle initialValue={dataFolder.folderName} onSave={handleTitleSave({ dataFolder, dispatch })} />
        </h2>

        <div className={groupClass}>
          {dataFolder?.topics && dataFolder.topics.length > 0 ? (
            dataFolder.topics.map((topic) => (
              <InfoUserFolder key={topic.id} dataTopic={topic} dataFolder={dataFolder} />
            ))
          ) : (
            <h1 className="w-full md:w-96 text-center">Нет данных</h1>
          )}
        </div>

        <div className="flex items-center justify-between md:flex-row flex-col gap-4 md:gap-0 mt-8 sm:mt-[72px] pb-5 sm:pb-0">
          <ButtonControlFolder onClick={() => handeleAddTopic({ idFolder: dataFolder.id, goToTopic, dispatch })}>
            Добавить тему
          </ButtonControlFolder>
          <ButtonControlFolder
            onClick={() => handeleDelleteFolder({ id: dataFolder.id, dispatch, setIsModalOpen })}
            color={'text-[#FF4040]'}
          >
            Удалить папку
          </ButtonControlFolder>
        </div>
      </div>
    </ModalWrapper>
  )
}
