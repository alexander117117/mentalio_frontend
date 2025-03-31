import React, { useState, useEffect, ChangeEvent } from 'react'

/**
 * Отображение редактируемого ввода заголовка с функцией обрезания и сохранения.
 *
 * @param initialValue - Начальное текстовое значение ввода
 * @param onSave - Дополнительная функция обратного вызова, срабатывающая при изменении значения ввода и потере фокуса
 * @param className
 */
interface EditableTitleProps {
  initialValue?: string
  onSave?: (newValue: string) => void
  className?: string
}
export function EditableTitle({ initialValue = '', onSave, className = '' }: EditableTitleProps) {
  const [value, setValue] = useState(initialValue)
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlurOrEnter = () => {
    setIsFocused(false)
    onSave?.(value)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      ;(event.target as HTMLInputElement).blur()
    }
  }

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlurOrEnter}
      onKeyDown={handleKeyDown}
      className={`
        w-full
        font-bold
        border-none
        bg-transparent
        outline-none
        focus:ring-0
        text-center
        ${!isFocused ? 'truncate' : ''}
        ${className}
      `}
    />
  )
}
