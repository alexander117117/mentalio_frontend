interface InputCheckedProps {
  title: string
  nameInput: string
  checked?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}
export function InputChecked({ title, nameInput, checked, onChange }: InputCheckedProps) {
  return (
    <div className="flex items-center justify-between bg-popup px-[15px] py-5 rounded-[10px]">
      <label htmlFor={title} className="flex flex-col">
        {title}
      </label>
      <input
        id={title}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-5 sm:w-[40px] aspect-square bg-transparent outline-none border border-borderDark rounded-[10px]"
        name={nameInput}
      />
    </div>
  )
}
