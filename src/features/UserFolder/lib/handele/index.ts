import { TopicsItem } from '@/entities/folder/lib/types'
import { addTopicToFile, deleteUserFile } from '@/entities/folder/model/store'
import { HandeleAddTopicProps, handleDeleteTopicProps } from '../types'

export const handeleAddTopic = async ({ idFolder, goToTopic, dispatch }: HandeleAddTopicProps) => {
  const topicData: Partial<TopicsItem> = {
    topicName: 'Новая тема',
  }
  const res = await dispatch(addTopicToFile({ idFolder, topicData })).unwrap()
  goToTopic(idFolder, res.topic)
}

export const handeleDelleteFolder = async ({ id, dispatch }: handleDeleteTopicProps) => {
  await dispatch(deleteUserFile(id))
}
