// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { useEffect, useState } from 'react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

// import required modules
import { FreeMode } from 'swiper/modules'

import type { Food } from '@/types/api/food'

type Props = {
  foods: Food[]
}

const FoodsSwiper: React.FC<Props> = ({ foods }) => {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <>
      <Swiper
        slidesPerView={width < 768 ? 1 : 3}
        spaceBetween={20}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
      >
        {foods.map((foodItem) => (
          <SwiperSlide>
            <div
              key={foodItem._id}
              className="relative flex flex-col w-full h-[100vh] gap-4 justify-center rounded-xl"
            >
              <img
                src={foodItem.image}
                alt={foodItem.title}
                className="absolute inset-0  w-full h-[60vh]  object-cover rounded-xl"
              />
              <div className=" z-10 bg-transparent bg-opacity-40 backdrop-blur-md h-[20vh] p-5 text-white rounded-xl overflow-hidden">
                <div className="flex flex-row gap-2 justify-between pb-5">
                  <h3 className="text-xl font-bold">{foodItem.title}</h3>
                  <p className="text-sm">{foodItem.diningTime}</p>
                </div>
                <p className="z-10 text-xs">{foodItem.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default FoodsSwiper
