import { AppDispatch } from '@/app/store/configureStore'
import { TopicsItem } from '@/entities/folder/lib/types'
import { Id } from '@/shared/types'

export interface HandeleAddTopicProps {
  idFolder: Id
  goToTopic: (idFolder: Id, topic: TopicsItem) => void
  dispatch: AppDispatch
}

export interface handleDeleteTopicProps {
  id: Id
  dispatch: AppDispatch
}
