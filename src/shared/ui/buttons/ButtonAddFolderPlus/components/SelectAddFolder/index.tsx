import { useState } from 'react'
import cn from 'classnames'
import { SelectItem } from './components/SelectItem/SelectItem'
import { UseFormRegisterReturn, UseFormSetValue } from 'react-hook-form'
import { TextError } from '@/shared/ui/TextError/index.tsx'

const menuItems = ['Медицина', 'Иностранные языки', 'Точные науки', 'Профессиональные науки']

interface SelectAddFolderProps {
  register: UseFormRegisterReturn
  setValue: UseFormSetValue<any>
  watchCategory: string
  error?: string
}
export const SelectAddFolder = ({ register, setValue, watchCategory, error }: SelectAddFolderProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  const chosenTopic = watchCategory || 'Выберите категорию'

  const handleChoose = (category: string) => {
    setValue('category', category)
    setIsOpen(false)
  }

  return (
    <div className="accordion">
      {/*
        1) Скрытый input, чтобы RHF знал о поле "category" и применял валидацию.
           2) Важно не забыть {...register}, чтобы React Hook Form "видел" поле.
           3) Значение этого input будет синхронизировано автоматически,
              ведь мы вызываем setValue('category', ...).
      */}
      <input type="text" hidden readOnly {...register} />

      {/* Отображаем текущее выбранное значение */}
      <div
        onClick={toggleAccordion}
        className={cn(
          'w-full bg-[#171717] outline-none rounded-[10px] px-3 py-[12px] sm:py-[24px] text-xs sm:text-base cursor-pointer selectCategory',
          {
            'text-[#6f7379]': chosenTopic === 'Выберите категорию',
            'text-[#f5f1f1] font-semibold': chosenTopic !== 'Выберите категорию',
          },
        )}
      >
        {chosenTopic}
      </div>

      {isOpen && (
        <div className="accordion-content h-[20vh] md:h-[30vh] w-full bg-[#171717] outline-none rounded-[10px] py-[10px] px-[15px] mt-[10px] overflow-y-scroll">
          {menuItems.map((item, index) => (
            <SelectItem key={index} item={item} isSelected={item === watchCategory} onSelect={handleChoose} />
          ))}
        </div>
      )}

      <TextError errorMessage={error} />
    </div>
  )
}
