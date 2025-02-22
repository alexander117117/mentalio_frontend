import { CreateFolder } from '@/entities/folder/lib/types/form'

interface handleOnSubmitProps {
  data: CreateFolder
  setErrorServerMessages: (error: string) => void
  reset: () => void
}
export const handleOnSubmit = ({ data, setErrorServerMessages, reset }: handleOnSubmitProps) => {
  const respons = true
  if (respons) {
    console.log('onSubmit: ', data)
    setErrorServerMessages('')
    reset()
  } else {
    setErrorServerMessages('Произошла ошибка, попробуйте позже')
  }
}
