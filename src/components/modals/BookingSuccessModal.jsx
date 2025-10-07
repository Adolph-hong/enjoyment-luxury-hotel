import { useNavigate } from 'react-router-dom'
import BlurBg from '../ui/BlurBg'

const BookingSuccessModal = ({ isOpen, onClose, orderData }) => {
  const navigate = useNavigate()

  if (!isOpen) return null

  const handleViewOrders = () => {
    navigate('/account')
  }

  return (
    <BlurBg>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-[20px] p-10 max-w-[500px] w-full shadow-2xl relative">
          {/* 成功圖示 */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-[#52DD7E] rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          </div>

          {/* 標題 */}
          <h2 className="text-[#140F0A] text-3xl font-bold text-center mb-3">
            恭喜，{orderData?.userName || ''}！
          </h2>
          <p className="text-[#140F0A] text-xl text-center mb-8">您已預訂成功</p>

          {/* 訂單資訊 */}
          <div className="bg-[#F7F2EE] rounded-lg p-6 mb-6">
            <p className="text-[#4B4B4B] text-sm mb-4 text-center">
              我們已發送訂房資訊及詳細內容至你的電子信箱，入住時需向櫃檯人員出示訂房人證件。
            </p>

            <div className="border-t border-[#ECECEC] pt-4 space-y-3">
              <div className="flex justify-between">
                <span className="text-[#4B4B4B]">預訂參考編號</span>
                <span className="text-[#140F0A] font-bold">
                  {orderData?.orderId?.slice(-8).toUpperCase() || 'N/A'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#4B4B4B]">房型</span>
                <span className="text-[#140F0A] font-medium">{orderData?.roomName || 'N/A'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#4B4B4B]">入住日期</span>
                <span className="text-[#140F0A] font-medium">
                  {orderData?.checkInDate || 'N/A'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#4B4B4B]">退房日期</span>
                <span className="text-[#140F0A] font-medium">
                  {orderData?.checkOutDate || 'N/A'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#4B4B4B]">房客人數</span>
                <span className="text-[#140F0A] font-medium">
                  {orderData?.peopleNum || 'N/A'} 位
                </span>
              </div>
            </div>
          </div>

          {/* 訂房人資訊 */}
          <div className="mb-8">
            <h3 className="text-[#140F0A] font-bold mb-3">訂房人資訊</h3>
            <div className="space-y-2">
              <div className="flex">
                <span className="text-[#4B4B4B] w-20">姓名</span>
                <span className="text-[#140F0A]">{orderData?.userName || 'N/A'}</span>
              </div>
              <div className="flex">
                <span className="text-[#4B4B4B] w-20">電話</span>
                <span className="text-[#140F0A]">{orderData?.userPhone || 'N/A'}</span>
              </div>
              <div className="flex">
                <span className="text-[#4B4B4B] w-20">電子信箱</span>
                <span className="text-[#140F0A]">{orderData?.userEmail || 'N/A'}</span>
              </div>
            </div>
          </div>

          {/* 按鈕 */}
          <button
            onClick={handleViewOrders}
            className="w-full bg-[#BF9D7D] text-white font-bold py-4 rounded-lg hover:bg-[#A0805E] transition-colors"
          >
            查看我的訂單
          </button>
        </div>
      </div>
    </BlurBg>
  )
}

export default BookingSuccessModal
