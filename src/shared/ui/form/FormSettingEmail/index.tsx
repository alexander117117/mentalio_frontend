import { useMemo, useState } from 'react'
import { InputSetting } from '@/shared/ui/inputs/InputSetting'
import { ButtonSetting } from '@/shared/ui/buttons/ButtonSetting'

interface FormSettingEmailProps {
  type: string
  initialValue: string
  onSubmit: (value: string) => void
}

export function FormSettingEmail({ type, initialValue, onSubmit }: FormSettingEmailProps) {
  const [value, setValue] = useState(initialValue)
  const [touched, setTouched] = useState(false)

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
  const isValid = useMemo(() => emailRegex.test(value), [value])
  const hasError = touched && !isValid

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    if (!touched) setTouched(true)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isValid) return
    onSubmit(value)
  }

  return (
    <form className="w-full flex flex-col gap-2" onSubmit={handleSubmit} noValidate>
      <InputSetting type={type} value={value} onChange={handleChange} aria-invalid={!isValid} />
      {hasError && <span className="text-red-500 text-sm pl-1">Неверный формат e-mail</span>}

      <ButtonSetting disabled={!isValid || value === initialValue} />
    </form>
  )
}
