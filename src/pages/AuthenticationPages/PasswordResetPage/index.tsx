import React, { useEffect, useMemo, useState } from 'react'
import './PasswordReset.css'
import GroupResetEmail from './components/GroupResetEmail/index.tsx'
import GroupResetOTP from './components/GroupResetOTP/index.tsx'
import GroupResetPassword from './components/GroupResetPassword/index.tsx'
import { clearError } from '@/entities/user/store/auth/authSlice.ts'
import { useDispatch } from 'react-redux'
import { LogoCenter } from '../UI/LogoCenter/index.tsx'

function PasswordReset() {
  const [level, setLevel] = useState(0)
  const [renderLevel, setRenderLevel]: any = useState()
  const dispatch = useDispatch()
  const [login, setLogin] = useState('')
  const [token_resetPassword, setToken_resetPassword] = useState('')

  useEffect(() => {
    // Очищаем ошибку при монтировании компонента
    dispatch(clearError())
  }, [level])
  useMemo(() => {
    setRenderLevel(() => {
      switch (level) {
        case 0:
          return (
            <GroupResetEmail setLevel={setLevel} setLogin={setLogin} setToken_resetPassword={setToken_resetPassword} />
          )
        case 1:
          return <GroupResetOTP setLevel={setLevel} token_resetPassword={token_resetPassword} login={login} />
        case 2:
          return <GroupResetPassword token_resetPassword={token_resetPassword} login={login} />
      }
    })
  }, [level])
  return (
    <>
      <section className="min-h-screen bg-bgDark text-[#fff]">
        <div className="flex justify-center items-center min-h-screen">
          <div className="w-[95%] md:w-[763px] mx-auto text-center">
            <LogoCenter />
            <div className="mt-[1.25rem] 2xl:mt-[238px]">
              <h1 className="text-[32px] md:text-[48px] font-[600] mb-[20px]">Сброс пароля</h1>
              {renderLevel}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PasswordReset
