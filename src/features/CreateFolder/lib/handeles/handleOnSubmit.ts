import { AppDispatch } from '@/app/store/configureStore'
import { CreateFolder } from '@/entities/folder/lib/types/form'
import { createUserFile } from '@/entities/folder/model/store/userFiles/userFilesThunks'

interface handleOnSubmitProps {
  data: CreateFolder
  setErrorServerMessages: (error: string) => void
  reset: () => void
  setIsModalOpen: (isOpen: boolean) => void
  dispatch: AppDispatch
}
export const handleOnSubmit = async ({
  data,
  setErrorServerMessages,
  reset,
  setIsModalOpen,
  dispatch,
}: handleOnSubmitProps) => {
  const res = await dispatch(createUserFile(data))
  if (res.meta.requestStatus === 'fulfilled') {
    setErrorServerMessages('')
    reset()
    setIsModalOpen(false)
  } else {
    setErrorServerMessages('Произошла ошибка, попробуйте позже')
  }
}
