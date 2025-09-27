import FormInput from '../ui/FormInput'
import AuthTitle from '../shared/AuthTitle'
import Button from '../ui/Button'
import { Link } from 'react-router-dom'

const LoginForm = () => {
  return (
    <form className=" flex flex-col z-10 mt-[40px] w-[416px]">
      <AuthTitle eyebrow={'享樂酒店，誠摯歡迎'} title={'立即開始旅程'} />

      <FormInput
        labelType="email"
        labelContent="電子郵件"
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

      <div className="flex justify-between mb-[40px]">
        <label className="flex items-center gap-2 text-[#FFFFFF] cursor-pointer">
          <input type="checkbox" className="size-4 accent-[#BF9D7D] " />
          記住帳號
        </label>

        <Link to="" className="text-[#BF9D7D] font-bold">
          忘記密碼？
        </Link>
      </div>

      <Button bg="bg-[#ECECEC]" color="text-[#909090]" hoverBg="hover:bg-[#BF9D7D]" hoverText="hover:text-[#ffffff]" content={'會員登入'} />
      <div className="flex gap-2 mt-[40px]">
        <p className="text-[#FFFFFF]">沒有會員嗎？</p>
        <Link to="/sign-up" className="text-[#BF9D7D] font-bold">
          前往註冊
        </Link>
      </div>
    </form>
  )
}

export default LoginForm
