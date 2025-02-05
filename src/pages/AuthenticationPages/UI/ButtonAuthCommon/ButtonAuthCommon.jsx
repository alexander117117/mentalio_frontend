import React from 'react'
import './ButtonAuthCommon.css'
import PropTypes from 'prop-types'

const ButtonAuthCommon = ({ type = 'button', onClick, children, disabled = false, isLoading = false, ...props }) => {
  return (
    <>
      <button
        className="block w-full py-[15px] sm:py-[23px] rounded-[20px] bg-regButton text-[16px] sm:text-[24px] text-[#fff] cursor-pointer  transition duration-300 ease-in-out hover:bg-[#24ac1894]"
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

ButtonAuthCommon.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
}

export default ButtonAuthCommon
