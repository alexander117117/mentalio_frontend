import { useForm, useFieldArray } from 'react-hook-form'
import { CreateWords } from '@/features/topic/CreateWordForm/lib/types'

export function useCreateWordForm() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
    setValue,
    watch,
  } = useForm<CreateWords>({
    mode: 'onSubmit',
    defaultValues: {
      typedWord: '',
      translated_words: [],
      imageFile: undefined,
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'translated_words',
  })

  // Валидация на "минимум 1 перевод"
  register('translated_words', {
    validate: (value) => {
      if (!value || value.length === 0) {
        return 'Должно быть как минимум одно слово'
      }
      return true
    },
  })

  return {
    register,
    handleSubmit,
    errors,
    reset,
    getValues,
    setValue,
    watch,
    fields,
    append,
    remove,
  }
}
