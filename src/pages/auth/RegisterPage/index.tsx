import { useState, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ButtonAuthCommon from '../UI/ButtonAuthCommon'
import { useSwitchRenderLevel } from './components/useSwitchRenderLevel.tsx'
import { useAvatarSelection } from './hooks/useManageSelection.ts'
import { useFormik_Register, handleNext } from './hooks/useManageTransition.ts'
import { clearError } from '@/entities/user/model/store/auth/authSlice.ts'
import { fetchQuestions } from '@/app/store/features/analytics/analyticsThunks.ts'
import { toggleQuestionAnswer } from '@/app/store/features/analytics/analyticsSlice.ts'
import { LogoCenter } from '../UI/LogoCenter'
import { avatarItem } from '@/shared/constants/avatarItem.ts'

interface AuthState {
  isLoading: boolean
  error: string | null
}

interface AnalyticsQuestion {
  id: number
  question: string
  answer: boolean
}

interface AnalyticsState {
  questions: AnalyticsQuestion[]
  loadingAnalytics: boolean
  errorAnalytics: string | null
}

interface RootState {
  auth: AuthState
  analytics: AnalyticsState
}

interface AvatarItem {
  id: number
  avatar: string
  chosen: boolean
}

export function Register() {
  const [level, setLevel] = useState<number>(0)
  const dispatch = useDispatch()
  const [password, setPassword] = useState<string>('')
  const [login, setlogin] = useState<string>('')
  const { isLoading, error } = useSelector<RootState, AuthState>((state) => state.auth)
  const { questions } = useSelector<RootState, AnalyticsState>((state) => state.analytics)
  const [isError, setIsError] = useState<boolean>(false)

  useEffect(() => {
    dispatch(clearError())
  }, [level, dispatch])

  useEffect(() => {
    dispatch(
      fetchQuestions([
        { id: 1, question: 'вопрос1', answer: false },
        { id: 2, question: 'вопрос2', answer: false },
        { id: 3, question: 'вопрос3', answer: false },
        { id: 4, question: 'вопрос4', answer: false },
      ]),
    )
  }, [dispatch])

  const handleQuestionAnswer = (id: number) => {
    dispatch(toggleQuestionAnswer(id))
  }

  const [avatarsNew, setAvatarsNew] = useState<AvatarItem[]>(avatarItem)

  const { avatars, handleAvatarSelect } = useMemo(() => useAvatarSelection(avatarsNew, setAvatarsNew), [avatarsNew])

  const formik = useFormik_Register({
    level,
    setLevel,
    avatars,
    questions,
    dispatch,
    error,
    setIsError,
    setPassword,
    password,
    login,
    setlogin,
  })

  const renderLevel = useSwitchRenderLevel({
    level,
    formik,
    avatars,
    questions,
    handleAvatarSelect,
    handleQuestionAnswer,
    isError,
  })

  return (
    <main className="min-h-screen bg-bgDark">
      <div className="flex justify-center items-center min-h-screen">
        <form className="text-[#fff] w-[95%]" onSubmit={formik.handleSubmit}>
          <div className="w-full mx-auto text-center">
            <LogoCenter />
            <div className="w-full 2xl:w-[1580px] mx-auto">{renderLevel}</div>
          </div>
          {level !== 5 && (
            <div className="w-[95%] xs:w-[490px] mx-auto mt-[0.875rem] sm:mt-[1.25rem]">
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
