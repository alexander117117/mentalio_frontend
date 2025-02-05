import React, { useState } from 'react'
import './InputAuthCommon.css'
import PropTypes from 'prop-types'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import TextError from '../TextError/TextError.jsx'

const InputAuthCommon = ({ id, name, type = 'text', placeholder = '', value, onChange, onBlur, error, touched, label, ...props }) => {
  const [showPassword, setShowPassword] = useState(false)

  const isPassword = type === 'password'
  const isShowTextPassword = type === 'password' && showPassword ? 'text' : type

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }
  return (
    <>
      {label && <label htmlFor={id || name}>{label}</label>}
      <div>
        <div className="relative h-fit">
          <input
            className="w-full py-[17px] sm:py-[28px] px-[10px] sm:px-[20px] rounded-[20px] bg-[#4C4C4C99] border border-[#8A8A8A80] text-[12px] sm:text-[16px] text-[#fff] outline-none"
            id={id || name}
            name={name}
            type={isShowTextPassword}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            {...props}
          />
          {isPassword && (
            <div className="absolute inset-y-0 right-5 flex items-center cursor-pointer" onClick={handleShowPassword}>
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </div>
          )}
        </div>
        {touched && error && <TextError error={error} />}
      </div>
    </>
  )
}

InputAuthCommon.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  error: PropTypes.string,
  touched: PropTypes.bool,
  label: PropTypes.string,
}

export default InputAuthCommon
