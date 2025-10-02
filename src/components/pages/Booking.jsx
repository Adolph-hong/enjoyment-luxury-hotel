import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { getRoomById } from '../../api/home-api'
import { createOrder } from '../../api/ordersApi'
import { useAuth } from '../../contexts/AuthContext'
import py from '/src/assets/icon/Vector.svg'
import bed from '/src/assets/icon/bed.svg'
import person from '/src/assets/icon/person.svg'

const Booking = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { isLoggedIn, user } = useAuth()

  const roomId = searchParams.get('roomId')
  const initialCheckIn = searchParams.get('checkInDate') || ''
  const initialCheckOut = searchParams.get('checkOutDate') || ''
  const initialGuests = parseInt(searchParams.get('peopleNum')) || 2

  const [room, setRoom] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // 訂房表單狀態
  const [checkInDate, setCheckInDate] = useState(initialCheckIn)
  const [checkOutDate, setCheckOutDate] = useState(initialCheckOut)
  const [guestCount, setGuestCount] = useState(initialGuests)
  const [isBooking, setIsBooking] = useState(false)

  // 計算天數
  const calculateNights = () => {
    if (!checkInDate || !checkOutDate) return 0
    const checkIn = new Date(checkInDate)
    const checkOut = new Date(checkOutDate)
    const diffTime = checkOut - checkIn
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays > 0 ? diffDays : 0
  }

  const nights = calculateNights()
  const totalPrice = room ? room.price * nights : 0

  useEffect(() => {
    if (!isLoggedIn) {
      alert('請先登入會員')
      navigate('/login')
      return
    }

    if (!roomId) {
      alert('缺少房間資訊')
      navigate('/room')
      return
    }

    const controller = new AbortController()

    const fetchRoom = async () => {
      try {
        const data = await getRoomById(roomId, controller.signal)
        setRoom(data)
        setLoading(false)
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message)
          setLoading(false)
          console.error('Error fetching room:', err)
        }
      }
    }

    fetchRoom()

    return () => controller.abort()
  }, [roomId, isLoggedIn, navigate])

  const handleBooking = async () => {
    if (!checkInDate || !checkOutDate) {
      alert('請選擇入住和退房日期')
      return
    }

    if (nights <= 0) {
      alert('退房日期必須晚於入住日期')
      return
    }

    try {
      setIsBooking(true)
      const orderData = {
        roomId: roomId,
        checkInDate: checkInDate,
        checkOutDate: checkOutDate,
        peopleNum: guestCount,
      }

      await createOrder(orderData)
      alert('訂房成功！')
      navigate('/account')
    } catch (error) {
      console.error('訂房失敗:', error)

      // 如果是使用者資料未填寫，提示前往個人資料頁面
      if (error.message && error.message.includes('未填寫')) {
        alert(
          '請先完善您的個人資料（姓名、電話、地址等）才能進行訂房。點擊確定前往個人資料頁面。'
        )
        navigate('/account')
      } else {
        alert(error.message || '訂房失敗，請稍後再試')
      }
    } finally {
      setIsBooking(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F7F2EE]">
        <div className="bg-[#140F0A] h-[200px]"></div>
        <div className="flex items-center justify-center py-20">
          <p className="text-[#4B4B4B] text-xl">載入中...</p>
        </div>
      </div>
    )
  }

  if (error || !room) {
    return (
      <div className="min-h-screen bg-[#F7F2EE]">
        <div className="bg-[#140F0A] h-[200px]"></div>
        <div className="flex items-center justify-center py-20">
          <p className="text-[#4B4B4B] text-xl">無法載入房間資訊</p>
        </div>
      </div>
    )
  }

  const maxPeopleDisplay =
    typeof room.maxPeople === 'number' ? `2-${room.maxPeople} 人` : room.maxPeople

  return (
    <div className="min-h-screen bg-[#F7F2EE]">
      {/* 頂部黑色背景區域 */}
      <div className="bg-[#140F0A] h-[200px]"></div>

      <div className="container mx-auto px-4 max-w-[1296px] -mt-[100px] pb-20">
        {/* 頁面標題 */}
        <div className="mb-10">
          <button
            onClick={() => navigate(-1)}
            className="text-[#BF9D7D] hover:text-[#A0805E] mb-4 flex items-center gap-2"
          >
            <span>←</span>
            <span>返回房型詳情</span>
          </button>
          <h1 className="text-[#140F0A] text-4xl font-bold">確認訂房資訊</h1>
        </div>

        <div className="flex gap-10 max-lg:flex-col">
          {/* 左側：訂房資訊表單 */}
          <div className="flex-1 bg-white rounded-[20px] p-10">
            <h2 className="text-[#140F0A] text-2xl font-bold mb-8 pb-4 border-b-2 border-[#140F0A]">
              訂房資訊
            </h2>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              {/* 選擇房型 */}
              <div>
                <label className="block text-sm font-bold text-[#4B4B4B] mb-3">選擇房型</label>
                <div className="flex items-center gap-4 p-4 border border-[#ECECEC] rounded-lg">
                  {room.imageUrlList && room.imageUrlList.length > 0 && (
                    <img
                      src={room.imageUrlList[0]}
                      alt={room.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                  )}
                  <div className="flex-1">
                    <h3 className="text-[#140F0A] text-lg font-bold mb-1">{room.name}</h3>
                    <p className="text-[#4B4B4B] text-sm">{room.description}</p>
                  </div>
                </div>
              </div>

              {/* 訂房日期 */}
              <div>
                <label className="block text-sm font-bold text-[#4B4B4B] mb-3">訂房日期</label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[#909090] mb-2">入住日期</label>
                    <input
                      type="date"
                      value={checkInDate}
                      onChange={(e) => setCheckInDate(e.target.value)}
                      className="w-full px-4 py-3 border border-[#ECECEC] rounded-lg focus:outline-none focus:border-[#BF9D7D] text-[#4B4B4B]"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#909090] mb-2">退房日期</label>
                    <input
                      type="date"
                      value={checkOutDate}
                      onChange={(e) => setCheckOutDate(e.target.value)}
                      className="w-full px-4 py-3 border border-[#ECECEC] rounded-lg focus:outline-none focus:border-[#BF9D7D] text-[#4B4B4B]"
                      min={checkInDate || new Date().toISOString().split('T')[0]}
                    />
                  </div>
                </div>
              </div>

              {/* 房客人數 */}
              <div>
                <label className="block text-sm font-bold text-[#4B4B4B] mb-3">房客人數</label>
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                    className="w-12 h-12 flex items-center justify-center border border-[#ECECEC] rounded-lg text-[#BF9D7D] text-2xl font-bold hover:bg-[#F7F2EE] transition-colors"
                  >
                    -
                  </button>
                  <span className="text-[#140F0A] text-2xl font-medium min-w-[60px] text-center">
                    {guestCount} 人
                  </span>
                  <button
                    type="button"
                    onClick={() => setGuestCount(Math.min(room.maxPeople, guestCount + 1))}
                    className="w-12 h-12 flex items-center justify-center border border-[#ECECEC] rounded-lg text-[#BF9D7D] text-2xl font-bold hover:bg-[#F7F2EE] transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* 訂房人資訊 */}
              <div>
                <label className="block text-sm font-bold text-[#4B4B4B] mb-3">訂房人資訊</label>
                <div className="space-y-3 p-4 bg-[#F7F2EE] rounded-lg">
                  <div className="flex justify-between">
                    <span className="text-[#4B4B4B]">姓名</span>
                    <span className="text-[#140F0A] font-medium">{user?.name || '未設定'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#4B4B4B]">電話</span>
                    <span className="text-[#140F0A] font-medium">{user?.phone || '未設定'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#4B4B4B]">電子信箱</span>
                    <span className="text-[#140F0A] font-medium">{user?.email || '未設定'}</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-[#4B4B4B]">地址</span>
                    <span className="text-[#140F0A] font-medium text-right">
                      {user?.address?.city
                        ? `${user.address.city}${user.address.county} ${user.address.detail}`
                        : '未設定'}
                    </span>
                  </div>
                  {(!user?.name || !user?.phone || !user?.address?.detail) && (
                    <button
                      type="button"
                      onClick={() => navigate('/account')}
                      className="w-full mt-2 py-2 text-[#BF9D7D] text-sm underline hover:text-[#A0805E]"
                    >
                      前往完善個人資料
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>

          {/* 右側：訂單摘要 */}
          <div className="lg:w-[400px]">
            <div className="bg-white rounded-[20px] p-8 sticky top-32">
              <h2 className="text-[#140F0A] text-2xl font-bold mb-6">訂單摘要</h2>

              {/* 房型資訊 */}
              <div className="mb-6">
                <h3 className="text-[#140F0A] text-xl font-bold mb-4">{room.name}</h3>
                <div className="flex gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <img src={py} alt="area" className="w-5 h-5" />
                    <span className="text-[#4B4B4B] text-sm">{room.areaInfo}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={bed} alt="bed" className="w-5 h-5" />
                    <span className="text-[#4B4B4B] text-sm">{room.bedInfo}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={person} alt="person" className="w-5 h-5" />
                    <span className="text-[#4B4B4B] text-sm">{maxPeopleDisplay}</span>
                  </div>
                </div>
              </div>

              {/* 日期摘要 */}
              <div className="mb-6 pb-6 border-b border-[#ECECEC]">
                <div className="flex justify-between mb-2">
                  <span className="text-[#4B4B4B]">入住日期</span>
                  <span className="text-[#140F0A] font-medium">
                    {checkInDate || '請選擇日期'}
                  </span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-[#4B4B4B]">退房日期</span>
                  <span className="text-[#140F0A] font-medium">
                    {checkOutDate || '請選擇日期'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#4B4B4B]">入住天數</span>
                  <span className="text-[#140F0A] font-medium">{nights} 晚</span>
                </div>
              </div>

              {/* 價格明細 */}
              <div className="mb-6 space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#4B4B4B]">
                    NT$ {room.price.toLocaleString()} x {nights} 晚
                  </span>
                  <span className="text-[#140F0A] font-medium">
                    NT$ {totalPrice.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* 總金額 */}
              <div className="mb-6 pt-6 border-t-2 border-[#140F0A]">
                <div className="flex justify-between items-center">
                  <span className="text-[#140F0A] text-xl font-bold">總金額</span>
                  <span className="text-[#BF9D7D] text-3xl font-bold">
                    NT$ {totalPrice.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* 確認訂房按鈕 */}
              <button
                type="button"
                onClick={handleBooking}
                disabled={isBooking || !checkInDate || !checkOutDate || nights <= 0}
                className="w-full bg-[#BF9D7D] text-white font-bold py-4 rounded-lg hover:bg-[#A0805E] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isBooking ? '處理中...' : '確認訂房'}
              </button>

              <p className="text-[#909090] text-xs text-center mt-4">
                點擊「確認訂房」表示您同意本網站的服務條款與隱私政策
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking
