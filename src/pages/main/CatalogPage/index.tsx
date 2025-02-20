import { useSelector } from 'react-redux'
import { Filter } from '@/features/pagination/ui/Filter'
import Pagination from '@/features/pagination/ui/Pagination'
import { ListCard } from '@/features/pagination/ui/ListCard'

export const CatalogPage = () => {
  const { totalPage, cards } = useSelector((state: any) => state.catalog)

  return (
    <>
      <Filter />
      <ListCard cards={cards} />
      {totalPage > 1 && <Pagination />}
    </>
  )
}
