import { deleteTopicFromFile } from '@/entities/folder/model/store'
import { handleDeleteTopicProps, handleOpenFolderPageProps } from '../types'

export const handleOpenFolderPage = ({ idFolder, dataTopic, goToTopic }: handleOpenFolderPageProps) => {
  goToTopic(idFolder, dataTopic)
}

export const handleDeleteTopic = ({ idFolder, idTopic, dispatch }: handleDeleteTopicProps) => {
  dispatch(deleteTopicFromFile({ idFolder, idTopic }))
}
