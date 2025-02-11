import React from 'react'
import { FaPlus } from 'react-icons/fa'

interface InputAddFolderProps {
  type: string
  name: string
  placeholder?: string
  isTopic?: boolean
  setQuantityTopicInput?: () => void
  quantityTopicInput?: number
}

export const InputAddFolder = ({
  type,
  name,
  placeholder = '',
  isTopic = false,
  setQuantityTopicInput,
  quantityTopicInput = 0,
}: InputAddFolderProps) => {
  return (
    <>
      <div className="relative">
        <input
          type={type}
          className="w-full bg-transparent outline-none border border-[#DDDCDC] rounded-[30px] px-3 py-[12px] sm:py-[24px] text-xs sm:text-lg"
          name={name}
          placeholder={placeholder}
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
    </>
  )
}
