import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import hotelLogo from '/src/assets/logo/hotel-logo.svg'
import hotelLogoEn from '/src/assets/logo/hotel-logo-english.svg'
import burgerLogo from '/src/assets/icon/menu-button.svg'
import cancelLogo from '/src/assets/icon/cancel.svg'
import { getCookie, deleteCookie } from '../../utils/cookie'
import { checkUser, getUser } from '../../api/auth-api'

const Header = ({ simple }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const verifyToken = async () => {
      const token = getCookie('customTodoToken')

      if (!token) {
        setIsAuthenticated(false)
        setUser(null)
        return
      }

      try {
        // 驗證 token
        await checkUser()

        // 獲取使用者資料
        const response = await getUser()
        setUser(response.result)
        setIsAuthenticated(true)
      } catch (error) {
        console.error('Token verification failed:', error)
        setIsAuthenticated(false)
        setUser(null)
        deleteCookie('customTodoToken')
      }
    }

    verifyToken()
  }, [])

  const handleLogout = () => {
    deleteCookie('customTodoToken')
    setUser(null)
    setIsAuthenticated(false)
    navigate('/login')
  }
  {
    /* 以上為漢堡圖的state */
  }
  return (
    <header className="absolute inset-x-0 top-0 z-50 text-white">
      <div className="flex justify-between">
        <div className="pt-[16px] xl:pt-[32.55px] pl-[80px] flex flex-col gap-2">
          <img src={hotelLogo} alt="hotelLogo"></img>
          <img src={hotelLogoEn} alt="hotelLogo-English" />
        </div>
        {/* 以下為漢堡圖區域 */}
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            type="button"
            className="cursor-pointer xl:hidden pr-10 block"
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
              to="room"
              className="w-11/12 max-w-[700px] text-2xl font-bold inline-flex items-center justify-center px-8 py-7 rounded-lg text-white
             transition-colors duration-200 hover:bg-[#BF9D7D]"
            >
              客房旅宿
            </Link>
            {isAuthenticated ? (
              <>
                <Link
                  to="/account"
                  onClick={() => setIsOpen(false)}
                  className="w-11/12 max-w-[700px] text-2xl font-bold inline-flex items-center justify-center px-8 py-7 rounded-lg text-white
                 transition-colors duration-200 hover:bg-[#BF9D7D]"
                >
                  {user?.name || '會員中心'}
                </Link>
                <button
                  onClick={() => {
                    handleLogout()
                    setIsOpen(false)
                  }}
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
              to="room"
              className="font-bold inline-flex items-center justify-center px-8 py-1 rounded-lg font-bold text-white
             transition-colors duration-200 hover:bg-[#BF9D7D]"
            >
              客房旅宿
            </Link>
            {isAuthenticated ? (
              <>
                <Link
                  to="/account"
                  className="font-bold inline-flex items-center justify-center px-8 py-1 rounded-lg font-bold text-white
                 transition-colors duration-200 hover:bg-[#BF9D7D]"
                >
                  {user?.name || '會員中心'}
                </Link>
                <button
                  onClick={handleLogout}
                  className="font-bold inline-flex items-center justify-center px-8 py-1 rounded-lg font-bold text-white
                 transition-colors duration-200 hover:bg-[#BF9D7D]"
                >
                  登出
                </button>
              </>
            ) : (
              <Link
                to="login"
                className="font-bold inline-flex items-center justify-center px-8 py-1 rounded-lg font-bold text-white
               transition-colors duration-200 hover:bg-[#BF9D7D]"
              >
                會員登入
              </Link>
            )}
            <Link
              to="/"
              className="font-bold inline-flex items-center justify-center px-8 py-1 rounded-lg font-bold text-white
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
