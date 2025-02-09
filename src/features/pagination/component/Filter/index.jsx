import React, { useEffect } from 'react'
import Search from './component/Search.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { paginationThunk } from '../../store/catalogThunks.js'
import { Category } from './component/Category/index.tsx'

function Filter() {
  const dispatch = useDispatch()
  const { page, query, category, limit } = useSelector((state) => state.catalog)

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
