import { useEffect, useState } from 'react'
import foodsDeco from '../../assets/home/decos/foods.png'
import FoodsSwiper from '../swipers/FoodsSwiper'

const FoodsSection = () => {
  const [foods, setFoods] = useState([])
  const baseUrl = import.meta.env.VITE_API_BASE
  useEffect(() => {
    const getLatestFoods = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/v1/home/culinary/`)
        const { result } = await res.json()
        setFoods(result)
      } catch (err) {
        console.error('Failed to fetch news:', err)
      }
    }

    getLatestFoods()
  }, [])

  return (
    <section className="w-full h-screen bg-[#F7F2EE]">
      <div className="flex flex-row md:pl-5">
        <img
          className="object-fill w-[150px] h-[110vh] pt-10 hidden md:block"
          src={foodsDeco}
          alt="foodsDeco"
        />
        <div className="w-full py-20 px-5 md:pl-20">
          <div className="flex flex-row gap-8 items-center pb-15">
            <h2 className="text-3xl font-bold text-[#BF9D7D]">
              佳餚
              <br />
              美饌
            </h2>
            <div className="h-[2px] w-[60vw] md:w-24 bg-gradient-to-r from-[#c0a375] to-transparent"></div>
          </div>
          <div className="flex flex-row gap-8 w-full h-auto">
            <FoodsSwiper foods={foods} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FoodsSection
