import RoomCard from '../shared/RoomCard'
import { useRooms } from '../../hooks/useRooms'

const RoomSection:React.FC = () => {
  const { rooms, loading, error } = useRooms()

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F7F2EE] px-10 flex items-center justify-center">
        <p className="text-2xl text-[#140F0A]">載入中...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#F7F2EE] px-10 flex items-center justify-center">
        <p className="text-2xl text-red-600">載入失敗：{error}</p>
      </div>
    )
  }

  return (
    <section className="bg-[#F7F2EE] px-10 py-16 flex flex-col gap-12">
      {/* 標題區塊 */}
      <div className="flex flex-col gap-4 mb-8">
        <p className="text-xl font-bold">房型選擇</p>
        <h2 className="text-4xl xl:text-5xl font-bold text-[#BF9D7D]">
          各種房型，任您挑選
        </h2>
      </div>

      {/* 卡片列表 */}
      {rooms.map((room) => (
        <RoomCard key={room._id} room={room} />
      ))}
    </section>
  )
}

export default RoomSection
