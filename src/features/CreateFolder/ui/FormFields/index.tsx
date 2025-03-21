import { validateFolderName, validateCategory, validateTopicName } from '@/entities/folder/lib/validation'
import { DescriptionFolder } from '@/shared/ui/buttons/ButtonAddFolderPlus/components/DescriptionFolder'
import { InputAddFolder } from '@/shared/ui/buttons/ButtonAddFolderPlus/components/InputAddFolder'
import { SelectAddFolder } from '@/shared/ui/buttons/ButtonAddFolderPlus/components/SelectAddFolder'
import { ButtonDelete } from '../../../../shared/ui/ButtonDelete'
import { FieldErrors, UseFieldArrayRemove, UseFormRegister, UseFormSetValue, UseFormWatch } from 'react-hook-form'
import { CreateFolder, CreateTopicForm } from '@/entities/folder/lib/types/form'
import { TextError } from '@/shared/ui/TextError'

interface FormFieldsProps {
  serverErrorMessage: string
  fields: CreateTopicForm[]
  register: UseFormRegister<CreateFolder>
  errors: FieldErrors<CreateFolder>
  errorStore: string | null
  setValue: UseFormSetValue<CreateFolder>
  watch: UseFormWatch<CreateFolder>
  remove: UseFieldArrayRemove
}
export function FormFields({
  serverErrorMessage,
  register,
  errors,
  errorStore,
  setValue,
  watch,
  remove,
  fields,
}: FormFieldsProps) {
  return (
    <>
      <InputAddFolder
        register={register('folderName', validateFolderName)}
        error={errors.folderName?.message}
        type={'text'}
        name={'folderName'}
        placeholder={'Введите название папки...'}
      />

      <SelectAddFolder
        register={register('categoryName', validateCategory)}
        setValue={setValue}
        watchCategory={watch('categoryName')}
        error={errors.categoryName?.message}
      />

      {fields.map((field, index) => (
        <InputAddFolder
          key={field.id}
          register={register(`topics.${index}.topicName`, validateTopicName)}
          error={errors.topics?.[index]?.topicName?.message}
          type="text"
          name={`topics[${index}].topicName`}
          placeholder="Введите название темы..."
        >
          {fields.length > 1 && <ButtonDelete handeleOnClick={() => remove(index)} />}
        </InputAddFolder>
      ))}

      <DescriptionFolder
        register={register('description')}
        error={errors.description?.message}
        name="topicDescription"
        placeholder={`Описание папки...\nНапример: для изучения испанского языка (уровень A1)`}
      />
      {serverErrorMessage ? <TextError errorMessage={serverErrorMessage} /> : <TextError errorMessage={errorStore} />}
    </>
  )
}
