import { AppDispatch } from '@/app/store/configureStore'
import { TopicsItem } from '@/entities/folder/lib/types'
import { updateTopic } from '@/entities/topic/model/store/userTopicThunks'
import { Id } from '@/shared/types'
interface TitleSaveParams {
  idFolder: Id
  idTopic: Id
  dataTopic: TopicsItem
  dispatch: AppDispatch
}
export function handleTitleSave({ idFolder, idTopic, dataTopic, dispatch }: TitleSaveParams) {
  return function (newValue: string) {
    dispatch(updateTopic({ idFolder, idTopic, topicData: { ...dataTopic, topicName: newValue } }))
  }
}
