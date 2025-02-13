export interface PublicFile {
  id: string
  [key: string]: any
}

export interface PublicTopic {
  id: string
  cards?: PublicCard[]
  [key: string]: any
}

export interface PublicCard {
  id: string
  [key: string]: any
}

export interface CardItem {
  id: number | string
  question?: string
  answer?: string
}

export interface TopicItem {
  id: number | string
  title?: string
  desc?: string
  cards?: CardItem[]
}

export interface FileItem {
  id: number | string
  title: string
  dateCreated: string
  desc: string
  topics?: TopicItem[]
}
