import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory } from '@/features/pagination/model/store/catalogSlice'
import { CategoryItem } from './component/CategoryItem'
import { getAllCategoriesThunk } from '@/features/pagination/model/store/catalogThunks'
import type { AppDispatch, RootState } from '@/app/store/configureStore'
import { CartCategoriesItem } from '@/features/pagination/lib/types.ts'

export const Category = () => {
  const { category, allCategories, error } = useSelector((state: RootState) => state.catalog)
  const dispatch = useDispatch<AppDispatch>()
  const [selectedCatalog, setSelectedCatalog] = useState<string | null>(null)
  const [listCategors, setListCategors] = useState<CartCategoriesItem[]>()
  useEffect(() => {
    dispatch(getAllCategoriesThunk())
  }, [dispatch])

  useEffect(() => {
    if (allCategories?.length > 0) {
      setListCategors(allCategories)
    }
  }, [allCategories, dispatch])

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
        {listCategors ? (
          listCategors.map((item, index: number) => (
            <CategoryItem
              key={item.id}
              title={item.name}
              isActive={category === item.name}
              onClick={() => handleCategorySelect(item.name)}
            />
          ))
        ) : (
          <p>Данные не под грузились(</p>
        )}
      </div>
    </div>
  )
}
