import FormInput from '../ui/FormInput'
import AuthTitle from '../shared/AuthTitle'
import AuthStep from '../shared/AuthStep'
import AuthPrompt from '../shared/AuthPrompt'
import Button from '../ui/Button'

const SignUpFormStep1 = ({ onNext }) => {
  return (
    <form className="flex flex-col z-10 mt-[40px] w-full max-w-[416px] max-sm:max-w-[335px] max-sm:px-[20px]" onSubmit={(e) => { e.preventDefault(); onNext?.(); }}>
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
      />
      <FormInput
        labelType="password"
        labelContent="密碼"
        inputId="password"
        inputType="password"
        placeholder="請輸入密碼"
      />
      <FormInput
        labelType="password"
        labelContent="確認密碼"
        inputId="password"
        inputType="password"
        placeholder="請再輸入一次密碼"
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
