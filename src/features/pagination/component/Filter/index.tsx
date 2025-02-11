import React, { useEffect } from 'react'
import Search from './component/Search.tsx'
import { useDispatch, useSelector } from 'react-redux'
import { paginationThunk } from '../../store/catalogThunks.ts'
import { Category } from './component/Category/index.tsx'

function Filter() {
  const dispatch = useDispatch()
  const { page, query, category, limit } = useSelector((state: any) => state.catalog)

  useEffect(() => {
    dispatch(paginationThunk({ query, page: page, category, limit }))
    console.log('Filter: ', { query, page: page, category, limit })
  }, [query, category])
  return (
    <>
      <Search />
      <Category />
    </>
  )
}

export default Filter
