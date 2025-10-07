import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'

// import required modules
import { Navigation, Scrollbar } from 'swiper/modules'
import { Link } from 'react-router-dom'

const RoomSwiper = ({ room }) => {
  return (
    <Swiper
      scrollbar={{
        hide: true,
      }}
      modules={[Scrollbar]}
      className="mySwiper"
    >
      {room.imageUrlList.map((imageUrl, index) => (
        <SwiperSlide key={index}>
          <img
            className="w-[100vw] h-[50vh] object-cover mb-10"
            src={imageUrl}
            alt={`Room ${room._id} - Image ${index + 1}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

const RoomsSwiper = ({ rooms }) => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <>
      <Swiper
        allowTouchMove={width < 768 ? false : true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {rooms.map((room) => (
          <SwiperSlide key={room._id}>
            <div className="flex flex-col md:flex-row">
              {width >= 768 ? (
                <img
                  src={room.imageUrl}
                  alt="rooms"
                  className="w-1/2 min-h-[300px] aspect-square object-cover mr-10"
                />
              ) : (
                <RoomSwiper room={room} />
              )}
              <div className="flex flex-col justify-end">
                <div className="w-full flex flex-col">
                  <h2 className="text-3xl font-semibold mb-4 w-full ">
                    {room.name}
                  </h2>
                  <p className="mb-2 text-sm w-full ">{room.description}</p>
                  <p className="mb-5 text-2xl font-bold pt-5">
                    NT$ {room.price}
                  </p>
                </div>
                <Link
                  to={`/room/${room._id}`}
                  className="flex flex-row items-center justify-end w-full md:mt-8 px-6 py-6 bg-white text-black font-semibold rounded hover:bg-[#BF9D7D] hover:text-white transition relative overflow-hidden"
                >
                  <span className="pr-4">查看更多</span>
                  <span className="inline-block w-1/5 h-px bg-current"></span>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default RoomsSwiper
