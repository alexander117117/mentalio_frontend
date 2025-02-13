import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory } from '@/features/pagination/model/store/catalogSlice'
import { CategoryItem } from './component/CategoryItem'
import { getAllCategoriesThunk } from '@/features/pagination/model/store/catalogThunks'
import type { AppDispatch, RootState } from '@/app/store/configureStore'

export const Category = () => {
  const { category, allCategories } = useSelector((state: RootState) => state.catalog)
  const dispatch = useDispatch<AppDispatch>()
  const [selectedCatalog, setSelectedCatalog] = useState<string | null>(null)

  useEffect(() => {
    dispatch(getAllCategoriesThunk())
  }, [dispatch])

  const handleCategorySelect = (value: string) => {
    if (selectedCatalog === value) {
      setSelectedCatalog(null)
      dispatch(setCategory(null))
    } else {
      setSelectedCatalog(value)
      dispatch(setCategory(value))
    }
  }

  return (
    <div className="mt-8">
      <h1 className="text-xl sm:text-[28px] font-bold">Категории</h1>
      <div className="w-full sm:w-[560px] grid grid-cols-3 gap-[10px] mt-[12px] sm:mt-5">
        {allCategories.map((item: string, index: number) => (
          <CategoryItem
            key={index}
            title={item}
            isActive={category === item}
            onClick={() => handleCategorySelect(item)}
          />
        ))}
      </div>
    </div>
  )
}
