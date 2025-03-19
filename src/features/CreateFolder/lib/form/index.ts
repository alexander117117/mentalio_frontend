import { useForm, useFieldArray } from 'react-hook-form'
import { CreateFolder } from '@/entities/folder/lib/types/form'

export function useCreateWordForm() {
  const {
    setValue,
    watch,
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<CreateFolder>({
    mode: 'onSubmit',
    defaultValues: {
      folderName: '',
      description: '',
      categoryName: '',
      topics: [
        {
          id: '1',
          topicName: '',
        },
      ],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'topics',
  })

  return { setValue, watch, register, handleSubmit, errors, reset, fields, append, remove }
}
