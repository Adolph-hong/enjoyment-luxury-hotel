const RoomLoading = ({ text }) => {
  return (
    <div className="min-h-screen bg-[#F7F2EE]">
      <div className="bg-[#140F0A] h-[200px]"></div>
      <div className="flex items-center justify-center py-20">
        <p className="text-[#4B4B4B] text-xl">{text}</p>
      </div>
    </div>
  )
}
export default RoomLoading
