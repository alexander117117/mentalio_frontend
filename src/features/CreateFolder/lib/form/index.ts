import { useForm, useFieldArray } from 'react-hook-form'
import { CreateFolder } from '@/entities/folder/lib/types/form'

export function useCreateFolderForm() {
  const {
    setValue,
    watch,
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<CreateFolder>({
    mode: 'onChange',
    defaultValues: {
      name: '',
      description: '',
      category: '',
      topics: [
        {
          id: 1,
          name: '',
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
