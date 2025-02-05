import React from 'react'
import PropTypes from 'prop-types'
import FolderDirectory from '../../../../components/FolderDirectory/FolderDirectory.jsx'

ListCart.propTypes = {
  carts: PropTypes.array,
}

function ListCart({ carts }) {
  return (
    <div className="w-[98%] flex items-center justify-between flex-wrap gap-3 sm:gap-7 lg:gap-y-[30px] 2xl:gap-y-10 mt-5 sm:mt-[30px] pr-3 sm:pr-0">
      {carts.map((item) => (
        <FolderDirectory key={item.id} userName={item.userName} title={item.title} desc={item.desc} />
      ))}
    </div>
  )
}

export default ListCart
