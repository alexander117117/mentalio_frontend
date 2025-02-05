import React from 'react'
import InputAuthCommon from '../../../UI/InputAuthCommon/InputAuthCommon.jsx'
import ButtonAuthCommon from '../../../UI/ButtonAuthCommon/ButtonAuthCommon.jsx'
import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router'
import { resetPasswordThunk } from '@/store/features/auth/authThunks.js'
import { useDispatch } from 'react-redux'
import { passwordResetSchema } from '../../../../../../validationSchemas.js'

const GroupResetPassword = ({ token_resetPassword, login }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema: passwordResetSchema,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const data = await dispatch(
          resetPasswordThunk({
            newPassword: values.password,
            login,
            token_resetPassword,
          }),
        ).unwrap()
        if (data.status === 'success') {
          navigate('/auth/login')
        }
      } catch (error) {
        setErrors({ confirmPassword: error || 'Произошла ошибка. Попробуйте снова' })
      } finally {
        setSubmitting(false)
      }
    },
  })

  return (
    <form onSubmit={formik.handleSubmit} className="w-full xs:w-[490px] mx-auto">
      <div className="mb-[10px] xs:mb-[20px]">
        <InputAuthCommon
          type="password"
          name="password"
          placeholder="Новый пароль"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && formik.errors.password}
          touched={formik.touched.password}
        />
        {/* {formik.touched.password && formik.errors.password && (
					<div className="text-red-500 text-sm mt-1">
						{formik.errors.password}
					</div>
				)} */}
      </div>
      <div className="mb-[20px] xs:mb-[40px]">
        <InputAuthCommon
          type="password"
          name="confirmPassword"
          placeholder="Повторите новый пароль"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.confirmPassword && formik.errors.confirmPassword}
          touched={formik.touched.confirmPassword}
        />
        {/* {formik.touched.confirmPassword && formik.errors.confirmPassword && (
					<div className="text-red-500 text-sm mt-1">
						{formik.errors.confirmPassword}
					</div>
				)} */}
      </div>
      <ButtonAuthCommon type="submit">Сохранить</ButtonAuthCommon>
    </form>
  )
}

GroupResetPassword.propTypes = {
  token_resetPassword: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
}

export default GroupResetPassword
