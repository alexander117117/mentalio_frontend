import { AppDispatch } from '@/app/store/configureStore'
import { CreateFolder } from '@/entities/folder/lib/types/form'
import { createUserFile } from '@/entities/folder/model/store/userFiles/userFilesThunks'

interface handleOnSubmitProps {
  data: CreateFolder
  setServerErrorMessage: (error: string) => void
  reset: () => void
  setIsModalOpen: (isOpen: boolean) => void
  dispatch: AppDispatch
}
export const handleOnSubmit = async ({
  data,
  setServerErrorMessage,
  reset,
  setIsModalOpen,
  dispatch,
}: handleOnSubmitProps) => {
  const res = await dispatch(createUserFile(data))
  if (res.meta.requestStatus === 'fulfilled') {
    setServerErrorMessage('')
    reset()
    setIsModalOpen(false)
  } else {
    setServerErrorMessage('Произошла ошибка, попробуйте позже')
  }
}
