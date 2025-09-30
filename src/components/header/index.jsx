import { Link } from 'react-router-dom'
import hotelLogo from '/src/assets/logo/hotel-logo.svg'
import hotelLogoEn from '/src/assets/logo/hotel-logo-english.svg'
import burgerLogo from '/src/assets/icon/menu-button.svg'

const Header = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-50 text-white">
      <div className="flex justify-between">
        <div className="pt-[16px] xl:pt-[32.55px] pl-[80px] flex flex-col gap-2">
          <img src={hotelLogo} alt="hotelLogo"></img>
          <img src={hotelLogoEn} alt="hotelLogo-English" />
        </div>
        <img src={burgerLogo} alt="burgerLogo" className="xl:hidden pr-10" />
        <nav className="hidden xl:flex gap-2 pt-[20px] pr-[62px]">
          <Link
            to="/"
            className="font-bold inline-flex items-center justify-center px-8 py-1 rounded-lg font-bold text-white
             transition-colors duration-200 hover:bg-[#BF9D7D]"
          >
            客房旅宿
          </Link>
          <Link
            to="login"
            className="font-bold inline-flex items-center justify-center px-8 py-1 rounded-lg font-bold text-white
             transition-colors duration-200 hover:bg-[#BF9D7D]"
          >
            會員登入
          </Link>
          <Link
            to="/"
            className="font-bold inline-flex items-center justify-center px-8 py-1 rounded-lg font-bold text-white
             transition-colors duration-200 hover:bg-[#BF9D7D]"
          >
            立即訂房
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
