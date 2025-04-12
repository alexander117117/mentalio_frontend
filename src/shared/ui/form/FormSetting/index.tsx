import { useState } from 'react'
import { InputSetting } from '@/shared/ui/inputs/InputSetting'
import { ButtonSetting } from '@/shared/ui/buttons/ButtonSetting'

interface FormSettingProps {
  type: string
  initialValue: string
  onSubmit: (value: string) => void
}

export function FormSetting({ type, initialValue, onSubmit }: FormSettingProps) {
  const [value, setValue] = useState(initialValue)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(value)
  }

  return (
    <form className="w-full flex flex-col gap-[10px]" onSubmit={handleSubmit}>
      <InputSetting type={type} value={value} onChange={handleChange} />
      <ButtonSetting />
    </form>
  )
}
