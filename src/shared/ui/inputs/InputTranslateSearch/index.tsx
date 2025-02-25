import style from "./index.module.css"
interface InputTranslateSeachProps {
  type: string;
  placeholder: string
}
export function InputTranslateSeach({ type, placeholder }: InputTranslateSeachProps){
  return (
    <input 
      type={type}
      className={style.input_translation_search}
      placeholder={placeholder}
    />
  )
}