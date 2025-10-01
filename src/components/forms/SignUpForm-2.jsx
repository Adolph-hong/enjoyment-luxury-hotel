import FormInput from '../ui/FormInput'
import AuthTitle from '../shared/AuthTitle'
import AuthStep from '../shared/AuthStep'
import AuthPrompt from '../shared/AuthPrompt'
import Select from '../ui/form/Select'
import BirthdayGroup from '../ui/form/BirthdayGroup'
import AddressGroup from '../ui/form/AddressGroup'
import Button from '../ui/Button'

const SignUpForm2 = () => {
  return (
    <form className=" flex flex-col z-10 mt-[40px] w-[416px] max-sm:max-w-[335px] max-sm:px-[20px]">
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
      />
      <FormInput
        labelType="sign-2-phone"
        labelContent="手機號碼"
        inputId="sign-2-phone"
        inputType="tel"
        placeholder="請輸入手機號碼"
        pattern="^09[0-9]{8}$"
      />
      <BirthdayGroup className="w-full mb-[16px]" />
      <AddressGroup className="w-full mb-[16px]" />
      <FormInput
        labelType="address"
        inputId="address"
        inputType="text"
        placeholder="請輸入詳細地址"
      />
      <label className="inline-flex items-center gap-[8px] text-white cursor-pointer w-fit">
        <input type="checkbox" className="peer sr-only" />
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
      <Button
        bg="bg-[#BF9D7D]"
        color="text-[#FFFFFF]"
        content={'完成註冊'}
        mt="mt-[40px]"
        textSize="max-sm:text-[14px]"
        url="/"
      />
      <AuthPrompt question={'已經有會員了嗎？'} goto={'立即登入'} goUrl={'/login'} mt="mt-[16px]" />
    </form>
  )
}

export default SignUpForm2
