import { Link, useNavigate } from 'react-router'
import { useEffect } from 'react'
import { useFormik } from 'formik'
import './Login.css'
import InputAuthCommon from '../UI/InputAuthCommon/index.tsx'
import ButtonAuthCommon from '../UI/ButtonAuthCommon/index.tsx'
import { useDispatch, useSelector } from 'react-redux'
import { loginUserThunk } from '@/entities/user/model/store/auth/authThunks.ts'
import { loginSchema } from '@/../validationSchemas.js'
import { LogoCenter } from '../UI/LogoCenter/index.tsx'
import TextError from '../UI/TextError/index.tsx'
import { AppDispatch } from '@/app/store/configureStore.ts'

export function Login() {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const { loading, error, isAuthenticated, user } = useSelector((state: any) => state.auth)

  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const resultAction = await dispatch(loginUserThunk(values)).unwrap()

        if (resultAction.user.role.role_name === 'user') {
          navigate('/')
        } else if (resultAction.user.role.role_name === 'admin') {
          navigate('/admin')
        }
      } catch (error: any) {
        if (error.response && error.response.data) {
          setErrors(error.response.data)
        }
      } finally {
        setSubmitting(false)
      }
    },
  })

  useEffect(() => {
    if (isAuthenticated) {
      if (user?.role === 'user') {
        navigate('/')
      } else if (user?.role === 'admin') {
        navigate('/admin')
      }
    }
  }, [isAuthenticated, user, navigate])

  return (
    <>
      <main className="min-h-screen bg-bgDark text-[#fff]">
        <div className="flex justify-center items-center min-h-screen">
          <div className="w-[95%] sm:w-[763px] mx-auto text-center">
            <LogoCenter />
            <div className="w-[95%] sm:w-[490px] mx-auto mt-[1.25rem] 2xl:mt-[12.5rem]">
              <h1 className="text-[32px] sm:text-[48px] font-[600] mb-[20px]">Войти</h1>
              <div className="text-[14px] sm:text-[20px] font-[400] sm:font-[600] my-[20px]">
                Новый пользователь?
                <Link to="/auth/register" className="text-[#00C724]">
                  {' '}
                  Создать учетную запись
                </Link>
              </div>
              <form onSubmit={formik.handleSubmit} autoComplete="on">
                <div className="mt-[20px]">
                  <InputAuthCommon
                    name="login"
                    type="username"
                    autoComplete="username"
                    placeholder="Введите электронную почту или телефон"
                    value={formik.values.login}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    touched={formik.touched.login}
                    error={formik.errors.login}
                  />
                </div>
                <div className="mt-[10px] sm:mt-[20px]">
                  <InputAuthCommon
                    name="password"
                    type="password"
                    autoComplete="password"
                    placeholder="Введите пароль"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    touched={formik.touched.password}
                    error={formik.errors.password}
                  />
                  {error && <TextError error={'Неверный логин или пароль'} />}
                </div>
                <div className="mt-[1.25rem]">
                  <ButtonAuthCommon type="submit" isLoading={loading}>
                    Вход
                  </ButtonAuthCommon>
                </div>
              </form>
              <div className="text-left mt-[5px] sm:mt-[10px]">
                <Link to="/auth/password-reset" className="text-[#00C724] text-[12px] sm:text-[16px]">
                  Забыли пароль?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
