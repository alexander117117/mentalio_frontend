import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { CreateFolder } from '@/widgets/folders/createFolder'

interface ButtonAddFolderPlusProps {
  isBig?: boolean
  myFolderPage?: boolean
}

export const ButtonAddFolderPlus = ({ isBig = false, myFolderPage = false }: ButtonAddFolderPlusProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [quantityTopicInput, setQuantityTopicInput] = useState<number>(1) //количество инпутов для название темы
  return (
    <>
      {/* Кнопки для открытия модального окна добавления папки */}
      {myFolderPage ? (
        <>
          <button
            className="w-full md:w-[75px] 2xl:w-[100px] h-[70px] md:aspect-square bg-userFolder flex items-center justify-center rounded-[15px] md:rounded-full mx-auto"
            aria-label="Добавить новую папку"
            onClick={() => setIsModalOpen(true)}
          >
            <FaPlus className="hidden md:block text-base md:text-3xl 2xl:text-[40px]" />
            <span className="block md:hidden text-base font-bold">Добавить папку</span>
          </button>
        </>
      ) : (
        <>
          <button
            className={`w-[40px] sm:w-[50px] ${isBig ? 'lg:w-[70px]' : ''} aspect-square flex items-center justify-center rounded-full bg-[#DEF3DD] absolute left-1/2 -translate-x-1/2 bottom-[-20px] xs:bottom-[-8px] sm:bottom-[-25px] ${isBig ? 'lg:bottom-[-35px]' : ''}`}
            aria-label="Добавить новую папку"
            onClick={() => setIsModalOpen(true)}
          >
            <FaPlus className={`text-primary text-[13px] xs:text-[17px] ${isBig ? 'lg:text-[24px]' : ''}`} />
          </button>
        </>
      )}

      {/* модальное окно */}
      <CreateFolder
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        quantityTopicInput={quantityTopicInput}
        setQuantityTopicInput={setQuantityTopicInput}
      />
    </>
  )
}
