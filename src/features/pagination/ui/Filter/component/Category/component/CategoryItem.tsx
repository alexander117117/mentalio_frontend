import * as React from 'react'

interface CategoryItem {
  title: string
  isActive: boolean
  onClick: () => void
}

export const CategoryItem: React.FC<CategoryItem> = ({ title, isActive, onClick }) => {
  return (
    <button
      className={`block max-w-full sm:w-[180px] h-[28px] sm:h-[40px] text-[11px] sm:text-[18px] rounded-[10px] sm:rounded-2xl text-black overflow-hidden whitespace-nowrap text-ellipsis px-2 ${
        isActive ? 'bg-settingMain' : 'bg-userFolder'
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  )
}
