import { useCreateFolderForm } from '../../lib/form'
import { handleOnSubmit } from '../../lib/handeles'
import { useState } from 'react'
import { FormFields } from '../FormFields'
import { FormPanel } from '../FormPanel'

export function FormCreateFolder() {
  const [errorServerMessages, setErrorServerMessages] = useState('')
  const { reset, handleSubmit, append, register, errors, setValue, watch, remove, fields } = useCreateFolderForm()

  return (
    <form
      onSubmit={handleSubmit((data) => handleOnSubmit({ data, setErrorServerMessages, reset }))}
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
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-evenly">
        <FormPanel fields={fields} append={append} />
      </div>
    </form>
  )
}
