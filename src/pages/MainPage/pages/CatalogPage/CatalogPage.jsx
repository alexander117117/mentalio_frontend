import React from 'react'
import { useSelector } from 'react-redux'
import Filter from './component/Filter'
import Pagination from './component/Pagination'
import ListCart from './component/ListCart'

const CatalogPage = () => {
  const { totalPage, carts } = useSelector((state) => state.catalog)

  return (
    <>
      <Filter />
      <ListCart carts={carts} />
      {totalPage > 1 && <Pagination />}
    </>
  )
}

export default CatalogPage
