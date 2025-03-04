import { useCreateFolderForm } from '../../lib/form'
import { handleOnSubmit } from '../../lib/handeles'
import { useEffect, useState } from 'react'
import { FormFields } from '../FormFields'
import { FormPanel } from '../FormPanel'
import { AppDispatch, RootState } from '@/app/store/configureStore'
import { useDispatch, useSelector } from 'react-redux'
import { clearError } from '@/entities/folder/model/store/userFiles/userFilesSlice'

interface FormCreateFolderProps {
  setIsModalOpen: (isOpen: boolean) => void
}
export function FormCreateFolder({ setIsModalOpen }: FormCreateFolderProps) {
  const dispatch = useDispatch<AppDispatch>()
  const { error } = useSelector((state: RootState) => state.userFiles)
  const [errorServerMessages, setErrorServerMessages] = useState('')
  const { reset, handleSubmit, append, register, errors, setValue, watch, remove, fields } = useCreateFolderForm()

  useEffect(() => {
    dispatch(clearError())
  }, [])

  return (
    <form
      onSubmit={handleSubmit((data) =>
        handleOnSubmit({ data, setErrorServerMessages, reset, setIsModalOpen, dispatch }),
      )}
      className="w-full sm:w-[490px] flex flex-col gap-[10px] p-3 sm:p-5 rounded-[15px] text-white"
    >
      <FormFields
        errorServerMessages={errorServerMessages}
        register={register}
        errors={errors}
        errorStore={error}
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
