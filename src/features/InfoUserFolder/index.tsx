import { ButtonControlFolder } from '@/shared/ui/buttons/ButtonControlFolder'
import { flexColumnStartClass } from '@/shared/lib/classNames'
import { folderClass } from '@/shared/lib/classNames'
import { FolderItem, TopicsItem } from '@/entities/folder/lib/types'
import { ReactComponent as CloseIcon } from '@/shared/assets/images/assets/close_icon.svg?react'
import { TopicInfo } from '@/shared/ui/TopicInfo'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/app/store/configureStore'
import { handleDeleteTopic, handleOpenFolderPage } from './lib/handles'
import { useTopicNavigation } from '@/shared/lib/helpers'

interface InfoUserFolderProps {
  dataTopic: TopicsItem
  dataFolder: FolderItem
}
export function InfoUserFolder({ dataTopic, dataFolder }: InfoUserFolderProps) {
  const goToTopic = useTopicNavigation()
  const dispatch = useDispatch<AppDispatch>()

  return (
    <>
      <div className={folderClass}>
        <div className={flexColumnStartClass}>
          <TopicInfo dataTopic={dataTopic} />
        </div>

        <CloseIcon
          title="delete topic"
          onClick={() => handleDeleteTopic({ idFolder: dataFolder.id, idTopic: dataTopic.id, dispatch })}
        />
        <ButtonControlFolder
          isSmall={true}
          onClick={() => handleOpenFolderPage({ idFolder: dataFolder.id, goToTopic, dataTopic })}
        >
          Посмотреть
        </ButtonControlFolder>
      </div>
    </>
  )
}
