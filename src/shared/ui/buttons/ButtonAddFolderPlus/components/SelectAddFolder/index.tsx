import { useState } from 'react'
import cn from 'classnames'
import { SelectItem } from './components/SelectItem/SelectItem'
import { UseFormRegisterReturn, UseFormSetValue } from 'react-hook-form'
import { TextError } from '@/shared/ui/TextError/index.tsx'
import { RootState } from '@/app/store/configureStore'
import { useSelector } from 'react-redux'
import './SelectAddFolder.css'
interface SelectAddFolderProps {
  register: UseFormRegisterReturn
  setValue: UseFormSetValue<any>
  watchCategory: string
  error?: string
}
export const SelectAddFolder = ({ register, setValue, watchCategory, error }: SelectAddFolderProps) => {
  const { allCategories } = useSelector((state: RootState) => state.catalog)
  const [isOpen, setIsOpen] = useState(false)
  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  const chosenTopic = watchCategory || 'Выберите категорию'

  const handleChoose = (category: string) => {
    setValue('categoryName', category)
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
          'w-full bg-[#171717] outline-none rounded-[10px] px-3 py-[24px] text-base cursor-pointer selectCategory',
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
          {allCategories.map((item, index) => (
            <SelectItem
              key={index}
              item={item.categoryName}
              isSelected={item.categoryName === watchCategory}
              onSelect={handleChoose}
            />
          ))}
        </div>
      )}

      <TextError errorMessage={error} />
    </div>
  )
}
