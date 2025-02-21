import { validateFolderName, validateCategory, validateTopicName } from '@/entities/folder/lib/validation'
import { DescriptionFolder } from '@/shared/ui/buttons/ButtonAddFolderPlus/components/DescriptionFolder'
import { InputAddFolder } from '@/shared/ui/buttons/ButtonAddFolderPlus/components/InputAddFolder'
import { SelectAddFolder } from '@/shared/ui/buttons/ButtonAddFolderPlus/components/SelectAddFolder'
import { ButtonControlFolder } from '@/shared/ui/buttons/ButtonControlFolder'
import { useCreateFolderForm } from '../lib/form'
import { handleOnSubmit } from '../lib/handeles'
import { useState } from 'react'

export function FormCreatFolder() {
  const [errorServer, setErrorServer] = useState('')
  const { setValue, reset, watch, register, handleSubmit, errors, fields, append, remove } = useCreateFolderForm()

  return (
    <form
      onSubmit={handleSubmit((data) => handleOnSubmit({ data, setErrorServer, reset }))}
      className="w-full md:w-[473px] flex flex-col gap-[10px] p-0 sm:p-5 rounded-[15px] text-white"
    >
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
        />
      ))}

      <DescriptionFolder
        register={register('description')}
        error={errors.description?.message}
        name="topicDescription"
        placeholder="Описание папки... &#10;Например: для изучения испанского языка (уровень A1)"
      />
      {errorServer && <p className="text-red-500 text-center">{errorServer}</p>}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-evenly gap-3 md:gap-0 flex-col md:flex-row px-0 sm:px-5 md:px-0">
        {fields.length > 1 && (
          <ButtonControlFolder
            type="button"
            customPadding="px-5 md:px-11"
            color="text-red-500"
            onClick={() => remove(fields.length - 1)}
          >
            Удалить тему
          </ButtonControlFolder>
        )}
        {fields.length < 4 && (
          
          <ButtonControlFolder
            type="button"
            customPadding="px-5 md:px-11"
            onClick={() => append({ id: fields.length, name: '' })}
          >
            Добавить тему
          </ButtonControlFolder>
        )}

        <ButtonControlFolder type="submit" color={'text-primary'} customPadding="px-5 md:px-11">
          Создать папку
        </ButtonControlFolder>
      </div>
    </form>
  )
}
