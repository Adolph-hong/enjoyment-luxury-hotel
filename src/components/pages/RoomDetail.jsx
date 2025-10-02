import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getRoomById } from '../../api/home-api'
import { createOrder } from '../../api/ordersApi'
import { useAuth } from '../../contexts/AuthContext'
import py from '/src/assets/icon/Vector.svg'
import bed from '/src/assets/icon/bed.svg'
import person from '/src/assets/icon/person.svg'

const RoomDetail = () => {
  const { roomId } = useParams()
  const navigate = useNavigate()
  const { isLoggedIn } = useAuth()
  const [room, setRoom] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // 訂房表單狀態
  const [checkInDate, setCheckInDate] = useState('')
  const [checkOutDate, setCheckOutDate] = useState('')
  const [guestCount, setGuestCount] = useState(2)
  const [isBooking, setIsBooking] = useState(false)

  useEffect(() => {
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
  }, [roomId])

  const handleBooking = async () => {
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
        alert('請先完善您的個人資料（姓名、電話、地址等）才能進行訂房。點擊確定前往個人資料頁面。')
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
      <div className="min-h-screen flex items-center justify-center bg-[#F7F2EE] pt-32">
        <p className="text-[#4B4B4B] text-xl">載入中...</p>
      </div>
    )
  }

  if (error || !room) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F7F2EE] pt-32">
        <p className="text-[#4B4B4B] text-xl">無法載入房間資訊</p>
      </div>
    )
  }

  const maxPeopleDisplay =
    typeof room.maxPeople === 'number' ? `2-${room.maxPeople} 人` : room.maxPeople

  return (
    <div className="min-h-screen bg-[#F7F2EE] pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-[1296px]">
        {/* 圖片展示區 - 左大右小網格 */}
        <div className="mb-16 flex gap-6 h-[530px] max-md:flex-col max-md:h-auto">
          {/* 左側大圖 */}
          <div className="w-[57%] max-md:w-full max-md:h-[300px]">
            {room.imageUrlList && room.imageUrlList.length > 0 && (
              <img
                src={room.imageUrlList[0]}
                alt={`${room.name} - 主圖`}
                className="w-full h-full object-cover rounded-[20px]"
              />
            )}
          </div>

          {/* 右側 2x2 小圖網格 */}
          <div className="flex-1 grid grid-cols-2 gap-6 max-md:grid-cols-2 max-md:h-[300px]">
            {room.imageUrlList &&
              room.imageUrlList.slice(1, 5).map((image, index) => (
                <div key={index} className="overflow-hidden rounded-[20px]">
                  <img
                    src={image}
                    alt={`${room.name} - ${index + 2}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
          </div>
        </div>

        {/* 內容區 */}
        <div className="flex gap-10 max-lg:flex-col">
          {/* 左側資訊區 */}
          <div className="flex-1 bg-white rounded-[20px] p-10">
            {/* 房間標題 */}
            <div className="mb-10">
              <h1 className="text-[#140F0A] text-[48px] font-bold mb-4">{room.name}</h1>
              <p className="text-[#4B4B4B] leading-8 whitespace-pre-line text-base">
                {room.description}
              </p>
            </div>

            {/* 房型基本資訊 */}
            <div className="mb-10">
              <h2 className="text-[#140F0A] text-2xl font-bold mb-6 pb-4 border-b-2 border-[#140F0A]">
                房型基本資訊
              </h2>
              <div className="flex gap-4 flex-wrap">
                <div className="flex flex-col items-center gap-2 border border-[#ECECEC] rounded-lg px-8 py-6 min-w-[140px]">
                  <div className="w-10 h-10">
                    <img src={py} alt="square meter icon" />
                  </div>
                  <p className="text-[#4B4B4B] text-base font-bold">{room.areaInfo}</p>
                </div>
                <div className="flex flex-col items-center gap-2 border border-[#ECECEC] rounded-lg px-8 py-6 min-w-[140px]">
                  <div className="w-10 h-10">
                    <img src={bed} alt="bed icon" />
                  </div>
                  <p className="text-[#4B4B4B] text-base font-bold">{room.bedInfo}</p>
                </div>
                <div className="flex flex-col items-center gap-2 border border-[#ECECEC] rounded-lg px-8 py-6 min-w-[140px]">
                  <div className="w-10 h-10">
                    <img src={person} alt="person icon" />
                  </div>
                  <p className="text-[#4B4B4B] text-base font-bold">{maxPeopleDisplay}</p>
                </div>
              </div>
            </div>

            {/* 房間格局 */}
            <div className="mb-10">
              <h2 className="text-[#140F0A] text-2xl font-bold mb-6 pb-4 border-b-2 border-[#140F0A]">
                房間格局
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {room.layoutInfo?.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    {item.isProvide ? (
                      <svg
                        className="w-6 h-6 text-[#BF9D7D]"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6 text-[#ECECEC]"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                    )}
                    <span className={`text-base ${item.isProvide ? 'text-[#4B4B4B]' : 'text-[#ECECEC]'}`}>
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 房內設備 */}
            <div className="mb-10">
              <h2 className="text-[#140F0A] text-2xl font-bold mb-6 pb-4 border-b-2 border-[#140F0A]">
                房內設備
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {room.facilityInfo?.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    {item.isProvide ? (
                      <svg
                        className="w-6 h-6 text-[#BF9D7D]"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6 text-[#ECECEC]"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                    )}
                    <span className={`text-base ${item.isProvide ? 'text-[#4B4B4B]' : 'text-[#ECECEC]'}`}>
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 備品提供 */}
            <div className="mb-10">
              <h2 className="text-[#140F0A] text-2xl font-bold mb-6 pb-4 border-b-2 border-[#140F0A]">
                備品提供
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {room.amenityInfo?.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    {item.isProvide ? (
                      <svg
                        className="w-6 h-6 text-[#BF9D7D]"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6 text-[#ECECEC]"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                    )}
                    <span className={`text-base ${item.isProvide ? 'text-[#4B4B4B]' : 'text-[#ECECEC]'}`}>
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 訂房須知 */}
            <div>
              <h2 className="text-[#140F0A] text-2xl font-bold mb-6 pb-4 border-b-2 border-[#140F0A]">
                訂房須知
              </h2>
              <ul className="space-y-2 text-[#4B4B4B] text-base leading-7">
                <li className="flex">
                  <span className="mr-2">1.</span>
                  <span>入住時間為下午3點，退房時間為上午11點</span>
                </li>
                <li className="flex">
                  <span className="mr-2">2.</span>
                  <span>如需提前入住或延後退房，請提前與櫃檯聯繫，視當日房況為主（可能會產生額外費用）</span>
                </li>
                <li className="flex">
                  <span className="mr-2">3.</span>
                  <span>若您有任何疑問或需要協助，請隨時與我們的櫃檯人員聯繫，我們將竭誠為您服務</span>
                </li>
                <li className="flex">
                  <span className="mr-2">4.</span>
                  <span>為了確保所有房客的安全和舒適，我們提醒您遵守飯店的相關規定和禮儀</span>
                </li>
                <li className="flex">
                  <span className="mr-2">5.</span>
                  <span>請勿在房間內抽煙，若有抽菸需求，可以使用設在酒店各樓層的專用吸煙區</span>
                </li>
                <li className="flex">
                  <span className="mr-2">6.</span>
                  <span>若您需要額外的毛巾、盥洗用品或其他物品，請聯繫櫃檯，我們將盡快為您提供</span>
                </li>
                <li className="flex">
                  <span className="mr-2">7.</span>
                  <span>請愛惜房內的設施和物品，如有損壞或遺失，將依照飯店相關規定進行賠償</span>
                </li>
                <li className="flex">
                  <span className="mr-2">8.</span>
                  <span>如您在入住期間遇到任何問題或有特殊需求，請隨時向櫃檯人員反映，我們將盡力協助解決</span>
                </li>
                <li className="flex">
                  <span className="mr-2">9.</span>
                  <span>為了維護其他房客的權益和安寧，請避免在深夜時段大聲喧嘩或播放音樂</span>
                </li>
                <li className="flex">
                  <span className="mr-2">10.</span>
                  <span>為了維護房間的最佳狀態，我們禁止在房間內烹飪或使用加熱設備。感謝您的理解和配合</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 右側訂房表單 */}
          <div className="lg:w-[400px]">
            <div className="bg-white rounded-lg p-8 sticky top-32">
              <p className="text-sm text-[#4B4B4B] mb-2">預約房型</p>
              <h2 className="text-3xl font-bold text-[#140F0A] mb-8">{room.name}</h2>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                {/* 入住日期 */}
                <div>
                  <label className="block text-sm font-medium text-[#4B4B4B] mb-2">入住</label>
                  <input
                    type="date"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className="w-full px-4 py-3 border border-[#ECECEC] rounded-lg focus:outline-none focus:border-[#BF9D7D] text-[#4B4B4B]"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                {/* 退房日期 */}
                <div>
                  <label className="block text-sm font-medium text-[#4B4B4B] mb-2">退房</label>
                  <input
                    type="date"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    className="w-full px-4 py-3 border border-[#ECECEC] rounded-lg focus:outline-none focus:border-[#BF9D7D] text-[#4B4B4B]"
                    min={checkInDate || new Date().toISOString().split('T')[0]}
                  />
                </div>

                {/* 人數 */}
                <div>
                  <label className="block text-sm font-medium text-[#4B4B4B] mb-2">人數</label>
                  <div className="flex items-center justify-between border border-[#ECECEC] rounded-lg px-4 py-3">
                    <button
                      type="button"
                      onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                      className="text-[#BF9D7D] text-2xl font-bold w-8 h-8 flex items-center justify-center hover:bg-[#F7F2EE] rounded transition-colors"
                    >
                      -
                    </button>
                    <span className="text-[#140F0A] font-medium">{guestCount}</span>
                    <button
                      type="button"
                      onClick={() => setGuestCount(Math.min(room.maxPeople, guestCount + 1))}
                      className="text-[#BF9D7D] text-2xl font-bold w-8 h-8 flex items-center justify-center hover:bg-[#F7F2EE] rounded transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* 價格和預訂按鈕 */}
                <div className="pt-6 border-t border-[#ECECEC]">
                  <p className="text-[#BF9D7D] text-4xl font-bold mb-6">
                    NT$ {room.price.toLocaleString()}
                  </p>
                  <button
                    type="button"
                    onClick={handleBooking}
                    disabled={isBooking}
                    className="w-full bg-[#BF9D7D] text-white font-bold py-4 rounded-lg hover:bg-[#A0805E] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isBooking ? '預訂中...' : '立即預訂'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomDetail
