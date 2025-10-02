import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FormInput from '../ui/FormInput'
import AuthTitle from '../shared/AuthTitle'
import AuthStep from '../shared/AuthStep'
import AuthPrompt from '../shared/AuthPrompt'
import BirthdayGroup from '../ui/form/BirthdayGroup'
import AddressGroup from '../ui/form/AddressGroup'
import Button from '../ui/Button'
import { signup } from '../../api/auth-api'
import { zipcodes } from '../auth/addressOptions'
import { setCookie } from '../../utils/cookie'

const SignUpFormStep2 = ({ onBack, initialData }) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    try {
      setIsLoading(true)
      setError(null)

      // Get zipcode from city and district
      const city = data.city || '高雄市'
      const district = data.district || '新興區'
      const zipcode = zipcodes[city]?.[district] || 800

      // Combine step1 and step2 data
      const signupData = {
        email: initialData.email,
        password: initialData.password,
        name: data.name,
        phone: data.phone,
        birthday: `${data.year}/${data.month}/${data.day}`,
        address: {
          zipcode: zipcode,
          detail: data.address,
        },
      }

      const response = await signup(signupData)

      // Save token to cookie if provided
      if (response.token) {
        setCookie('customTodoToken', response.token)
      }

      // Navigate to login or home page
      navigate('/login')
    } catch (err) {
      setError(err.message || '註冊失敗，請稍後再試')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form className="flex flex-col z-10 mt-[40px] w-full max-w-[416px] max-sm:max-w-[335px]" onSubmit={handleSubmit(onSubmit)}>
      <AuthTitle title={'立即註冊'} />
      <AuthStep
        textColor2="text-[#ffffff]"
        borderColor2="border-[#BF9D7D]"
        bg2="bg-[#BF9D7D]"
        lineColor="bg-[#ECECEC]"
        isDone={true}
      />
      <FormInput
        labelId="sign-2-name"
        labelContent="姓名"
        inputId="sign-2-name"
        inputType="text"
        placeholder="請輸入姓名"
        register={register('name', {
          required: '姓名為必填'
        })}
        error={errors.name}
      />
      <FormInput
        labelType="sign-2-phone"
        labelContent="手機號碼"
        inputId="sign-2-phone"
        inputType="tel"
        placeholder="請輸入手機號碼"
        pattern="^09[0-9]{8}$"
        register={register('phone', {
          required: '手機號碼為必填',
          pattern: {
            value: /^09[0-9]{8}$/,
            message: '請輸入有效的手機號碼'
          }
        })}
        error={errors.phone}
      />
      <BirthdayGroup className="w-full mb-[16px]" register={register} errors={errors} />
      <AddressGroup className="w-full mb-[16px]" register={register} watch={watch} errors={errors} />
      <FormInput
        labelType="address"
        labelContent="詳細地址"
        inputId="address"
        inputType="text"
        placeholder="請輸入詳細地址"
        register={register('address', {
          required: '詳細地址為必填'
        })}
        error={errors.address}
      />
      <label className="inline-flex items-center gap-[8px] text-white cursor-pointer w-fit mb-[8px]">
        <input type="checkbox" className="peer sr-only" {...register('agreeToTerms', {
          required: true
        })} />
        <span className="inline-flex items-center justify-center w-5 h-5 rounded-[4px] border border-[#909090] flex-shrink-0
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
        <span className="leading-none font-bold">
          我已閱讀並同意本網站個資使用規範
        </span>
      </label>
      {errors.agreeToTerms && (
        <span className="text-red-400 text-sm mb-[16px]">請同意個資使用規範</span>
      )}
      <Button
        bg="bg-[#BF9D7D]"
        color="text-[#FFFFFF]"
        content={isLoading ? '註冊中...' : '完成註冊'}
        mt="mt-[40px]"
        textSize="max-sm:text-[14px]"
        type="submit"
        disabled={isLoading}
      />
      {error && (
        <p className="text-red-400 text-sm mt-2">{error}</p>
      )}
      <AuthPrompt question={'已經有會員了嗎？'} goto={'立即登入'} goUrl={'/login'} mt="mt-[16px]" />
    </form>
  )
}

export default SignUpFormStep2
