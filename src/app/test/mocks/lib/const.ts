export const mockCards = [
  { id: 1, name: 'Ivan', category_name: 'Папка', description: 'ddddsddddsddddsDDDDASS2424432rfdsfhx fsdfg sfdsf sd' },
  { id: 2, name: 'Ivan3', category_name: 'Папка3', description: 'ddddsddddsddddsDDDDASS2424432rfdsfhx fsdfg sfdsf sd' },
  { id: 3, name: 'Ivan3', category_name: 'Папка3', description: 'ddddsddddsddddsDDDDASS2424432rfdsfhx fsdfg sfdsf sd' },
  { id: 4, name: 'Ivan3', category_name: 'Папка3', description: 'ddddsddddsddddsDDDDASS2424432rfdsfhx fsdfg sfdsf sd' },
  { id: 5, name: 'Ivan3', category_name: 'Папка3', description: 'ddddsddddsddddsDDDDASS2424432rfdsfhx fsdfg sfdsf sd' },
]

export const totalCards = 12

export const mockCategories = [
  { id: 1, name: 'Папка' },
  { id: 2, name: 'Папка2' },
  { id: 3, name: 'Папка3' },
  { id: 4, name: 'Папка4' },
  { id: 5, name: 'Папка5' },
]

export const mockUserFolders = [
  {
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
        cards: [
          {
            id: 1,
            question: { text: '1', language: 'Исп' },
            answer: { text: '2', language: 'Рус', transcription: '' },
            chosen: true,
          },
        ],
      },
    ],
  },
]

export const mockCreateFolder = {
  id: Math.floor(Math.random() * 1000),
  name: 'New File',
  description: '',
  dateCreated: new Date().toISOString().split('T')[0],
  category: 'Category 1',
  topics: [],
}

export const mockUserFolder = {
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

interface mockPutUserFolderParams {
  idFolder: number | string | undefined
  NameFolder: string | undefined
  desc: string | undefined
  category: string | undefined
}
export const mockPutUserFolder = ({ idFolder, NameFolder, desc, category }: mockPutUserFolderParams) => {
  return {
    id: idFolder,
    name: NameFolder,
    description: desc,
    dateCreated: new Date().toISOString().split('T')[0],
    category: category,
  }
}
