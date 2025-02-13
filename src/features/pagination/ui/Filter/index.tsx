import { useEffect } from 'react'
import { Search } from './component/Search.tsx'
import { useDispatch, useSelector } from 'react-redux'
import { paginationThunk } from '@/features/pagination/model/store/catalogThunks.ts'
import { Category } from './component/Category'

export function Filter() {
  const dispatch = useDispatch()
  const { page, query, category, limit } = useSelector((state: any) => state.catalog)

  useEffect(() => {
    // @ts-ignore
    dispatch(paginationThunk({ query, page: page, category, limit }))
  }, [query, category])
  return (
    <>
      <Search />
      <Category />
    </>
  )
}
