import { TopicsItem, FolderItem } from '.'

export type CreateTopicForm = Pick<TopicsItem, 'id' | 'topicName'>

export interface CreateFolder extends Pick<FolderItem, 'folderName' | 'categoryName' | 'description'> {
  topics: CreateTopicForm[]
}
