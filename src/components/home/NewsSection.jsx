import { useEffect, useState } from 'react'

const NewsSection = () => {
  const [news, setNews] = useState([])
  useEffect(() => {
    const getLatestNews = async () => {
      try {
        const res = await fetch('https://nuxr3.zeabur.app/api/v1/home/news/')
        const { result } = await res.json()
        setNews(result)
      } catch (err) {
        console.error('Failed to fetch news:', err)
      }
    }

    getLatestNews()
  }, [])
  return (
    <section className="bg-[#F7F2EE]">
      <div className="py-16 flex flex-row gap-8 max-w-screen-xl mx-auto px-4">
        <div className="pr-20">
          <h2 className="text-3xl font-bold text-[#BF9D7D]">
            最新
            <br />
            消息
          </h2>
          <div className="mt-2 h-[2px] w-24 bg-gradient-to-r from-[#c0a375] to-transparent"></div>
        </div>
        <ul className="flex flex-col gap-8">
          {news.map((item) => (
            <li key={item._id} className="flex flex-row items-center gap-4">
              <img src={item.image} alt={item.title} />
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default NewsSection
