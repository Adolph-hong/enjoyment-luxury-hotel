import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import hotelLogo from '/src/assets/logo/hotel-logo.svg'
import hotelLogoEn from '/src/assets/logo/hotel-logo-english.svg'
import burgerLogo from '/src/assets/icon/menu-button.svg'
import cancelLogo from '/src/assets/icon/cancel.svg'

const Header = ({ simple }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const { isLoggedIn, user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
    setIsOpen(false)
    setIsDropdownOpen(false)
  }

  {
    /* 以上為漢堡圖的state */
  }
  return (
    <header className="absolute inset-x-0 top-0 z-50 text-white">
      <div className="flex justify-between">
        <div className="pt-6 md:pt-[32.55px] pl-5 md:pl-[60px] flex flex-col gap-2">
          <Link to="/">
            <img src={hotelLogo} alt="hotelLogo"></img>
          </Link>
          <Link to="/">
            <img src={hotelLogoEn} alt="hotelLogo-English" />
          </Link>
        </div>
        {/* 以下為漢堡圖區域 */}
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            type="button"
            className="cursor-pointer xl:hidden pr-4 block"
          >
            <img src={burgerLogo} alt="burgerLogo" />
          </button>
        )}
        {isOpen && (
          <div className="fixed inset-0 bg-[#140F0A] flex flex-col items-center justify-center gap-16">
            <button
              type="button"
              className="cursor-pointer absolute top-10 right-10"
              onClick={() => setIsOpen(false)}
            >
              <img src={cancelLogo} alt="cancel logo" />
            </button>
            <Link
              onClick={() => setIsOpen(false)}
              to="room"
              className="w-11/12 max-w-[700px] text-2xl font-bold inline-flex items-center justify-center px-8 py-7 rounded-lg text-white
             transition-colors duration-200 hover:bg-[#BF9D7D]"
            >
              客房旅宿
            </Link>
            {isLoggedIn ? (
              <>
                <Link
                  to="/account"
                  onClick={() => setIsOpen(false)}
                  className="w-11/12 max-w-[700px] text-2xl font-bold inline-flex items-center justify-center px-8 py-7 rounded-lg text-white
                 transition-colors duration-200 hover:bg-[#BF9D7D]"
                >
                  {user?.name || '會員'}
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-11/12 max-w-[700px] text-2xl font-bold inline-flex items-center justify-center px-8 py-7 rounded-lg text-white
                 transition-colors duration-200 hover:bg-[#BF9D7D]"
                >
                  登出
                </button>
              </>
            ) : (
              <Link
                to="login"
                onClick={() => setIsOpen(false)}
                className="w-11/12 max-w-[700px] text-2xl font-bold inline-flex items-center justify-center px-8 py-7 rounded-lg text-white
               transition-colors duration-200 hover:bg-[#BF9D7D]"
              >
                會員登入
              </Link>
            )}
            <Link
              to="/booking"
              className="w-11/12 max-w-[700px] text-2xl font-bold inline-flex items-center justify-center px-8 py-7 rounded-lg text-white
             transition-colors duration-200 hover:bg-[#BF9D7D]"
            >
              立即訂房
            </Link>
          </div>
        )}
        {/* 以上為漢堡圖區域 */}
        {!simple && (
          <nav className="hidden xl:flex gap-2 pt-[20px] pr-[62px]">
            <Link
              to="/room"
              className="font-bold inline-flex items-center justify-center px-8 py-1 rounded-lg font-bold text-white
             transition-colors duration-200 hover:bg-[#BF9D7D]"
            >
              客房旅宿
            </Link>
            {isLoggedIn ? (
              <div className="relative flex">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="font-bold inline-flex items-center justify-center px-8 py-1 rounded-lg text-white
                 transition-colors duration-200 hover:bg-[#BF9D7D]"
                >
                  {user?.name || '會員中心'}
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 top-[calc(100%+12px)] w-[260px] bg-white rounded-lg shadow-lg z-50 py-[12px]">
                    <Link
                      to="/account"
                      onClick={() => setIsDropdownOpen(false)}
                      className="block px-4 py-3 text-black hover:bg-[#F7F2EE] font-bold  hover:text-[#BF9D7D] transition-colors"
                    >
                      會員中心
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left block px-4 py-3 text-black hover:bg-[#F7F2EE] font-bold  hover:text-[#BF9D7D] transition-colors cursor-pointer"
                    >
                      登出
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="login"
                className="font-bold inline-flex items-center justify-center px-8 py-1 rounded-lg text-white
               transition-colors duration-200 hover:bg-[#BF9D7D]"
              >
                會員登入
              </Link>
            )}
            <Link
              to="/booking"
              className="font-bold inline-flex items-center justify-center px-8 py-1 rounded-lg text-white
             transition-colors duration-200 hover:bg-[#BF9D7D]"
            >
              立即訂房
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
