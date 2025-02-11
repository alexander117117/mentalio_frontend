import React from 'react'
import PropTypes from 'prop-types'

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  children?: React.ReactNode
  disabled?: boolean
  isLoading?: boolean
  className?: string
}

function Button({
  type = 'button',
  onClick,
  children,
  disabled = false,
  isLoading = false,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <>
      <button
        className={`block w-full py-[15px] sm:py-[23px] rounded-[20px] bg-regButton text-[16px] sm:text-[24px] text-[#fff] cursor-pointer transition duration-300 ease-in-out hover:bg-[#24ac1894] ${className}`}
        type={type}
        onClick={onClick}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? 'Загрузка...' : children}
      </button>
    </>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  className: PropTypes.string,
}

export default Button
