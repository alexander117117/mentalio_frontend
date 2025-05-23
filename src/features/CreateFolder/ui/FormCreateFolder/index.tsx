import { useCreateWordForm } from '../../lib/form'
import { handleOnSubmit } from '../../lib/handles'
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
  const [serverErrorMessage, setServerErrorMessage] = useState('')
  const { reset, handleSubmit, append, register, errors, setValue, watch, remove, fields } = useCreateWordForm()

  useEffect(() => {
    dispatch(clearError())
  }, [])

  return (
    <form
      onSubmit={handleSubmit((data) =>
        handleOnSubmit({ data, setServerErrorMessage, reset, setIsModalOpen, dispatch }),
      )}
      className="w-full sm:w-[490px] flex flex-col gap-[10px] p-3 sm:p-[5px_5px_0px_5px] rounded-[15px] text-white"
    >
      <FormFields
        serverErrorMessage={serverErrorMessage}
        register={register}
        errors={errors}
        errorStore={error}
        setValue={setValue}
        watch={watch}
        remove={remove}
        fields={fields}
      />
      <div className="flex md:flex-row flex-col gap-4 md:gap-0 items-center justify-evenly mt-7 sm:mt-[72px]">
        <FormPanel fields={fields} append={append} />
      </div>
    </form>
  )
}
