import React, { useState } from 'react'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { requestReset } from '@/store/features/auth/authThunks.js'
import InputAuthCommon from '../../../UI/InputAuthCommon/InputAuthCommon.jsx'
import ButtonAuthCommon from '../../../UI/ButtonAuthCommon/ButtonAuthCommon.jsx'
import PropTypes from 'prop-types'
import { emailOrPhoneSchema } from '../../../../../../validationSchemas.js'

const GroupResetEmail = ({ setLevel, setToken_resetPassword, setLogin }) => {
  const [disabled, setDisabled] = useState(false)
  const dispatch = useDispatch()
  const [successMessage, setSuccessMessage] = useState('')

  // Схема валидации с Yup
  const formik = useFormik({
    initialValues: {
      emailOrPhone: '',
    },
    validationSchema: emailOrPhoneSchema,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        setSuccessMessage('Мы отправили код на ваш email или телефон')
        setDisabled(true)
        const data = await dispatch(requestReset({ login: values.emailOrPhone })).unwrap()
        if (data.token_resetPassword) {
          setToken_resetPassword(data.token_resetPassword)
          setLogin(values.emailOrPhone)
          setDisabled(false)
          setLevel(1)
        } else {
          setSuccessMessage('Произошла ошибка. Попробуйте снова')
          setDisabled(false)
        }
      } catch (error) {
        setErrors({ emailOrPhone: error || 'Произошла ошибка. Попробуйте снова' })
      } finally {
        setSubmitting(false)
      }
    },
  })

  return (
    <form onSubmit={formik.handleSubmit} className="w-full xs:w-[490px] mx-auto flex flex-col gap-[14px] sm:gap-[20px] md:gap-[40px]">
      <InputAuthCommon
        type="username"
        name="emailOrPhone"
        placeholder="Email/Номер телефона"
        value={formik.values.emailOrPhone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.emailOrPhone && formik.errors.emailOrPhone}
        touched={formik.touched.emailOrPhone}
      />
      <div>
        <ButtonAuthCommon isLoading={formik.isSubmitting} type="submit" disabled={disabled}>
          Продолжить
        </ButtonAuthCommon>
        {successMessage ? (
          <div className="text-xs md:text-base font-[400] text-[#00C724] text-[12px] sm:text-[16px] text-left mt-[5px] sm:mt-[10px]">
            {successMessage}
          </div>
        ) : (
          <div className="font-[400] text-[#00C724] text-[12px] sm:text-base text-left mt-[5px] sm:mt-[10px]">
            Мы отправим код на ваш email или телефон
          </div>
        )}
      </div>
    </form>
  )
}
GroupResetEmail.propTypes = {
  setLevel: PropTypes.func.isRequired,
  setToken_resetPassword: PropTypes.func.isRequired,
  setLogin: PropTypes.func.isRequired,
}
export default GroupResetEmail
