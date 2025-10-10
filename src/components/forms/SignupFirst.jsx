import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { verifyEmail } from '../../api/usersApi'
import FormInput from '../ui/FormInput'
import AuthTitle from '../shared/AuthTitle'
import AuthStep from '../shared/AuthStep'
import AuthPrompt from '../shared/AuthPrompt'
import Button from '../ui/Button'

const SignupFirst = ({ onNext }) => {
  const { register, handleSubmit, watch, formState: { errors }, setError } = useForm()
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (data) => {
    try {
      setIsLoading(true)

      // 先驗證 email 是否已註冊
      const verifyResult = await verifyEmail(data.email)

      if (verifyResult.result?.isEmailExists) {
        setError('email', {
          type: 'manual',
          message: '此 Email 已註冊'
        })
        return
      }

      // Email 可用，進入下一步
      onNext?.(data)
    } catch (error) {
      console.error('驗證失敗:', error)
      alert(error.message || '驗證失敗，請稍後再試')
    } finally {
      setIsLoading(false)
    }
  }

  const password = watch('password')

  return (
    <form className="flex flex-col z-10 mt-[40px] w-full max-w-[416px] max-sm:max-w-[335px]" onSubmit={handleSubmit(onSubmit)}>
        <AuthTitle eyebrow={'享樂酒店，誠摯歡迎'} title={'立即註冊'} />
        <AuthStep
        textColor2="text-[#909090]"
        borderColor2="border-[#909090]"
        lineColor="bg-[#909090]"
        isDone={false}
        />
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
      <FormInput
        labelType="password"
        labelContent="確認密碼"
        inputId="confirmPassword"
        inputType="password"
        placeholder="請再輸入一次密碼"
        register={register('confirmPassword', {
          required: '請確認密碼',
          validate: value => value === password || '密碼不一致'
        })}
        error={errors.confirmPassword}
      />
      <Button
        bg="bg-[#ECECEC]"
        color="text-[#909090]"
        hoverBg="hover:bg-[#BF9D7D]"
        hoverText="hover:text-[#ffffff]"
        content={isLoading ? '驗證中...' : '下一步'}
        mt="mt-[24px]"
        textSize="max-sm:text-[14px]"
        type="submit"
        disabled={isLoading}
      />
      <AuthPrompt question={'已經有會員了嗎？'} goto={'立即登入'} goUrl={'/login'} mt="mt-[16px]" />
    </form>
  )
}

export default SignupFirst
