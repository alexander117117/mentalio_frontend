interface SelectItemProps {
  item: string
  chosenTopic: string
  onChoose: (item: string) => void
  setIsOpen: (value: boolean) => void
}

export function SelectItem({ item, chosenTopic, onChoose, setIsOpen }: SelectItemProps) {
  function handleFunction() {
    onChoose(item)
    setIsOpen(false)
  }
  return (
    <label
      onClick={handleFunction}
      className="w-full text-left px-2 md:px-4 py-3 bg-[#2a2a2a] hover:bg-[#333333] text-white rounded-lg flex justify-between items-center group transition-colors m-0 mt-[10px] cursor-pointer"
    >
      <span className="text-[10px] md:text-base line-clamp-1">{item}</span>
      <input
        checked={item === chosenTopic}
        type="checkbox"
        name={item}
        className="w-3 md:w-6 h-3 md:h-6 bg-[#3a3a3a] rounded group-hover:bg-[#404040]"
      ></input>
    </label>
  )
}
