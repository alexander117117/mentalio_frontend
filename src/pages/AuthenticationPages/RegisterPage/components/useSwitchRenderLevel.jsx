import React, { useMemo } from 'react'
import InputAuthCommon from '../../UI/InputAuthCommon/InputAuthCommon.jsx'
import GroupAvatar from './GroupAvatar/GroupAvatar.jsx'
import GroupFound from './GroupFound/GroupFound.jsx'
import GroupTutorial from './GroupTutorial/GroupTutorial.jsx'
import RegisterSuccess from './RegisterSuccess/RegisterSuccess.jsx'
import CheckboxAuthCommon from '../../UI/CheckboxAuthCommon/CheckboxAuthCommon.jsx'

/**
 * Динамическая отрисовка UI в зависимости от уровня регистрации.
 *
 * @param {number} level - Текущий шаг регистрации.
 * @param {object} formik - Экземпляр Formik для управления состоянием формы.
 * @param {Array} avatars - Список аватаров для выбора на уровне 2.
 * @param {Array} questions - Список вопросов для взаимодействия на уровне 3.
 * @param {Function} handleAvatarSelect - Функция для управления выбором аватара.
 * @param {Function} handleQuestionAnswer - Функция для управления взаимодействием с вопросами.
 * @param isError
 * @returns {JSX.Element|null} - Компонент для текущего уровня.
 */
export function useSwitchRenderLevel(level, formik, avatars, questions, handleAvatarSelect, handleQuestionAnswer, isError) {
  return useMemo(() => {
    switch (level) {
      case 0:
      case 1:
        return (
          <div className="w-[95%] xs:w-[490px] mx-auto mt-[1.25rem] sm:mt-[1.875rem]">
            <h1 className="text-[32px] sm:text-[48px] font-[600] mb-[20px]">Регистрация</h1>
            {level === 0 ? (
              // Поле ввода email или номера телефона.
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

                {/* Чекбокс для принятия условий пользовательского соглашения */}
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
              // Поле ввода пароля.
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
