import React from 'react'
import InputAuthCommon from '../../../UI/InputAuthCommon/index.tsx'
import ButtonAuthCommon from '../../../UI/ButtonAuthCommon/index.tsx'
import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router'
import { resetPasswordThunk } from '@/entities/user/store/auth/authThunks.ts'
import { useDispatch } from 'react-redux'
import { passwordResetSchema } from '../../../../../../validationSchemas.js'

interface GroupResetPasswordProps {
  token_resetPassword: string
  login: string
}
const GroupResetPassword = ({ token_resetPassword, login }: GroupResetPasswordProps) => {
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
        setErrors({ confirmPassword: (error as Error).message || 'Произошла ошибка. Попробуйте снова' })
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
