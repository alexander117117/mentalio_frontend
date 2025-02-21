import { ButtonControlFolder } from '@/shared/ui/buttons/ButtonControlFolder'
import { TopicInfo } from './components/TopicInfo'
import { flexColumnStartClass } from '@/shared/lib/classNames'
import { folderClass } from './lib'
import { TopicsItem } from '@/entities/folder/lib/types'
import { ReactComponent as CloseIcon } from '@/shared/assets/images/assets/close_icon.svg?react'

interface InfoUserFolderProps {
  dataTopic: TopicsItem
  idFolder: string | number
}
export function InfoUserFolder({ dataTopic, idFolder }: InfoUserFolderProps) {
  const handleOpenFolderPage = (idFolder: string | number, idTopic: string | number) => {
    console.log('OpenFolderPage: ', { idFolder, idTopic })
  }
  const handleDeleteTopic = (idTopic: string | number) => {
    console.log('DeleteTopic id: ', { idTopic })
  }
  return (
    <>
      <div className={folderClass}>
        <div className={flexColumnStartClass}>
          <TopicInfo dataTopic={dataTopic} />
        </div>

        <CloseIcon title="delete topic" onClick={() => handleDeleteTopic(dataTopic.id)} />
        <ButtonControlFolder onClick={() => handleOpenFolderPage(idFolder, dataTopic.id)}>
          Посмотреть
        </ButtonControlFolder>
      </div>
    </>
  )
}
