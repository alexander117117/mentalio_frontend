import React, { useState, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ButtonAuthCommon from '../UI/ButtonAuthCommon/ButtonAuthCommon.jsx'
import { useSwitchRenderLevel } from './components/useSwitchRenderLevel.jsx'
import { useAvatarSelection, useQuestions } from './hooks/useManageSelection.js'
import { useFormik_Register, handleNext } from './hooks/useManageTransition.js'
import { clearError } from '@/store/features/auth/authSlice.js'
import { fetchQuestions } from '@/store/features/analytics/analyticsThunks.js'
import { toggleQuestionAnswer } from '@/store/features/analytics/analyticsSlice.js'
import Index from '../UI/LogoCenter/index.jsx'

function Register() {
  const [level, setLevel] = useState(0)
  const dispatch = useDispatch()
  const [password, setPassword] = useState('')
  const [login, setlogin] = useState('')
  const { isLoading, error } = useSelector((state) => state.auth)
  const { questions, loadingAnalytics, errorAnalytics } = useSelector((state) => state.analytics)

  const [isError, setIsError] = useState(false)

  useEffect(() => {
    dispatch(clearError())
  }, [level])

  useEffect(() => {
    dispatch(
      fetchQuestions([
        {
          id: 1,
          question: 'вопрос1',
          answer: false,
        },
        {
          id: 2,
          question: 'вопрос2',
          answer: false,
        },
        {
          id: 3,
          question: 'вопрос3',
          answer: false,
        },
        {
          id: 4,
          question: 'вопрос4',
          answer: false,
        },
      ]),
    )
  }, [dispatch])
  // Хук для управления взаимодействием с вопросами на уровне 3.
  const handleQuestionAnswer = (id) => {
    dispatch(toggleQuestionAnswer(id))
  }

  // Хук для управления выбором аватара на уровне 2.
  const [avatarsNew, setAvatarsNew] = useState([
    { id: 1, avatar: 'аватар1', chosen: false },
    { id: 2, avatar: 'аватар2', chosen: false },
    { id: 3, avatar: 'аватар3', chosen: false },
  ])
  const { avatars, handleAvatarSelect } = useMemo(() => useAvatarSelection(avatarsNew, setAvatarsNew), [avatarsNew])

  // Хук Formik для управления состоянием формы и валидацией.
  const formik = useFormik_Register(level, setLevel, avatars, questions, dispatch, error, setIsError, setPassword, password, login, setlogin)

  // Динамическая отрисовка компонентов в зависимости от текущего уровня.
  const renderLevel = useSwitchRenderLevel(level, formik, avatars, questions, handleAvatarSelect, handleQuestionAnswer, isError)

  return (
    <main className="min-h-screen bg-bgDark">
      <div className={`flex justify-center items-center min-h-screen`}>
        <form className="text-[#fff] w-[95%]" onSubmit={formik.handleSubmit}>
          <div className="w-full mx-auto text-center">
            {/* Логотип приложения */}
            <Index />
            {/* Контент изменяется в зависимости от текущего уровня регистрации */}
            <div className="w-full 2xl:w-[1580px] mx-auto">{renderLevel}</div>
          </div>
          {level !== 5 && (
            <div className="w-[95%] xs:w-[490px] mx-auto mt-[0.875rem] sm:mt-[1.25rem]">
              {/* // Общая кнопка для навигации между уровнями. */}
              <ButtonAuthCommon type="submit" disabled={isLoading} onClick={() => handleNext(level, setLevel)}>
                Продолжить
              </ButtonAuthCommon>
            </div>
          )}
        </form>
      </div>
    </main>
  )
}

export default Register
