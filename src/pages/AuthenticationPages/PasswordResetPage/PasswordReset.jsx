import React, { useEffect, useMemo, useState } from 'react'
import './PasswordReset.css'
import GroupResetEmail from './components/GroupResetEmail/GroupResetEmail.jsx'
import GroupResetOTP from './components/GroupResetOTP/GroupResetOTP.jsx'
import GroupResetPassword from './components/GroupResetPassword/GroupResetPassword.jsx'
import { clearError } from '@/store/features/auth/authSlice.js'
import { useDispatch } from 'react-redux'
import Index from '../UI/LogoCenter/index.jsx'

function PasswordReset() {
  const [level, setLevel] = useState(0)
  const [renderLevel, setRenderLevel] = useState()
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
          return <GroupResetEmail setLevel={setLevel} setLogin={setLogin} setToken_resetPassword={setToken_resetPassword} />
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
            <Index />
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
