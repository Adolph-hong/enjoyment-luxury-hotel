import type { RoomId } from "@/types/api/roomId"

type RoomHeroProps = {
  room:RoomId
}

const RoomHero:React.FC<RoomHeroProps> = ({ room }) => {
  return (
    <div className="mb-16 flex gap-3 max-md:flex-col rounded-2xl overflow-hidden">
      {/* 左側大圖 */}
      <div className="md:w-[57%] w-full">
        {room.imageUrlList && room.imageUrlList.length > 0 && (
          <img
            src={room.imageUrlList[0]}
            alt={`${room.name} - 主圖`}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* 右側 2x2 小圖網格 */}
      <div className="flex-1 grid grid-cols-2 gap-3">
        {room.imageUrlList &&
          room.imageUrlList.slice(1, 5).map((image, index) => (
            <div key={index} className="overflow-hidden">
              <img
                src={image}
                alt={`${room.name} - ${index + 2}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
      </div>
    </div>
  )
}
export default RoomHero
