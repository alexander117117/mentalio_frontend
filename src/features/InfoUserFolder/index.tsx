import { ButtonControlFolder } from '@/shared/ui/buttons/ButtonControlFolder'
import { flexColumnStartClass } from '@/shared/lib/classNames'
import { folderClass } from '@/shared/lib/classNames'
import { TopicsItem } from '@/entities/folder/lib/types'
import { ReactComponent as CloseIcon } from '@/shared/assets/images/assets/close_icon.svg?react'
import { TopicInfo } from '@/shared/ui/TopicInfo'

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
        <ButtonControlFolder isSmall={true} onClick={() => handleOpenFolderPage(idFolder, dataTopic.id)}>
          Посмотреть
        </ButtonControlFolder>
      </div>
    </>
  )
}
