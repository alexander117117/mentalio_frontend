import { CreateFolder } from '@/entities/folder/lib/types/form'
import { SubmitHandler } from 'react-hook-form'

export const handleOnSubmit: SubmitHandler<CreateFolder> = async (data) => {
  console.log('onSubmit: ', data)
}
