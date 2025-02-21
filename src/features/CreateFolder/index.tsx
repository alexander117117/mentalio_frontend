import { ModalWrapper } from '@/shared/ui/ModalWrapper'
import { DescriptionFolder } from '@/shared/ui/buttons/ButtonAddFolderPlus/components/DescriptionFolder'
import { InputAddFolder } from '@/shared/ui/buttons/ButtonAddFolderPlus/components/InputAddFolder'
import { SelectAddFolder } from '@/shared/ui/buttons/ButtonAddFolderPlus/components/SelectAddFolder'
import { ButtonControlFolder } from '@/shared/ui/buttons/ButtonControlFolder'

import { useEffect, useState } from 'react'
import { getListCategories } from './model/api/index.ts'

import { validateFolderName, validateCategory, validateTopicName } from '@/entities/folder/lib/validation/index.ts'
import { handleOnSubmit } from './lib/handeles/index.ts'
import { useCreateFolderForm } from './lib/form/index.ts'

interface CreateFolderProps {
  isModalOpen: boolean
  setIsModalOpen: (isOpen: boolean) => void
  quantityTopicInput: number
  setQuantityTopicInput: (quantity: number) => void
}
export function CreateFolder({ isModalOpen, setIsModalOpen }: CreateFolderProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [errorServer, setErrorServer] = useState<string>('')

  const { setValue, watch, register, handleSubmit, errors, fields, append, remove } = useCreateFolderForm()

  useEffect(() => {
    // getListCategories()
  }, [])

  return (
    <ModalWrapper isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} isDark={true}>
      <div className="pb-12 md:pb-16 relative">
        <h2 className="text-white text-2xl sm:text-4xl font-normal mb-6 sm:mb-10 text-center">Создание папки</h2>

        <form
          onSubmit={handleSubmit((data) => handleOnSubmit(data))}
          className="w-full sm:w-[490px] flex flex-col gap-[10px] p-3 sm:p-5 rounded-[15px] text-white"
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
            placeholder="Описание папки...\nНапример: для изучения испанского языка (уровень A1)"
          />
          {errorServer && <p className="text-red-500 text-center">{errorServer}</p>}
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-evenly">
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
            {fields.length < 5 && (
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
      </div>
    </ModalWrapper>
  )
}
