import { useEffect, useState } from 'react'
import { newsData } from './data'
import { getNews } from '../../api/homeApi'
import type { New } from '@/types/api/new'

const NewsSection: React.FC = () => {
  const [news, setNews] = useState<New[]>([])

  useEffect(() => {
    const controller = new AbortController()
    getNews(controller.signal).then(setNews)

    return () => {
      controller.abort()
    }
  }, [])
  return (
    <section className="bg-[#F7F2EE]">
      <div className="py-16 flex flex-col relative xl:flex-row gap-8 max-w-screen-xl mx-auto px-4">
        <div className="pr-20">
          <h2 className="text-3xl font-bold text-[#BF9D7D]">
            {newsData.title[0]}
            <br />
            {newsData.title[1]}
          </h2>
          <div className="mt-2 h-[2px] w-24 bg-gradient-to-r from-[#c0a375] to-transparent"></div>
        </div>
        <img className="w-[100px] absolute top-10 right-10" {...newsData.decosImg} />
        <img
          className="w-[100px] z-10 absolute bottom-[-2%] xl:bottom-[-5%] left-10"
          {...newsData.decosImg}
        />
        <ul className="flex flex-col gap-8">
          {news.map((newsItem) => (
            <li
              key={newsItem._id}
              className="flex flex-col xl:max-h-[300px] xl:flex-row items-center gap-4"
            >
              <img
                className="w-full h-auto xl:max-h-[300px] object-cover rounded-lg"
                src={newsItem.image}
                alt={newsItem.title}
              />
              <div className="flex flex-col w-full gap-2">
                <h3 className="text-xl font-bold pb-5">{newsItem.title}</h3>
                <p className="text-sm">{newsItem.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default NewsSection
