import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getRoomById } from '../../api/homeApi'
import py from '/src/assets/icon/Vector.svg'
import bed from '/src/assets/icon/bed.svg'
import person from '/src/assets/icon/person.svg'
import RoomTitle from '../room/RoomTitle'
import InfoCard from '../room/InfoCard'
import InfoText from '../room/InfoText'
import ReserveInfo from '../room/ReserveInfo'
import RoomHero from '../room/RoomHero'
import ReserveForm from '../forms/ReservationForm'
import RoomLoading from '../room/RoomLoading'
import { RoomId } from '@/types/api/roomId'

const RoomDetail: React.FC = () => {
  const { roomId } = useParams<{ roomId: string }>()
  const [room, setRoom] = useState<RoomId | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!roomId) {
      setError('找不到房間 ID')
      setLoading(false)
      return
    }
    const controller = new AbortController()

    const fetchRoom = async () => {
      try {
        const data = await getRoomById(roomId, controller.signal)
        setRoom(data)
        setLoading(false)
      } catch (err) {
        if (err instanceof Error && err.name !== 'AbortError') {
          setError(err.message)
          setLoading(false)
          console.error('Error fetching room:', err)
        }
      }
    }

    fetchRoom()

    return () => controller.abort()
  }, [roomId])

  if (loading) {
    return <RoomLoading text="載入中..." />
  }

  if (error || !room) {
    return <RoomLoading text="無法載入房間資訊" />
  }

  const maxPeopleDisplay =
    typeof room.maxPeople === 'number' ? `2-${room.maxPeople} 人` : room.maxPeople

  return (
    <div className="min-h-screen bg-[#F7F2EE]">
      {/* 頂部黑色背景區域 */}
      <div className="bg-[#140F0A] h-[100px]"></div>

      <div className="container mx-auto px-4 max-w-screen-xl py-20">
        {/* 圖片展示區 - 左大右小網格 */}
        <RoomHero room={room} />

        {/* 內容區 */}
        <div className="flex gap-10 max-lg:flex-col">
          {/* 左側資訊區 */}
          <div className="flex-1 p-10">
            {/* 房間標題 */}
            <div className="mb-10">
              <h1 className="text-[#140F0A] text-[48px] font-bold mb-4">{room.name}</h1>
              <p className="text-[#4B4B4B] leading-8 whitespace-pre-line text-base">
                {room.description}
              </p>
            </div>

            {/* 房型基本資訊 */}
            <div className="mb-10">
              <RoomTitle title="房型基本資訊" />
              <div className="flex gap-4 flex-wrap">
                <InfoCard icon={py} title={room.areaInfo} />
                <InfoCard icon={bed} title={room.bedInfo} />
                <InfoCard icon={person} title={maxPeopleDisplay} />
              </div>
            </div>

            {/* 房間格局 */}
            <div className="mb-10">
              <RoomTitle title="房間格局" />
              <div className="grid grid-cols-2 md:grid-cols-5 bg-white rounded-lg p-5  gap-4">
                {room.layoutInfo?.map((item, index) => (
                  <InfoText key={index} item={item} />
                ))}
              </div>
            </div>

            {/* 房內設備 */}
            <div className="mb-10">
              <RoomTitle title="房內設備" />
              <div className="grid grid-cols-2 md:grid-cols-5 bg-white rounded-lg p-5 gap-4">
                {room.facilityInfo?.map((item, index) => (
                  <InfoText key={index} item={item} />
                ))}
              </div>
            </div>

            {/* 備品提供 */}
            <div className="mb-10">
              <RoomTitle title="備品提供" />
              <div className="grid grid-cols-2 md:grid-cols-5 bg-white rounded-lg p-5 gap-4">
                {room.amenityInfo?.map((item, index) => (
                  <InfoText key={index} item={item} />
                ))}
              </div>
            </div>

            {/* 訂房須知 */}
            <div>
              <RoomTitle title="訂房須知" />
              <ReserveInfo />
            </div>
          </div>

          {/* 右側訂房表單 */}
          <div className="lg:w-[400px]">
            <div className="bg-white rounded-lg p-8 sticky top-32">
              <p className="text-xl font-bold text-black border-b border-[#ECECEC] pb-2 mb-10">
                預約房型
              </p>
              <h2 className="text-3xl font-bold text-[#4B4B4B] mb-2">{room.name}</h2>
              <p className="text-[#4B4B4B] text-sm mb-8">{room.description}</p>
              <ReserveForm room={room} roomId={roomId!} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomDetail
