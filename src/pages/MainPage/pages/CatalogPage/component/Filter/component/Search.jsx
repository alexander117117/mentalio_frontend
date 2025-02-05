import React from 'react'
import Logo from '../../../UI/Logo'
import InputText from '../../../UI/InputText/index.tsx'
import { setQuery } from '../../../store/catalogSlice.js'
import { useDispatch, useSelector } from 'react-redux'

const Search = () => {
  const dispatch = useDispatch()
  const { query } = useSelector((state) => state.catalog)

  return (
    <div className="flex items-center justify-between">
      <div className="w-[87%] sm:w-[90%] flex items-center gap-2">
        {/* Кнопка назад (отображается только на мобильных устройствах) */}
        <button className="block sm:hidden py-2 px-3 text-xs font-medium bg-[#EEEEEE] rounded-full">Назад</button>

        <InputText placeholder="Поиск..." value={query} onChange={(e) => dispatch(setQuery(e.target.value))} />
      </div>

      <div className="w-6 sm:w-10 aspect-square rounded-full overflow-hidden">
        <Logo />
      </div>
    </div>
  )
}

export default Search
