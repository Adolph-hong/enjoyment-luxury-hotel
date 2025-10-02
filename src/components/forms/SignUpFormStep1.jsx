import { useForm } from 'react-hook-form'
import FormInput from '../ui/FormInput'
import AuthTitle from '../shared/AuthTitle'
import AuthStep from '../shared/AuthStep'
import AuthPrompt from '../shared/AuthPrompt'
import Button from '../ui/Button'

const SignUpFormStep1 = ({ onNext }) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    onNext?.(data)
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
            value: 6,
            message: '密碼至少需要 6 個字元'
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
        content={'下一步'}
        mt="mt-[24px]"
        textSize="max-sm:text-[14px]"
        type="submit"
      />
      <AuthPrompt question={'已經有會員了嗎？'} goto={'立即登入'} goUrl={'/login'} mt="mt-[16px]" />
    </form>
  )
}

export default SignUpFormStep1
