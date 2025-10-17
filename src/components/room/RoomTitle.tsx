import type { RoomTitleTypes } from "@/types/components/roomTitle"

const RoomTitle:React.FC<RoomTitleTypes> = ({ title }) => {
  return (
    <div className="flex flex-row items-center gap-3 mb-6">
      <div className="border-3 h-[25px] border-[#BF9D7D] rounded-2xl"></div>
      <h2 className="text-[#140F0A] text-2xl font-bold pb-1">{title}</h2>
    </div>
  )
}
export default RoomTitle
