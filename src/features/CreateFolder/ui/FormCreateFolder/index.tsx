import { useCreateFolderForm } from '../../lib/form'
import { handleOnSubmit } from '../../lib/handeles'
import { useState } from 'react'
import { FormFields } from '../FormFields'
import { FormPanel } from '../FormPanel'
interface FormCreateFolderProps {setIsModalOpen: (isOpen: boolean) => void}

export function FormCreateFolder({setIsModalOpen}: FormCreateFolderProps) {
  const [errorServerMessages, setErrorServerMessages] = useState('')
  const { reset, handleSubmit, append, register, errors, setValue, watch, remove, fields } = useCreateFolderForm()

  return (
    <form
      onSubmit={handleSubmit((data) => handleOnSubmit({ data, setErrorServerMessages, reset, setIsModalOpen }))}
      className="w-full sm:w-[490px] flex flex-col gap-[10px] p-3 sm:p-5 rounded-[15px] text-white"
    >
      <FormFields
        errorServerMessages={errorServerMessages}
        register={register}
        errors={errors}
        setValue={setValue}
        watch={watch}
        remove={remove}
        fields={fields}
      />
      <div className="absolute bottom-0 left-0 right-0 flex md:flex-row flex-col gap-4 md:gap-0 items-center justify-evenly px-3 sm:px-5 xl:px-0">
        <FormPanel fields={fields} append={append} />
      </div>
    </form>
  )
}
