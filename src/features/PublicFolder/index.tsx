import { ModalWrapper } from '@/shared/ui/ModalWrapper'
import style from './index.module.css'
import { InfoFolder } from '../InfoFolder'
import { ButtonControlFolder } from '@/shared/ui/buttons/ButtonControlFolder'
import { groupClass } from '@/shared/lib/classNames'
import { FolderItem } from '@/entities/folder/lib/types'
import { addPublicFile } from '@/entities/folder/model/store/userFiles/userFilesThunks'
import { AppDispatch } from '@/app/store/configureStore'
import { useDispatch } from 'react-redux'
interface InfoUserFolderProps {
  isModalOpen: boolean
  setIsModalOpen: (isOpen: boolean) => void
  dataFolder: FolderItem
}
export function InfoPublicFolder({ isModalOpen, setIsModalOpen, dataFolder }: InfoUserFolderProps) {
  const dispatch = useDispatch<AppDispatch>()
  const handelAddFolder = async () => {
    const response = await dispatch(addPublicFile({ idFolder: dataFolder.id }))
    if (response.meta.requestStatus === 'fulfilled') {
      setIsModalOpen(false)
    }
  }
  return (
    <ModalWrapper isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <div className="text-white pb-28 md:pb-16 relative">
        <h2 className={style.InfoPublicFolder_title}>{dataFolder.folderName}</h2>

        <div className={groupClass}>
          {dataFolder.topics.length > 0 ? (
            dataFolder.topics.map((topic) => <InfoFolder key={topic.id} dataTopic={topic} />)
          ) : (
            <h1 className="w-full md:w-56 text-center">Тем нет</h1>
          )}
        </div>

        <div className={style.buttonContainerClass}>
          <ButtonControlFolder onClick={handelAddFolder}>Добавить папку</ButtonControlFolder>
        </div>
      </div>
    </ModalWrapper>
  )
}
