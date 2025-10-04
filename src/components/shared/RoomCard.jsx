import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import py from '/src/assets/icon/Vector.svg'
import bed from '/src/assets/icon/bed.svg'
import person from '/src/assets/icon/person.svg'

const RoomCard = ({ room }) => {
  const {
    _id,
    name,
    description,
    imageUrlList,
    price,
    areaInfo,
    bedInfo,
    maxPeople,
  } = room

  // Format maxPeople for display
  const maxPeopleDisplay = typeof maxPeople === 'number' ? `2-${maxPeople} 人` : maxPeople

  return (
    <div className="flex bg-white rounded-[20px] overflow-hidden shadow-lg max-lg:flex-col">
      {/* 左側圖片輪播區 */}
      <div className="w-1/2 relative max-lg:w-full h-[500px] overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={true}
          pagination={{ clickable: true }}
          loop={imageUrlList && imageUrlList.length > 1}
          className="h-full w-full"
        >
          {imageUrlList && imageUrlList.length > 0 ? (
            imageUrlList.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`${name} - ${index + 1}`}
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

      {/* 右側房間資訊區 */}
      <div className="w-1/2 p-10 flex flex-col justify-between max-lg:w-full">
        <div>
          <h3 className="text-[32px] font-bold text-[#140F0A] mb-4">{name}</h3>
          <p className="text-[#140F0A] mb-10 leading-relaxed whitespace-pre-line">
            {description}
          </p>

          {/* 房間規格 */}
          <div className="flex gap-4">
            <div className="flex flex-col items-center justify-center border border-[#F1EAE4] rounded-lg p-4 min-w-[120px]">
              <div className="w-10 h-10 mb-2">
                <img src={py} alt="square meter icon" />
              </div>
              <p className="text-base font-bold">{areaInfo}</p>
            </div>
            <div className="flex flex-col items-center justify-center border border-[#F1EAE4] rounded-lg p-4 min-w-[120px]">
              <div className="w-10 h-10 mb-2">
                <img src={bed} alt="bed icon" />
              </div>
              <p className="text-base font-bold">{bedInfo}</p>
            </div>
            <div className="flex flex-col items-center justify-center border border-[#F1EAE4] rounded-lg p-4 min-w-[120px]">
              <div className="w-10 h-10 mb-2">
                <img src={person} alt="person icon" />
              </div>
              <p className="text-base font-bold">{maxPeopleDisplay}</p>
            </div>
          </div>
        </div>

        {/* 價格和按鈕 */}
        <div className="pt-6">
          <div className="h-[3px] bg-gradient-to-r from-[#BE9C7C] to-transparent mb-20"></div>
          <div className="flex items-center justify-between">
            <p className="text-[#BF9D7D] text-2xl font-bold">
              NT$ {price.toLocaleString()}
            </p>
            <Link
              to={`/room/${_id}`}
              className="text-[#BF9D7D] hover:text-[#8B6F47] transition-colors"
            >
              <span className="text-2xl">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomCard
