import React, { useState } from 'react'
import './SelectAddFolder.css'
import { SelectItem } from './components/SelectItem/SelectItem'

export const SelectAddFolder = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [chosenTopic, setChosenTopic] = useState('Выберите категорию')
  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }
  const menuItems = ['Медицина', 'Иностранные языки', 'Точные науки', 'Профессиональные науки']
  return (
    <div className="accordion">
      <div
        onClick={toggleAccordion}
        className="w-full bg-[#171717] outline-none rounded-[10px] px-3 py-[12px] sm:py-[24px] text-xs sm:text-base text-[#9CA3AF] cursor-pointer selectCategory"
      >
        {chosenTopic}
      </div>
      {isOpen && (
        <div className="accordion-content h-[20vh] md:h-[30vh] w-full bg-[#171717] outline-none rounded-[10px] py-[10px] px-[15px] mt-[10px] overflow-y-scroll">
          {menuItems.map((item, index) => (
            <SelectItem
              key={index}
              item={item}
              chosenTopic={chosenTopic}
              onChoose={setChosenTopic}
              setIsOpen={setIsOpen}
            />
          ))}
        </div>
      )}
    </div>
  )
}
