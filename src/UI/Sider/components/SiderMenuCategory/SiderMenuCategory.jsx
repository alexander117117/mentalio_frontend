import React from 'react'

const SiderMenuCategory = ({ category, image }) => {
  return (
    <>
      <div className="flex items-center gap-[10px] mb-[11px] pl-[5px]">
        <img src={image} alt="" className="w-[24px] aspect-square object-cover" />
        <p className="text-[14px] font-[400] text-siderGray">{category}</p>
      </div>
    </>
  )
}

export default SiderMenuCategory
