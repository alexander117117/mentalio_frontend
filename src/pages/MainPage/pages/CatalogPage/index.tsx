import React from 'react'
import { useSelector } from 'react-redux'
import Filter from '../../../../features/pagination/component/Filter/index.tsx'
import Pagination from '../../../../features/pagination/component/Pagination'
import { ListCart } from '../../../../features/pagination/component/ListCart'

const CatalogPage = () => {
  const { totalPage, carts } = useSelector((state: any) => state.catalog)

  return (
    <>
      <Filter />
      <ListCart carts={carts} />
      {totalPage > 1 && <Pagination />}
    </>
  )
}

export default CatalogPage
