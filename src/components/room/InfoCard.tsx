type InfoCardProps = {
  icon : string,
  title : string
}

const InfoCard:React.FC<InfoCardProps>= ({ icon, title }) => {
  return (
    <div className="flex flex-col items-center gap-2 bg-white rounded-lg px-8 py-6 min-w-[140px]">
      <div className="w-10 h-10">
        <img src={icon} alt={`${title} icon`} />
      </div>
      <p className="text-[#4B4B4B] text-base font-bold">{title}</p>
    </div>
  )
}
export default InfoCard
