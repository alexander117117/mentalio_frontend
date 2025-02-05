import * as React from 'react'

interface InputText {
  className: string
  type: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function InputText({ className = '', type = 'text', placeholder = '', value, onChange, ...props }: InputText) {
  return (
    <>
      <input
        type={type}
        className={
          `flex-1 h-6 sm:h-12 text-xs sm:text-base border-0 sm:border border-black rounded-full outline-none px-5 bg-[#EEEEEE] sm:bg-transparent` +
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

export default InputText
