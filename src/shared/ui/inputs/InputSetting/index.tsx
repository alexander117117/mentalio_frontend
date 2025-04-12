interface InputSettingProps {
  type: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function InputSetting({ type, value, onChange }: InputSettingProps) {
  return (
    <div className="relative h-fit">
      <input
        type={type}
        className="w-full px-5 py-[15px] rounded-[20px] border-none outline-none"
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
