export interface CreateTopicForm {
  id: number
  name: string
}

export interface CreateFolder {
  name: string
  category: string
  topics: CreateTopicForm[]
  description: string
}
