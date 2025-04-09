import { UseFormRegisterReturn } from 'react-hook-form'

interface InputQuantityProps {
  title: string
  titleContex?: string
  placeholder?: string
  register: UseFormRegisterReturn
}
export function InputQuantity({ title, titleContex, placeholder, register }: InputQuantityProps) {
  return (
    <div className="flex items-center justify-between bg-popup px-[15px] py-5 rounded-[10px]">
      <label htmlFor="inputQuantity" className="flex flex-col">
        <span>{title}</span>
        <span className="text-[#5A5A5A] text-[10px]">{titleContex}</span>
      </label>

      <input
        id="inputQuantity"
        type="number"
        className="w-[125px] h-[40px] bg-transparent outline-none border border-borderDark px-[7px] text-[10px] rounded-[10px] tracking-tighter"
        placeholder={placeholder}
        {...register}
      />
    </div>
  )
}
