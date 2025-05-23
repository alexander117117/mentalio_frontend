import * as React from 'react'

interface InputText {
  className: string
  type: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function InputText({
  className = '',
  type = 'text',
  placeholder = '',
  value,
  onChange,
  ...props
}: InputText) {
  return (
    <>
      <input
        type={type}
        className={
          `flex-1 h-[30px] sm:h-12 text-[9px] sm:text-base border-0 sm:border border-black rounded-full outline-none px-5 bg-[#EEEEEE] sm:bg-transparent` +
          className
        }
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
    </>
  )
}
