import { CreateFolder } from '@/entities/folder/lib/types/form'

interface handleOnSubmitProps {
  data: CreateFolder
  setErrorServer: (error: string) => void
  reset: () => void
}
export const handleOnSubmit = ({ data, setErrorServer, reset }: handleOnSubmitProps) => {
  const respons = true
  if (respons) {
    console.log('onSubmit: ', data)
    setErrorServer('')
    reset()
  } else {
    setErrorServer('Произошла ошибка, попробуйте позже')
  }
}
