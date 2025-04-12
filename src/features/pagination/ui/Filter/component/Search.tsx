import Logo from '@/shared/ui/logos/LogoCatalog'
import InputText from '@/shared/ui/inputs/InputTextCatalog'
import { setQuery } from '@/entities/folder/model/store/catalog/catalogSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router'

export const Search = () => {
  const dispatch = useDispatch()
  const { query } = useSelector((state: any) => state.catalog)

  return (
    <div className="flex items-center justify-between">
      <div className="w-[87%] sm:w-[90%] flex items-center gap-2">
        <Link
          to={'/'}
          className="flex items-center justify-center sm:hidden h-[26px] px-3 text-[9px] font-medium bg-[#EEEEEE] rounded-full"
        >
          Назад
        </Link>

        <InputText
          placeholder="Поиск..."
          value={query}
          onChange={(e) => dispatch(setQuery(e.target.value))}
          className={''}
          type={''}
        />
      </div>

      <div className="w-[26px] sm:w-10 aspect-square rounded-full overflow-hidden">
        <Logo />
      </div>
    </div>
  )
}
