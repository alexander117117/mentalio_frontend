import { useEffect } from 'react'
import { Search } from './component/Search.tsx'
import { useDispatch, useSelector } from 'react-redux'
import { paginationThunk } from '@/entities/folder/model/store/catalog/catalogThunks.ts'
import { Category } from './component/Category'
import { AppDispatch } from '@/app/store/configureStore.ts'

export function Filter() {
  const dispatch = useDispatch<AppDispatch>()
  const { page, query, category, limit } = useSelector((state: any) => state.catalog)

  useEffect(() => {
    dispatch(paginationThunk({ query, page: page, category, limit }))
  }, [query, category])
  return (
    <>
      <Search />
      <Category />
    </>
  )
}
