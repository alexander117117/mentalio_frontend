import * as React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// @ts-ignore
import { setCategory } from '../../../../store/catalogSlice.js'
import { CategoryItem } from './component/CategoryItem'
// @ts-ignore
import { getAllCategoriesThunk } from '../../../../store/catalogThunks.js'

export const Category: React.FC = () => {
  const { category, allCategories } = useSelector((state: any) => state.catalog)
  const dispatch = useDispatch()
  const [selectedCatalog, setSelectedCatalog]: any = useState(null)

  useEffect(() => {
    // @ts-ignore
    dispatch(getAllCategoriesThunk())
  }, [])

  // Обработчик выбора категории
  const handleCategorySelect = (value: string) => {
    if (selectedCatalog === value) {
      setSelectedCatalog(null)
      // @ts-ignore
      dispatch(setCategory(null))
    } else {
      setSelectedCatalog(value)
      // @ts-ignore
      dispatch(setCategory(value))
    }
  }

  return (
    <>
      <div className="mt-8">
        <h1 className="text-xl sm:text-[28px] font-bold">Категории</h1>

        <div className="w-full sm:w-[560px] grid grid-cols-3 gap-[10px] mt-[12px] sm:mt-5">
          {allCategories.map((item: string, index: number) => (
            <CategoryItem
              key={index}
              title={item}
              isActive={category === item} // Подсветка активного элемента
              onClick={() => handleCategorySelect(item)} // Устанавливаем категорию
            />
          ))}
        </div>
      </div>
    </>
  )
}
