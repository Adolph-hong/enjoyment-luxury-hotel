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
        <label className="inline-flex items-center gap-3 text-white cursor-pointer">
          <input type="checkbox" className="peer sr-only" />
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
        hoverText="hover:text-[#ffffff]"
        content={'會員登入'}
      />
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
