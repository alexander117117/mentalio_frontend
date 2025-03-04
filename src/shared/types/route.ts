import { TopicsItem } from '@/entities/folder/lib/types'
import { Id } from './types'

export interface TopicRouteState {
  dataTopic: TopicsItem
  idFolder: Id
  idTopic: Id
}
