// import { CategoriesItem, FolderItem } from '@/entities/folder/lib/types'

// export const mockCards: FolderItem[] = [
//   {
//     id: 1,
//     userName: 'Ivan',
//     folderName: 'Папка',
//     description: 'ddddsddddsddddsDDDDASS2424432rfdsfhx fsdfg sfdsf sd',
//     categoryName: 'Медецина',
//     topics: [
//       {
//         id: 1,
//         topicName: 'Тема 1',
//         description: 'Описание темы 1',
//         dateCreated: '2023-07-20',
//         percentStudy: 10,
//         cards: [
//           {
//             id: 1,
//             sourceWord: 'Word 1',
//             translatedWord: 'Перевод 1',
//           },
//           {
//             id: 2,
//             sourceWord: 'Word 2',
//             translatedWord: 'Перевод 2',
//           },
//         ],
//       },
//       {
//         id: 2,
//         topicName: 'Тема 2',
//         description: 'Описание темы 2',
//         dateCreated: '2023-07-20',
//         percentStudy: 10,
//         cards: [],
//       },
//     ],
//   },
//   {
//     id: 2,
//     userName: 'Ivan3',
//     folderName: 'Папка3',
//     description: 'ddddsddddsddddsDDDDASS2424432rfdsfhx fsdfg sfdsf sd',
//     categoryName: 'Медецина',
//     topics: [],
//   },
//   {
//     id: 3,
//     userName: 'Ivan3',
//     folderName: 'Папка3',
//     description: 'ddddsddddsddddsDDDDASS2424432rfdsfhx fsdfg sfdsf sd',
//     categoryName: 'Медецина',
//     topics: [],
//   },
//   {
//     id: 4,
//     userName: 'Ivan3',
//     folderName: 'Папка3',
//     description: 'ddddsddddsddddsDDDDASS2424432rfdsfhx fsdfg sfdsf sd',
//     categoryName: 'Медецина',
//     topics: [],
//   },
//   {
//     id: 5,
//     userName: 'Ivan3',
//     folderName: 'Папка3',
//     description: 'ddddsddddsddddsDDDDASS2424432rfdsfhx fsdfg sfdsf sd',
//     categoryName: 'Медецина',
//     topics: [],
//   },
// ]

// export const totalCards = 12

// export const mockCategories: CategoriesItem[] = [
//   { id: 1, categoryName: 'Медецина' },
//   { id: 2, categoryName: 'Папка2' },
//   { id: 3, categoryName: 'Папка3' },
//   { id: 4, categoryName: 'Папка4' },
//   { id: 5, categoryName: 'Папка5' },
// ]

// export const mockUserFolders: FolderItem[] = [
//   {
//     id: 1,
//     folderName: 'Item 1',
//     description: 'Оисание 1',
//     dateCreated: '2023-07-20',
//     categoryName: 'categories 1',
//     topics: [
//       {
//         id: 1,
//         topicName: 'Topic 1',
//         description: 'Description for Topic 1',
//         dateCreated: '2023-07-20',
//         percentStudy: 10,
//         cards: [],
//       },
//       {
//         id: 2,
//         topicName: 'Topic 2',
//         description: 'Description for Topic 1',
//         dateCreated: '2023-07-20',
//         percentStudy: 100,
//         cards: [],
//       },
//       {
//         id: 3,
//         topicName: 'Topic 3',
//         description: 'Description for Topic 1',
//         dateCreated: '2023-07-20',
//         percentStudy: 70,
//         cards: [],
//       },
//     ],
//   },
//   {
//     id: 2,
//     folderName: 'Item 2',
//     description: 'Оисание 2',
//     dateCreated: '2023-07-20',
//     categoryName: 'categories 2',
//     topics: [
//       {
//         id: 1,
//         topicName: 'Topic 1',
//         description: 'Description for Topic 1',
//         dateCreated: '2023-07-20',
//         percentStudy: 10,
//         cards: [],
//       },
//       {
//         id: 2,
//         topicName: 'Topic 2',
//         description: 'Description for Topic 1',
//         dateCreated: '2023-07-20',
//         percentStudy: 100,
//         cards: [],
//       },
//       {
//         id: 3,
//         topicName: 'Topic 3',
//         description: 'Description for Topic 1',
//         dateCreated: '2023-07-20',
//         percentStudy: 70,
//         cards: [],
//       },
//     ],
//   },
// ]

// export const mockCreateFolder = ({ folderName, description, categoryName, topics }: FolderItem) => {
//   return {
//     id: Math.floor(Math.random() * 1000),
//     folderName,
//     description,
//     dateCreated: new Date().toISOString().split('T')[0],
//     categoryName,
//     topics: [...topics],
//   }
// }
// export const mockUserFolder: FolderItem = {
//   id: 1,
//   folderName: 'File 1',
//   description: 'Description for File 1',
//   dateCreated: '2024-12-07',
//   categoryName: 'General',
//   topics: [
//     {
//       id: 1,
//       topicName: 'Topic 1',
//       description: 'Description for Topic 1',
//       dateCreated: '2024-12-07',
//       percentStudy: 100,
//       cards: [],
//     },
//   ],
// }

// type mockPutUserFolderParams = Pick<FolderItem, 'folderName' | 'description' | 'categoryName' | 'id'>
// export const mockPutUserFolder = ({ id, folderName, description, categoryName }: mockPutUserFolderParams) => {
//   return {
//     id: id,
//     name: folderName,
//     description: description,
//     category: categoryName,
//   }
// }
