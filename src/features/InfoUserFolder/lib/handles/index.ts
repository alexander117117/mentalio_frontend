import { deleteTopicFromFile } from '@/entities/folder/model/store'
import { TopicsItem } from '@/entities/folder/lib/types'
import { Id } from '@/shared/types/types'
import { AppDispatch } from '@/app/store/configureStore'
import { NavigateFunction } from 'react-router'
import { TopicRouteState } from '@/shared/types/route'

interface HandleTopicActions {
  idFolder: Id
  idTopic: Id
  dispatch: AppDispatch
  navigate: NavigateFunction
  dataTopic: TopicsItem
}

export const handleOpenFolderPage = ({
  idFolder,
  idTopic,
  dataTopic,
  navigate,
}: Omit<HandleTopicActions, 'dispatch'>) => {
  console.log('OpenFolderPage: ', { idFolder, idTopic, dataTopic })
  navigate(`/folderTopic/${idFolder}/${idTopic}`, { state: { dataTopic, idFolder, idTopic } as TopicRouteState })
}

export const handleDeleteTopic = ({
  idFolder,
  idTopic,
  dispatch,
}: Omit<HandleTopicActions, 'navigate' | 'dataFolder' | 'dataTopic'>) => {
  console.log('DeleteTopic id: ', { idFolder, idTopic })
  dispatch(deleteTopicFromFile({ idFolder, idTopic }))
}
