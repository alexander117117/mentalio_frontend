import { CreateFolder } from '@/entities/folder/lib/types/form'

interface handleOnSubmitProps {
  data: CreateFolder
  setErrorServerMessages: (error: string) => void
  reset: () => void
  setIsModalOpen: (isOpen: boolean) => void
}
export const handleOnSubmit = ({ data, setErrorServerMessages, reset, setIsModalOpen }: handleOnSubmitProps) => {
  const respons = true
  if (respons) {
    console.log('onSubmit: ', data)
    setErrorServerMessages('')
    reset()
    setIsModalOpen(false)
  } else {
    setErrorServerMessages('Произошла ошибка, попробуйте позже')
  }
}
