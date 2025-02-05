import React from 'react'
import { useNavigate } from 'react-router'

const RegisterSuccess = () => {
  const navigator = useNavigate()

  window.setTimeout(() => {
    navigator('/')
  }, 2500)

  return (
    <>
      <h1 className="text-[32px] xs:text-[48px] font-[600] mt-[150px] xs:mt-[201px] mb-[40px]">Хороших занятий!</h1>
    </>
  )
}

export default RegisterSuccess
