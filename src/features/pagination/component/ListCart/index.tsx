import React from 'react'
import PropTypes from 'prop-types'
import { FolderDirectory } from '../../../../widgets/folders/FolderDirectory'

ListCart.propTypes = {
  carts: PropTypes.array,
}

interface ListCartProps {
  carts: any
}

export function ListCart({ carts }: ListCartProps) {
  return (
    <div className="w-[98%] flex items-center justify-between flex-wrap gap-3 sm:gap-7 lg:gap-y-[30px] 2xl:gap-y-10 mt-5 sm:mt-[30px] pr-3 sm:pr-0">
      {carts.map((item: any) => (
        <FolderDirectory key={item.id} userName={item.userName} title={item.title} desc={item.desc} />
      ))}
    </div>
  )
}
