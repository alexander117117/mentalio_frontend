import { TextError } from '@/shared/ui/TextError'
import { UseFormRegisterReturn } from 'react-hook-form'
import { FaPlus } from 'react-icons/fa'

interface InputAddFolderProps {
  type: string
  name: string
  placeholder?: string
  error?: string
  isTopic?: boolean
  setQuantityTopicInput?: () => void
  quantityTopicInput?: number
  register?: UseFormRegisterReturn
}

export const InputAddFolder = ({
  type,
  name,
  placeholder = '',
  error,
  isTopic = false,
  setQuantityTopicInput,
  quantityTopicInput = 0,
  register,
}: InputAddFolderProps) => {
  return (
    <>
      <div className="relative">
        <input
          type={type}
          className="w-full bg-[#171717] outline-none rounded-[10px] px-3 py-[12px] sm:py-[24px] text-xs sm:text-base"
          name={name}
          placeholder={placeholder}
          {...register}
        />
        {
          // кнопка для добавления инпутов "названия темы". Максимум 4 темы
          isTopic && quantityTopicInput < 4 ? (
            <button
              type="button"
              className="w-[20px] sm:w-[30px] aspect-square rounded-full bg-[#BDFF9D] absolute right-[10px] sm:right-5 top-1/2 -translate-y-1/2 flex items-center justify-center"
              onClick={setQuantityTopicInput}
            >
              <FaPlus className="text-[10px] sm:text-base text-black" />
            </button>
          ) : null
        }
      </div>
      <TextError errorMessage={error} />
    </>
  )
}
