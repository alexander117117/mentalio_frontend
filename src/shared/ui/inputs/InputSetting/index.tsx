import { useState } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi'

interface InputSettingProps {
  type: string
  value: string
}
export function InputSetting({ type, value }: InputSettingProps) {
  const [showPassword, setShowPassword] = useState(false)

  const isPassword = type === 'password'
  const isShowTextPassword = type === 'password' && showPassword ? 'text' : type

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="relative h-fit">
      <input
        type={isShowTextPassword}
        className="w-full px-5 py-[15px] rounded-[20px] border-none outline-none"
        value={value}
      />
      {isPassword && (
        <div className="absolute inset-y-0 right-5 flex items-center cursor-pointer" onClick={handleShowPassword}>
          {showPassword ? <FiEyeOff /> : <FiEye />}
        </div>
      )}
    </div>
  )
}
