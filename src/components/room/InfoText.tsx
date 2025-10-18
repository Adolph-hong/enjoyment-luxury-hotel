import type { Info } from "@/types/api/room"

type InfoProps = {
  item : Info
}

const InfoText:React.FC<InfoProps> = ({ item }) => {
  return (
    <div className="flex items-center gap-3">
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
      <span
        className={`text-base ${item.isProvide ? 'text-[#4B4B4B]' : 'text-[#ECECEC]'}`}
      >
        {item.title}
      </span>
    </div>
  )
}
export default InfoText
