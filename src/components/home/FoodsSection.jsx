import { useEffect, useState } from 'react'

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
    <section>
      <div>
        <div className="flex flex-row gap-8 ">
          <h2 className="text-3xl font-bold text-[#BF9D7D]">
            佳餚
            <br />
            美饌
          </h2>
          <div className="mt-2 h-[2px] w-24 bg-gradient-to-r from-[#c0a375] to-transparent"></div>
        </div>
        <ul className="flex flex-row gap-8">
          {foods.map((foodItem) => (
            <li key={foodItem._id} className="flex flex-col gap-4">
              <img src={foodItem.image} alt={foodItem.title} />
              <div className="flex flex-col gap-2"></div>
              <h3 className="text-2xl font-bold">{foodItem.title}</h3>
              <p>{foodItem.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default FoodsSection
