import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { login } from '../../api/usersApi'
import { useAuth } from '../../contexts/AuthContext'
import { setCookie } from '../../utils/cookie'
import FormInput from '../ui/FormInput'
import AuthTitle from '../shared/AuthTitle'
import Button from '../ui/Button'
import { Link, useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const { fetchUser } = useAuth()

  const onSubmit = async (data) => {
    try {
      setIsLoading(true)
      const result = await login(data.email, data.password)
      console.log('登入成功:', result)
      if (result.token) {
        setCookie('customTodoToken', result.token)
        await fetchUser()
      }
      navigate('/')
    } catch (error) {
      console.error('登入失敗:', error)
      alert(error.message || '登入失敗，請檢查帳號密碼')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col  z-10 mt-[40px] w-full max-w-[416px] max-sm:max-w-[335px] max-sm:px-[20px]">
      <AuthTitle eyebrow={'享樂酒店，誠摯歡迎'} title={'立即開始旅程'} />

      <FormInput
        labelType="email"
        labelContent="電子信箱"
        inputId="email"
        inputType="email"
        placeholder="hello@exsample.com"
        register={register('email', {
          required: '電子信箱為必填',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: '請輸入有效的電子信箱'
          }
        })}
        error={errors.email}
      />
      <FormInput
        labelType="password"
        labelContent="密碼"
        inputId="password"
        inputType="password"
        placeholder="請輸入密碼"
        register={register('password', {
          required: '密碼為必填',
          minLength: {
            value: 8,
            message: '密碼至少需要 8 個字元'
          },
          pattern: {
            value: /^(?=.*[a-zA-Z])/,
            message: '密碼不能只有數字，需包含英文字母'
          }
        })}
        error={errors.password}
      />

      <div className="flex justify-between mb-[40px] max-sm:text-[14px]">
        <label className="inline-flex items-center gap-3 text-white cursor-pointer">
          <input type="checkbox" className="peer sr-only" {...register('rememberMe')} />
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-md border border-white/60
                      peer-checked:bg-[#BF9D7D] peer-checked:border-[#BF9D7D]
                      [&>svg]:opacity-0 peer-checked:[&>svg]:opacity-100
                      transition-opacity"
          >
            <svg
              className="block w-3 h-3 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
          </span>

          <span className="leading-none">記住帳號</span>
        </label>

        <Link to="" className="text-[#BF9D7D] font-bold">
          忘記密碼？
        </Link>
      </div>

      <Button
        bg="bg-[#ECECEC]"
        color="text-[#909090]"
        hoverBg="hover:bg-[#BF9D7D]"
        textSize="max-sm:text-[14px]"
        hoverText="hover:text-[#ffffff]"
        content={isLoading ? '登入中...' : '會員登入'}
        type="submit"
        disabled={isLoading}
      />
      <div className="flex gap-2 mt-[40px] max-sm:text-[14px]" >
        <p className="text-[#FFFFFF]">沒有會員嗎？</p>
        <Link to="/sign-up" className="text-[#BF9D7D] font-bold">
          前往註冊
        </Link>
      </div>
    </form>
  )
}

export default LoginForm
