import { ButtonControlFolder } from '@/shared/ui/buttons/ButtonControlFolder'
import { TopicInfo } from './components/TopicInfo'
import { flexColumnStartClass } from '@/shared/lib/classNames'
import { folderClass } from './lib'
import { TopicsItem } from '@/entities/folder/lib/types'

interface InfoUserFolderProps {
  dataTopic: TopicsItem
  idFolder: string | number
}
export function InfoUserFolder({ dataTopic, idFolder }: InfoUserFolderProps) {
  const handleOpenFolderPage = (idFolder: string | number, idTopic: string | number) => {
    console.log('OpenFolderPage: ', { idFolder, idTopic })
  }
  return (
    <>
      <div className={folderClass}>
        <div className={flexColumnStartClass}>
          <TopicInfo dataTopic={dataTopic} />
        </div>

        <ButtonControlFolder onClick={() => handleOpenFolderPage(idFolder, dataTopic.id)}>
          Посмотреть
        </ButtonControlFolder>
      </div>
    </>
  )
}
