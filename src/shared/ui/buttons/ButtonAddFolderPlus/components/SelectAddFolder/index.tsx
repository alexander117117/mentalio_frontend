import React from 'react'
import './SelectAddFolder.css'
export const SelectAddFolder = () => {
  return (
    <>
      <select
        name="folderCategory"
        id=""
        className="w-full bg-transparent outline-none border border-[#DDDCDC] rounded-[30px] px-3 py-[12px] sm:py-[24px] text-xs sm:text-lg text-[#dddcdc] cursor-pointer hover:bg-directoryFolder selectCategory"
      >
        <option value="" className="bg-transparent">
          Выберите категорию
        </option>
        <option value="medicine" className="bg-transparent">
          Медицина
        </option>
        <option value="chemistry" className="bg-transparent">
          Химия
        </option>
        <option value="exactSciences" className="bg-transparent">
          Точные науки
        </option>
        <option value="mathematics" className="bg-transparent">
          Математика
        </option>
        <option value="informatics" className="bg-transparent">
          Информатика
        </option>
        <option value="other" className="bg-transparent">
          Другое
        </option>
      </select>
    </>
  )
}
