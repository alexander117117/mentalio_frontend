export { default as catalogSlice } from './catalog/catalogSlice'
export { setCategory, setQuery, setPage } from './catalog/catalogSlice'
export {
  paginationThunk,
  paginationNextPageThunk,
  getAllCategoriesThunk,
  getCardsFolderMentalio,
} from './catalog/catalogThunks'

export { default as userFilesSlice } from './userFiles/userFilesSlice'
export { clearError } from './userFiles/userFilesSlice'
export {
  getUserFiles,
  createUserFile,
  deleteUserFile,
  updateUserFile,
  getFileTopics,
  addTopicToFile,
  deleteTopicFromFile,
  getTopicCards,
  addCardToTopic,
  deleteCardFromTopic,
  addPublicFile,
} from './userFiles/userFilesThunks'
