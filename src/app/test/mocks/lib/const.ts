import { CardCategoriesItem, CardFolderItem } from '@/entities/folder/lib/types'

export const mockCards: CardFolderItem[] = [
  {
    id: 1,
    userName: 'Ivan',
    name: 'Папка',
    description: 'ddddsddddsddddsDDDDASS2424432rfdsfhx fsdfg sfdsf sd',
    category: 'Медецина',
    topics: [
      {
        id: 1,
        name: 'Тема 1',
        description: 'Описание темы 1',
        dateCreated: '2023-07-20',
        percentStudy: 10,
        cards: [
          {
            id: 1,
            word: 'Word 1',
            translate: 'Перевод 1',
          },
          {
            id: 2,
            word: 'Word 2',
            translate: 'Перевод 2',
          },
        ],
      },
      {
        id: 2,
        name: 'Тема 2',
        description: 'Описание темы 2',
        dateCreated: '2023-07-20',
        percentStudy: 10,
        cards: [],
      },
    ],
  },
  {
    id: 2,
    userName: 'Ivan3',
    name: 'Папка3',
    description: 'ddddsddddsddddsDDDDASS2424432rfdsfhx fsdfg sfdsf sd',
    category: 'Медецина',
    topics: [],
  },
  {
    id: 3,
    userName: 'Ivan3',
    name: 'Папка3',
    description: 'ddddsddddsddddsDDDDASS2424432rfdsfhx fsdfg sfdsf sd',
    category: 'Медецина',
    topics: [],
  },
  {
    id: 4,
    userName: 'Ivan3',
    name: 'Папка3',
    description: 'ddddsddddsddddsDDDDASS2424432rfdsfhx fsdfg sfdsf sd',
    category: 'Медецина',
    topics: [],
  },
  {
    id: 5,
    userName: 'Ivan3',
    name: 'Папка3',
    description: 'ddddsddddsddddsDDDDASS2424432rfdsfhx fsdfg sfdsf sd',
    category: 'Медецина',
    topics: [],
  },
]

export const totalCards = 12

export const mockCategories: CardCategoriesItem[] = [
  { id: 1, name: 'Медецина' },
  { id: 2, name: 'Папка2' },
  { id: 3, name: 'Папка3' },
  { id: 4, name: 'Папка4' },
  { id: 5, name: 'Папка5' },
]

export const mockUserFolders: CardFolderItem[] = [
  {
    id: 1,
    name: 'Item 1',
    description: 'Оисание 1',
    dateCreated: '2023-07-20',
    category: 'categories 1',
    topics: [
      {
        id: 1,
        name: 'Topic 1',
        description: 'Description for Topic 1',
        dateCreated: '2023-07-20',
        percentStudy: 10,
        cards: [],
      },
      {
        id: 2,
        name: 'Topic 2',
        dateCreated: '2023-07-20',
        description: 'Description for Topic 1',
        percentStudy: 100,
        cards: [],
      },
      {
        id: 3,
        name: 'Topic 3',
        dateCreated: '2023-07-20',
        description: 'Description for Topic 1',
        percentStudy: 70,
        cards: [],
      },
    ],
  },
  {
    id: 2,
    name: 'Item 2',
    description: 'Оисание 2',
    dateCreated: '2023-07-20',
    category: 'categories 2',
    topics: [
      {
        id: 1,
        name: 'Topic 1',
        description: 'Description for Topic 1',
        dateCreated: '2023-07-20',
        percentStudy: 10,
        cards: [],
      },
      {
        id: 2,
        name: 'Topic 2',
        description: 'Description for Topic 1',
        dateCreated: '2023-07-20',
        percentStudy: 100,
        cards: [],
      },
      {
        id: 3,
        name: 'Topic 3',
        description: 'Description for Topic 1',
        dateCreated: '2023-07-20',
        percentStudy: 70,
        cards: [],
      },
    ],
  },
]

export const mockCreateFolder = ({ name, description, category, topics }: CardFolderItem) => {
  return {
    id: Math.floor(Math.random() * 1000),
    name,
    description,
    dateCreated: new Date().toISOString().split('T')[0],
    category,
    topics: [...topics],
  }
}
export const mockUserFolder: CardFolderItem = {
  id: 1,
  name: 'File 1',
  description: 'Description for File 1',
  dateCreated: '2024-12-07',
  category: 'General',
  topics: [
    {
      id: 1,
      name: 'Topic 1',
      description: 'Description for Topic 1',
      dateCreated: '2024-12-07',
      percentStudy: 100,
      cards: [],
    },
  ],
}

type mockPutUserFolderParams = Pick<CardFolderItem, 'name' | 'description' | 'category' | 'id'>
export const mockPutUserFolder = ({ id, name, description, category }: mockPutUserFolderParams) => {
  return {
    id: id,
    name: name,
    description: description,
    category: category,
  }
}
