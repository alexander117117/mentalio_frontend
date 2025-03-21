import { UseFormRegisterReturn } from 'react-hook-form'
import style from './index.module.css'
interface InputTranslateSearchProps {
  type: string
  placeholder: string
  isSmall?: boolean
  register: UseFormRegisterReturn
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export function InputTranslateSearch({
  onChange,
  register,
  type,
  placeholder,
  isSmall = false,
}: InputTranslateSearchProps) {
  return (
    <input
      {...register}
      type={type}
      className={isSmall ? style.input_translation_search_small : style.input_translation_search}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}
