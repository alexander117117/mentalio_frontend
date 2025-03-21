import { AppDispatch } from '@/app/store/configureStore'
import { TopicsItem } from '@/entities/folder/lib/types'
import { getTopic, setTopicData } from '@/entities/topic/model/store'
import { Id } from '@/shared/types'
import { Location } from 'react-router'

interface GetTopicDataParams {
  dispatch: AppDispatch
  location: Location
  idFolder: Id | undefined
  idTopic: Id | undefined
}
export async function getTopicData({ dispatch, location, idFolder, idTopic }: GetTopicDataParams) {
  if (idFolder && idTopic) {
    try {
      const response = await dispatch(getTopic({ idFolder, idTopic })).unwrap()
      dispatch(
        setTopicData({
          dataTopic: response.dataTopic,
          idFolder,
        }),
      )
    } catch (err) {
      console.error('Error while fetching topic', err)
    }
  } else if (location.state?.dataTopic) {
    const topicFromLocation = location.state.dataTopic as TopicsItem
    dispatch(
      setTopicData({
        dataTopic: topicFromLocation,
        idFolder,
      }),
    )
  }
}
