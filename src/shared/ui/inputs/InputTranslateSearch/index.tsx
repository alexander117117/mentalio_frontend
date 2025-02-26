import style from "./index.module.css"
interface InputTranslateSearchProps {
  type: string;
  placeholder: string;
  isSmall?: boolean;
}
export function InputTranslateSearch({ type, placeholder, isSmall=false }: InputTranslateSearchProps){
  return (
    <input 
      type={type}
      className={isSmall ? style.input_translation_search_small : style.input_translation_search}
      placeholder={placeholder}
    />
  )
}