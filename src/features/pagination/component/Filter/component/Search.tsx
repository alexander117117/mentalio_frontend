import React from 'react'
import Logo from '../../../../../shared/ui/logos/LogoCatalog/index.tsx'
import InputText from '../../../../../shared/ui/inputs/InputTextCatalog/index.tsx'
import { setQuery } from '../../../store/catalogSlice.ts'
import { useDispatch, useSelector } from 'react-redux'

const Search = () => {
  const dispatch = useDispatch()
  const { query } = useSelector((state: any) => state.catalog)

  return (
    <div className="flex items-center justify-between">
      <div className="w-[87%] sm:w-[90%] flex items-center gap-2">
        <button className="block sm:hidden py-2 px-3 text-xs font-medium bg-[#EEEEEE] rounded-full">Назад</button>

        <InputText
          placeholder="Поиск..."
          value={query}
          onChange={(e) => dispatch(setQuery(e.target.value))}
          className={''}
          type={''}
        />
      </div>

      <div className="w-6 sm:w-10 aspect-square rounded-full overflow-hidden">
        <Logo />
      </div>
    </div>
  )
}

export default Search
