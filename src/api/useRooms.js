import { useState, useEffect } from 'react'
import { getRooms } from '../api/home-api'

// Import 圖片
import firstgroup1 from '/src/assets/roomcard/firstgroup-1.jpg'
import firstgroup2 from '/src/assets/roomcard/firstgruop-2.jpg'
import firstgroup3 from '/src/assets/roomcard/firstgruop-3.jpg'
import firstgroup4 from '/src/assets/roomcard/firstgruop-4.jpg'
import firstgroup5 from '/src/assets/roomcard/firstgruop-5.jpg'

import secondgroup1 from '/src/assets/roomcard/secondgruop-1.jpg'
import secondgroup2 from '/src/assets/roomcard/secondgruop-2.jpg'
import secondgroup3 from '/src/assets/roomcard/secondgruop-3.jpg'
import secondgroup4 from '/src/assets/roomcard/secondgruop-4.jpg'
import secondgroup5 from '/src/assets/roomcard/secondgruop-5.jpg'

import thirdgroup1 from '/src/assets/roomcard/thirdgroup-1.jpg'
import thirdgroup2 from '/src/assets/roomcard/thirdgroup-2.jpg'
import thirdgroup3 from '/src/assets/roomcard/thirdgroup-3.jpg'
import thirdgroup4 from '/src/assets/roomcard/thirdgroup-4.jpg'
import thirdgroup5 from '/src/assets/roomcard/thirdgroup-5.jpg'

import fourthgroup1 from '/src/assets/roomcard/fourthgroup-1.jpg'
import fourthgroup2 from '/src/assets/roomcard/fourthgroup-2.jpg'
import fourthgroup3 from '/src/assets/roomcard/fourthgroup-3.jpg'
import fourthgroup4 from '/src/assets/roomcard/fourthgroup-4.jpg'
import fourthgroup5 from '/src/assets/roomcard/fourthgroup-5.jpg'

// 自訂圖片資料
const customImages = {
  0: [firstgroup1, firstgroup2, firstgroup3, firstgroup4, firstgroup5],
  1: [secondgroup1, secondgroup2, secondgroup3, secondgroup4, secondgroup5],
  2: [thirdgroup1, thirdgroup2, thirdgroup3, thirdgroup4, thirdgroup5],
  3: [fourthgroup1, fourthgroup2, fourthgroup3, fourthgroup4, fourthgroup5], // 第四組沒有圖片，會使用 API 的圖片
}

// 自訂每張卡片的資料
const customData = {
  0: {
    price: 10000,
    maxPeople: '2-4 人',
    bedInfo: '1 張大床',
    areaInfo: '24 坪',
  },
  1: {
    price: 10000,
    maxPeople: '2-4 人',
    bedInfo: '1 張大床',
    areaInfo: '28 坪',
  },
  2: {
    price: 10000,
    maxPeople: '2-4 人',
    bedInfo: '2 張大床',
    areaInfo: '36 坪',
  },
  3: {
    price: 10000,
    maxPeople: '2-4 人',
    bedInfo: '2 張大床',
    areaInfo: '48 坪',
  },
}

// 轉換 API 資料成符合設計稿的格式
const transformRoomData = (rooms) => {
  return rooms.map((room, index) => ({
    ...room,
    // 使用自訂圖片（如果有的話），否則使用 API 的圖片
    imageUrlList:
      customImages[index]?.length > 0 ? customImages[index] : room.imageUrlList,
    // 使用自訂資料覆寫
    ...customData[index],
  }))
}

export const useRooms = () => {
  const [rooms, setRooms] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    const fetchRooms = async () => {
      try {
        const data = await getRooms(controller.signal)
        const transformedData = transformRoomData(data)
        setRooms(transformedData)
        setLoading(false)
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message)
          setLoading(false)
          console.error('Error fetching rooms:', err)
        }
      }
    }

    fetchRooms()

    return () => controller.abort()
  }, [])

  return { rooms, loading, error }
}
