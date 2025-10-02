import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { getRoomById } from '../../api/home-api'
import py from '/src/assets/icon/Vector.svg'
import bed from '/src/assets/icon/bed.svg'
import person from '/src/assets/icon/person.svg'

const RoomDetail = () => {
  const { roomId } = useParams()
  const [room, setRoom] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // 訂房表單狀態
  const [checkInDate, setCheckInDate] = useState('')
  const [checkOutDate, setCheckOutDate] = useState('')
  const [guestCount, setGuestCount] = useState(2)

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

  const handleBooking = () => {
    if (!checkInDate || !checkOutDate) {
      alert('請選擇入住和退房日期')
      return
    }
    // TODO: 實作訂房邏輯
    console.log('訂房資料:', { roomId, checkInDate, checkOutDate, guestCount })
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#140F0A]">
        <p className="text-white text-xl">載入中...</p>
      </div>
    )
  }

  if (error || !room) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#140F0A]">
        <p className="text-white text-xl">無法載入房間資訊</p>
      </div>
    )
  }

  const maxPeopleDisplay = typeof room.maxPeople === 'number' ? `2-${room.maxPeople} 人` : room.maxPeople

  return (
    <div className="min-h-screen bg-[#140F0A] pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* 圖片輪播區 */}
        <div className="mb-10">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={true}
            pagination={{ clickable: true }}
            loop={room.imageUrlList && room.imageUrlList.length > 1}
            className="h-[400px] md:h-[500px] lg:h-[600px] rounded-[20px] overflow-hidden"
          >
            {room.imageUrlList && room.imageUrlList.length > 0 ? (
              room.imageUrlList.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={`${room.name} - ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))
            ) : (
              <SwiperSlide>
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-500">暫無圖片</p>
                </div>
              </SwiperSlide>
            )}
          </Swiper>
        </div>

        {/* 內容區 */}
        <div className="flex gap-10 max-lg:flex-col">
          {/* 左側資訊區 */}
          <div className="flex-1 bg-white rounded-[20px] p-8 md:p-10">
            <h1 className="text-[32px] md:text-[48px] font-bold text-[#140F0A] mb-6">
              {room.name}
            </h1>
            <p className="text-[#140F0A] mb-10 leading-relaxed whitespace-pre-line">
              {room.description}
            </p>

            {/* 房間規格本區 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-[#140F0A] mb-6 pb-2 border-b-2 border-[#140F0A]">
                房型基本資訊
              </h2>
              <div className="flex gap-4 flex-wrap">
                <div className="flex flex-col items-center justify-center border border-[#F1EAE4] rounded-lg p-6 min-w-[140px]">
                  <div className="w-10 h-10 mb-2">
                    <img src={py} alt="square meter icon" />
                  </div>
                  <p className="text-base font-bold">{room.areaInfo}</p>
                </div>
                <div className="flex flex-col items-center justify-center border border-[#F1EAE4] rounded-lg p-6 min-w-[140px]">
                  <div className="w-10 h-10 mb-2">
                    <img src={bed} alt="bed icon" />
                  </div>
                  <p className="text-base font-bold">{room.bedInfo}</p>
                </div>
                <div className="flex flex-col items-center justify-center border border-[#F1EAE4] rounded-lg p-6 min-w-[140px]">
                  <div className="w-10 h-10 mb-2">
                    <img src={person} alt="person icon" />
                  </div>
                  <p className="text-base font-bold">{maxPeopleDisplay}</p>
                </div>
              </div>
            </div>

            {/* 房間格局 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-[#140F0A] mb-6 pb-2 border-b-2 border-[#140F0A]">
                房間格局
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {room.layoutInfo?.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className={item.isProvide ? 'text-green-600' : 'text-red-600'}>
                      {item.isProvide ? '✓' : '✗'}
                    </span>
                    <span className="text-[#140F0A]">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 房內設備 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-[#140F0A] mb-6 pb-2 border-b-2 border-[#140F0A]">
                房內設備
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {room.facilityInfo?.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className={item.isProvide ? 'text-green-600' : 'text-red-600'}>
                      {item.isProvide ? '✓' : '✗'}
                    </span>
                    <span className="text-[#140F0A]">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 備品提供 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-[#140F0A] mb-6 pb-2 border-b-2 border-[#140F0A]">
                備品提供
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {room.amenityInfo?.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className={item.isProvide ? 'text-green-600' : 'text-red-600'}>
                      {item.isProvide ? '✓' : '✗'}
                    </span>
                    <span className="text-[#140F0A]">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 訂房須知 */}
            <div>
              <h2 className="text-2xl font-bold text-[#140F0A] mb-6 pb-2 border-b-2 border-[#140F0A]">
                訂房須知
              </h2>
              <ul className="list-decimal list-inside space-y-2 text-[#140F0A]">
                <li>入住時間為下午3點，退房時間為上午11點</li>
                <li>如需提前入住或延後退房，請提前與櫃檯聯繫，視當日房況為主（可能會產生額外費用）</li>
                <li>若您有任何疑問或需要協助，請隨時與我們的櫃檯人員聯繫，我們將竭誠為您服務</li>
                <li>
                  為了確保所有房客的安全和舒適，我們提醒您遵守飯店的相關規定和禮儀
                </li>
                <li>請勿在房間內抽煙，若有抽菸需求，可以使用設在酒店各樓層的專用吸煙區</li>
                <li>
                  若您需要額外的毛巾、盥洗用品或其他物品，請聯繫櫃檯，我們將盡快為您提供
                </li>
                <li>請愛惜房內的設施和物品，如有損壞或遺失，將依照飯店相關規定進行賠償</li>
                <li>
                  如您在入住期間遇到任何問題或有特殊需求，請隨時向櫃檯人員反映，我們將盡力協助解決
                </li>
                <li>
                  為了維護其他房客的權益和安寧，請避免在深夜時段大聲喧嘩或播放音樂
                </li>
              </ul>
            </div>
          </div>

          {/* 右側訂房表單 */}
          <div className="lg:w-[400px]">
            <div className="bg-white rounded-[20px] p-8 sticky top-32">
              <h3 className="text-xl font-bold text-[#140F0A] mb-4">預約房型</h3>
              <h2 className="text-3xl font-bold text-[#140F0A] mb-6">{room.name}</h2>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                {/* 入住日期 */}
                <div>
                  <label className="block text-sm font-bold text-[#140F0A] mb-2">
                    入住
                  </label>
                  <input
                    type="date"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className="w-full px-4 py-3 border border-[#F1EAE4] rounded-lg focus:outline-none focus:border-[#BF9D7D]"
                    placeholder="2023 / 12 / 03"
                  />
                </div>

                {/* 退房日期 */}
                <div>
                  <label className="block text-sm font-bold text-[#140F0A] mb-2">
                    退房
                  </label>
                  <input
                    type="date"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    className="w-full px-4 py-3 border border-[#F1EAE4] rounded-lg focus:outline-none focus:border-[#BF9D7D]"
                    placeholder="2023 / 12 / 04"
                  />
                </div>

                {/* 人數 */}
                <div>
                  <label className="block text-sm font-bold text-[#140F0A] mb-2">
                    人數
                  </label>
                  <div className="flex items-center justify-between border border-[#F1EAE4] rounded-lg px-4 py-3">
                    <button
                      type="button"
                      onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                      className="text-[#BF9D7D] text-2xl font-bold w-8 h-8 flex items-center justify-center hover:bg-[#F7F2EE] rounded"
                    >
                      -
                    </button>
                    <span className="text-[#140F0A] font-bold">{guestCount}</span>
                    <button
                      type="button"
                      onClick={() => setGuestCount(Math.min(room.maxPeople, guestCount + 1))}
                      className="text-[#BF9D7D] text-2xl font-bold w-8 h-8 flex items-center justify-center hover:bg-[#F7F2EE] rounded"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* 價格 */}
                <div className="pt-4 border-t border-[#F1EAE4]">
                  <p className="text-[#BF9D7D] text-3xl font-bold mb-6">
                    NT$ {room.price.toLocaleString()}
                  </p>
                  <button
                    type="button"
                    onClick={handleBooking}
                    className="w-full bg-[#BF9D7D] text-white font-bold py-4 rounded-lg hover:bg-[#8B6F47] transition-colors"
                  >
                    立即預訂
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
