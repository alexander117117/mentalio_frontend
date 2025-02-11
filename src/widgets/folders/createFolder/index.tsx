import React from 'react'
import { ModalWrapper } from '@/shared/ui/ModalWrapper'
import { InputAddFolder } from '@/shared/ui/buttons/ButtonAddFolderPlus/components/InputAddFolder'
import { SelectAddFolder } from '@/shared/ui/buttons/ButtonAddFolderPlus/components/SelectAddFolder'

interface CreateFolder {
  isModalOpen: boolean
  setIsModalOpen: (isOpen: boolean) => void
  quantityTopicInput: number
  setQuantityTopicInput: (quantity: number | ((prev: number) => number)) => void
}

export const CreateFolder = ({
  isModalOpen,
  setIsModalOpen,
  quantityTopicInput,
  setQuantityTopicInput,
}: CreateFolder) => {
  return (
    <ModalWrapper isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <div className="w-50">
        <h2 className="text-2xl sm:text-4xl font-normal mb-6 sm:mb-10 text-center">Создание папки</h2>

        {/* Form для добавления папки */}
        <form className="w-full sm:w-[490px] flex flex-col gap-[10px] p-3 sm:p-5 bg-directoryFolder rounded-[15px] text-white">
          {/* название папки */}
          <InputAddFolder type={'text'} name={'folderName'} placeholder={'Введите название папки...'} />
          {/* категории папки, dropdown */}
          <SelectAddFolder />
          {/* название темы, максимум 4 темы */}
          {quantityTopicInput <= 4 &&
            [...Array(quantityTopicInput)].map((_, index) => (
              <InputAddFolder
                key={index}
                type={'text'}
                name={`folderTopic${index + 1}`}
                placeholder={'Введите название темы'}
                isTopic={index === quantityTopicInput - 1 ? true : false}
                setQuantityTopicInput={() => setQuantityTopicInput((prev) => prev + 1)} // update количество инпутов
                quantityTopicInput={quantityTopicInput}
              />
            ))}
          {/* Кнопка для отправки формы добавления папки */}
          <button
            type="submit"
            className="bg-[#BDFF9D] py-[12px] sm:py-[23px] rounded-[30px] text-sm sm:text-xl font-bold text-black mt-[10px] sm:mt-[30px]"
          >
            Создать папку
          </button>
        </form>
      </div>
    </ModalWrapper>
  )
}
