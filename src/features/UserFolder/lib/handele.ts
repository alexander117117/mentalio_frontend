import { AppDispatch } from '@/app/store/configureStore'
import { TopicsItem } from '@/entities/folder/lib/types'
import { addTopicToFile, deleteUserFile } from '@/entities/folder/model/store'
import { TopicRouteState } from '@/shared/types/route'
import { Id } from '@/shared/types/types'
import { NavigateFunction } from 'react-router'

interface HandeleAddTopicProps {
  idFolder: Id
  navigate: NavigateFunction
  dispatch: AppDispatch
}
export const handeleAddTopic = async ({ idFolder, navigate, dispatch }: HandeleAddTopicProps) => {
  const topicData: Partial<TopicsItem> = {
    topicName: 'Новая тема',
  }
  const res = await dispatch(addTopicToFile({ idFolder, topicData })).unwrap()

  navigate(`/folderTopic/${idFolder}/${res.topic.id}`, {
    state: { dataTopic: res.topic, idFolder, idTopic: res.topic.id } as TopicRouteState,
  })
}
export const handeleDelleteFolder = ({ id, dispatch }: { id: Id; dispatch: AppDispatch }) => {
  dispatch(deleteUserFile(id))
}
