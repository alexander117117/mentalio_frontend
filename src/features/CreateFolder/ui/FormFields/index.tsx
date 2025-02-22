import { validateFolderName, validateCategory, validateTopicName } from '@/entities/folder/lib/validation'
import { DescriptionFolder } from '@/shared/ui/buttons/ButtonAddFolderPlus/components/DescriptionFolder'
import { InputAddFolder } from '@/shared/ui/buttons/ButtonAddFolderPlus/components/InputAddFolder'
import { SelectAddFolder } from '@/shared/ui/buttons/ButtonAddFolderPlus/components/SelectAddFolder'
import { ButtonDelete } from '../ButtonDelete'
import { FieldErrors, UseFieldArrayRemove, UseFormRegister, UseFormSetValue, UseFormWatch } from 'react-hook-form'
import { CreateFolder, CreateTopicForm } from '@/entities/folder/lib/types/form'
import { TextError } from '@/shared/ui/TextError'

interface FormFieldsProps {
  errorServerMessages: string
  fields: CreateTopicForm[]
  register: UseFormRegister<CreateFolder>
  errors: FieldErrors<CreateFolder>
  setValue: UseFormSetValue<CreateFolder>
  watch: UseFormWatch<CreateFolder>
  remove: UseFieldArrayRemove
}
export function FormFields({
  errorServerMessages,
  register,
  errors,
  setValue,
  watch,
  remove,
  fields,
}: FormFieldsProps) {
  return (
    <>
      <InputAddFolder
        register={register('name', validateFolderName)}
        error={errors.name?.message}
        type={'text'}
        name={'folderName'}
        placeholder={'Введите название папки...'}
      />

      <SelectAddFolder
        register={register('category', validateCategory)}
        setValue={setValue}
        watchCategory={watch('category')}
        error={errors.category?.message}
      />

      {fields.map((field, index) => (
        <InputAddFolder
          key={field.id}
          register={register(`topics.${index}.name`, validateTopicName)}
          error={errors.topics?.[index]?.name?.message}
          type="text"
          name={`topics[${index}].name`}
          placeholder="Введите название темы..."
        >
          {fields.length > 1 && <ButtonDelete idObject={index} handeleOnClick={() => remove(index)} />}
        </InputAddFolder>
      ))}

      <DescriptionFolder
        register={register('description')}
        error={errors.description?.message}
        name="topicDescription"
        placeholder={`Описание папки...\nНапример: для изучения испанского языка (уровень A1)`}
      />

      <TextError errorMessage={errorServerMessages} />
    </>
  )
}
