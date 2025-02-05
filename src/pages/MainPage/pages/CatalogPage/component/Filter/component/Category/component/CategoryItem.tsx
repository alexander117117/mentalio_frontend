import * as React from 'react'

interface CategoryItem {
  title: string
  isActive: boolean
  onClick: () => void
}

export const CategoryItem: React.FC<CategoryItem> = ({ title, isActive, onClick }) => {
  return (
    <button
      className={`w-auto sm:w-[180px] h-[28px] sm:h-[40px] text-[11px] sm:text-[18px] flex items-center justify-center rounded-[10px] sm:rounded-2xl ${
        isActive ? 'bg-colorHover text-white' : 'bg-userFolder text-black'
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  )
}
