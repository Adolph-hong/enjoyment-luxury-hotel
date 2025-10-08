import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
const ReservationForm = ({ room, roomId }) => {
  const navigate = useNavigate()
  const { isLoggedIn } = useAuth()
  // 訂房表單狀態
  const [checkInDate, setCheckInDate] = useState('')
  const [checkOutDate, setCheckOutDate] = useState('')
  const [guestCount, setGuestCount] = useState(2)
  const handleBooking = () => {
    if (!isLoggedIn) {
      alert('請先登入會員')
      navigate('/login')
      return
    }

    if (!checkInDate || !checkOutDate) {
      alert('請選擇入住和退房日期')
      return
    }

    const checkIn = new Date(checkInDate)
    const checkOut = new Date(checkOutDate)

    if (checkOut <= checkIn) {
      alert('退房日期必須晚於入住日期')
      return
    }

    // 導航到預約頁面，帶上所有資訊
    const params = new URLSearchParams({
      roomId: roomId,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
      peopleNum: guestCount.toString(),
    })

    navigate(`/booking?${params.toString()}`)
  }
  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        {/* 入住日期 */}
        <div className=" border-2 border-black rounded-lg p-3">
          <label className="block text-sm font-medium text-[#4B4B4B] mb-2">
            入住
          </label>
          <input
            type="date"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            className="w-full px-4 py-3"
            min={new Date().toISOString().split('T')[0]}
          />
        </div>

        {/* 退房日期 */}
        <div className=" border-2 border-black rounded-lg p-3">
          <label className="block text-sm font-medium text-[#4B4B4B] mb-2">
            退房
          </label>
          <input
            type="date"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            className="w-full px-4 py-3"
            min={checkInDate || new Date().toISOString().split('T')[0]}
          />
        </div>
      </div>

      {/* 人數 */}
      <div className="flex flex-row justify-between items-center">
        <label className="block text-sm font-medium text-[#4B4B4B] mb-2">
          人數
        </label>
        <div className="flex items-center justify-between gap-5">
          <button
            type="button"
            onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
            className="text-black text-2xl font-bold w-8 h-8 flex items-center justify-center hover:bg-[#F7F2EE] pb-1 border border-[#ECECEC] rounded-4xl transition-colors"
          >
            -
          </button>
          <span className="text-[#140F0A] font-medium">{guestCount}</span>
          <button
            type="button"
            onClick={() =>
              setGuestCount(Math.min(room.maxPeople, guestCount + 1))
            }
            className="text-black text-2xl font-bold w-8 h-8 flex items-center justify-center hover:bg-[#F7F2EE] pb-1 border border-[#ECECEC] rounded-4xl transition-colors"
          >
            +
          </button>
        </div>
      </div>

      {/* 價格和預訂按鈕 */}
      <div>
        <p className="text-[#BF9D7D] text-2xl font-bold mb-6">
          NT$ {room.price.toLocaleString()}
        </p>
        <button
          type="button"
          onClick={handleBooking}
          className="w-full bg-[#BF9D7D] text-white font-bold py-4 rounded-lg hover:bg-[#A0805E] transition-colors"
        >
          立即預訂
        </button>
      </div>
    </form>
  )
}
export default ReservationForm
