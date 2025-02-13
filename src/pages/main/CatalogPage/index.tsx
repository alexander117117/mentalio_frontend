import { useSelector } from 'react-redux'
import { Filter } from '@/features/pagination/ui/Filter'
import Pagination from '@/features/pagination/ui/Pagination'
import { ListCart } from '@/features/pagination/ui/ListCart'

export const CatalogPage = () => {
  const { totalPage, carts } = useSelector((state: any) => state.catalog)

  return (
    <>
      <Filter />
      <ListCart carts={carts} />
      {totalPage > 1 && <Pagination />}
    </>
  )
}
