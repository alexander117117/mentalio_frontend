import { AppDispatch } from '@/app/store/configureStore'
import { TopicsItem } from '@/entities/folder/lib/types'
import { Id } from '@/shared/types'

export interface handleOpenFolderPageProps {
  idFolder: Id
  dataTopic: TopicsItem
  goToTopic: (idFolder: Id, topic: TopicsItem) => void
}

export interface handleDeleteTopicProps {
  idFolder: Id
  idTopic: Id
  dispatch: AppDispatch
}
