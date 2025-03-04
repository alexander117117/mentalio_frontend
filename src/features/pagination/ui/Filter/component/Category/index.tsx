import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory } from '@/entities/folder/model/store/catalog/catalogSlice'
import { CategoryItem } from './component/CategoryItem'
import { getAllCategoriesThunk } from '@/entities/folder/model/store/catalog/catalogThunks'
import type { AppDispatch, RootState } from '@/app/store/configureStore'
import { CategoriesItem } from '@/entities/folder/lib/types'

export const Category = () => {
  const { category, allCategories } = useSelector((state: RootState) => state.catalog)
  const dispatch = useDispatch<AppDispatch>()
  const [selectedCatalog, setSelectedCatalog] = useState<string | null>(null)
  const [listCategors, setListCategors] = useState<CategoriesItem[]>()
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
          listCategors.map((item) => (
            <CategoryItem
              key={item.id}
              title={item.categoryName}
              isActive={category === item.categoryName}
              onClick={() => handleCategorySelect(item.categoryName)}
            />
          ))
        ) : (
          <p>Данные не под грузились(</p>
        )}
      </div>
    </div>
  )
}
