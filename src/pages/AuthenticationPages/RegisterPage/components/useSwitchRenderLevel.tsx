import React, { useMemo } from 'react'
import InputAuthCommon from '../../UI/InputAuthCommon/index.tsx'
import GroupAvatar from './GroupAvatar/index.tsx'
import GroupFound from './GroupFound'
import GroupTutorial from './GroupTutorial'
import RegisterSuccess from './RegisterSuccess'
import CheckboxAuthCommon from '../../UI/CheckboxAuthCommon'

interface AvatarItem {
  id: number
  avatar: string
  chosen: boolean
}

interface QuestionItem {
  id: number
  question: string
  answer: boolean
}

interface UseSwitchRenderLevelProps {
  level: number
  formik: any
  avatars: AvatarItem[]
  questions: QuestionItem[]
  handleAvatarSelect: (id: number) => void
  handleQuestionAnswer: (id: number) => void
  isError: boolean
}

export function useSwitchRenderLevel({
  level,
  formik,
  avatars,
  questions,
  handleAvatarSelect,
  handleQuestionAnswer,
  isError,
}: UseSwitchRenderLevelProps) {
  return useMemo(() => {
    switch (level) {
      case 0:
      case 1:
        return (
          <div className="w-[95%] xs:w-[490px] mx-auto mt-[1.25rem] sm:mt-[1.875rem]">
            <h1 className="text-[32px] sm:text-[48px] font-[600] mb-[20px]">Регистрация</h1>
            {level === 0 ? (
              <div>
                <InputAuthCommon
                  type="text"
                  name="emailOrPhone"
                  placeholder="Email/Номер телефона"
                  value={formik.values.emailOrPhone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.emailOrPhone && formik.errors.emailOrPhone}
                  touched={formik.touched.emailOrPhone}
                />
                <CheckboxAuthCommon
                  name="agreeToTerms"
                  checked={formik.values.agreeToTerms}
                  onChange={formik.handleChange}
                  error={formik.touched.agreeToTerms && formik.errors.agreeToTerms}
                  touched={formik.touched.agreeToTerms}
                >
                  Я согласен с условиями пользовательского соглашения
                </CheckboxAuthCommon>
              </div>
            ) : (
              <InputAuthCommon
                type="password"
                name="password"
                placeholder="Придумайте пароль"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && formik.errors.password}
                touched={formik.touched.password}
              />
            )}
          </div>
        )
      case 2:
        return <GroupAvatar avatar={avatars} handleAvatarSelect={handleAvatarSelect} isError={isError} />
      case 3:
        return <GroupFound questions={questions} handleQuestionAnswer={handleQuestionAnswer} isError={isError} />
      case 4:
        return <GroupTutorial />
      case 5:
        return <RegisterSuccess />
      default:
        return null
    }
  }, [level, formik.values, formik.errors, avatars, questions, handleAvatarSelect, handleQuestionAnswer, isError])
}
