import { TopicsItem } from '@/entities/folder/lib/types'
import { Id, TopicRouteState } from '@/shared/types'
import { useNavigate } from 'react-router-dom'

export function useTopicNavigation() {
  const navigate = useNavigate()

  return function goToTopic(idFolder: Id, topic: TopicsItem) {
    navigate(`/folderTopic/${idFolder}/${topic.id}`, {
      state: {
        dataTopic: topic,
        idFolder,
        idTopic: topic.id,
      } as TopicRouteState,
    })
  }
}
