import React, { useState } from 'react'
import { Link } from 'react-router'
import {
  home_icon_active,
  catalog_icon_active,
  folder_icon_active,
  home_icon,
  folder_icon,
  catalog_icon,
  setting_icon_active,
  setting_icon,
  search_icon,
  search_icon_active,
} from './assets'
import { FaPlus } from 'react-icons/fa'
import { CreateFolder } from 'src/widgets/folders/createFolder'
import { useLocation } from 'react-router-dom'

export const MiniNavbar = () => {
  const location = useLocation() // получаем текущее url чтобы отображать активную ссылку
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [quantityTopicInput, setQuantityTopicInput] = useState<number>(1) //количество инпутов для название темы
  return (
    <>
      <nav className="md:hidden flex items-center justify-between w-[315px] h-[58px] fixed bottom-10 left-1/2 transform -translate-x-1/2 rounded-[30px] bg-white shadow-[0px_0px_7px_0px_rgba(0,0,0,0.25)] px-3">
        {/* Первый элемент, Главная страница */}
        <Link to="/" className="w-[30px] h-[30px] flex items-center justify-center">
          <img src={location.pathname === '/' ? home_icon_active : home_icon} alt="Главная страница" className="" />
        </Link>
        {/* Второй элемент, Мои папки */}
        <Link to="/my-folders" className="w-[30px] h-[30px] flex items-center justify-center">
          <img
            src={location.pathname === '/my-folders' ? folder_icon_active : folder_icon}
            alt="Мои папки"
            className=""
          />
        </Link>
        {/* Третий элемент, кнопка открытия модального окна (добавления папки) */}
        <button
          className="w-[45px] md:w-[75px] 2xl:w-[100px] aspect-square bg-userFolder text-primary flex items-center justify-center rounded-full"
          aria-label="Добавить новую папку"
          onClick={() => setIsModalOpen(true)}
        >
          <FaPlus className="text-base md:text-3xl 2xl:text-[40px]" />
        </button>
        {/* Пятый элемент, Каталог */}
        <Link to="/catalog" className="w-[30px] h-[30px] flex items-center justify-center">
          <img src={location.pathname === '/catalog' ? catalog_icon_active : catalog_icon} alt="Каталог" className="" />
        </Link>
        {/* Шестой элемент, Настройки */}
        <Link to="/settings" className="w-[30px] h-[30px] flex items-center justify-center">
          <img
            src={location.pathname === '/settings' ? setting_icon_active : setting_icon}
            alt="Настройки"
            className=""
          />
        </Link>
      </nav>
      {/* Модальное окно добавления папки */}
      <CreateFolder
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        quantityTopicInput={quantityTopicInput}
        setQuantityTopicInput={setQuantityTopicInput}
      />
    </>
  )
}
