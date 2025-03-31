import { AppDispatch } from '@/app/store/configureStore'
import { FolderItem } from '@/entities/folder/lib/types'
import { updateUserFile } from '@/entities/folder/model/store'
interface TitleSaveParams {
  dataFolder: FolderItem
  dispatch: AppDispatch
}
export function handleTitleSave({ dataFolder, dispatch }: TitleSaveParams) {
  return function (newValue: string) {
    dispatch(updateUserFile({ fileId: dataFolder.id, fileData: { ...dataFolder, folderName: newValue } }))
  }
}
