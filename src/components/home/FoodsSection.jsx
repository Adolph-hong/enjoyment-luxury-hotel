import { useEffect, useState } from 'react'
import foodsDeco from '../../assets/home/decos/foods.png'

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
      <div className="flex flex-row pl-5">
        <img
          className="object-cover w-[140px] h-auto pt-10"
          src={foodsDeco}
          alt="foodsDeco"
        />
        <div className="w-full py-20  pl-20">
          <div className="flex flex-row gap-8 items-center pb-15">
            <h2 className="text-3xl font-bold text-[#BF9D7D]">
              佳餚
              <br />
              美饌
            </h2>
            <div className="h-[2px] w-24 bg-gradient-to-r from-[#c0a375] to-transparent"></div>
          </div>
          <ul className="flex flex-row gap-8 w-full h-auto">
            {foods.map((foodItem) => (
              <li
                key={foodItem._id}
                className="relative flex flex-col w-full gap-4"
              >
                <img
                  src={foodItem.image}
                  alt={foodItem.title}
                  className="absolute inset-0 w-[400px] h-[600px] object-cover"
                />
                <div className="z-10 bg-transparent bg-opacity-40 backdrop-blur-md text-white">
                  <div className="flex flex-row gap-2">
                    <h3 className="text-2xl font-bold">{foodItem.title}</h3>
                    <p>{foodItem.diningTime}</p>
                  </div>
                  <p className="z-10">{foodItem.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default FoodsSection
