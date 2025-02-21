interface SelectItemProps {
  item: string
  isSelected: boolean
  onSelect: (item: string) => void
}

export function SelectItem({ item, isSelected, onSelect }: SelectItemProps) {
  const handleClick = () => {
    onSelect(item)
  }

  return (
    <label
      onClick={handleClick}
      className="w-full text-left px-2 md:px-4 py-3 bg-[#2a2a2a] hover:bg-[#333333] text-white rounded-lg flex justify-between items-center group transition-colors m-0 mt-[10px] cursor-pointer"
    >
      <span className="text-[10px] md:text-base line-clamp-1">{item}</span>
      <input
        type="checkbox"
        checked={isSelected}
        readOnly
        className="w-3 md:w-6 h-3 md:h-6 bg-[#3a3a3a] rounded group-hover:bg-[#404040]"
      />
    </label>
  )
}
