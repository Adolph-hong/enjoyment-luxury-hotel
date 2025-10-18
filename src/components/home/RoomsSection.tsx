import { useEffect, useState } from 'react'
import RoomsSwiper from '../swipers/RoomsSwiper'
import { roomsData } from './data'
import { getRooms } from '../../api/homeApi'
import type { Room } from '../../types/api/room'

const RoomsSection = () => {
  const [rooms, setRooms] = useState<Room[]>([])

  useEffect(() => {
    const controller = new AbortController()
    getRooms(controller.signal).then(setRooms)

    return () => {
      controller.abort()
    }
  }, [])

  return (
    <section>
      <div className="bg-black text-white w-full   overflow-hidden">
        <div className="w-full md:w-1/2 relative">
          <img
            className="w-full h-[110px] md:h-auto scale-200 md:scale-100 absolute top-0 left-[65%] md:top-25 md:left-[100%] pt-10"
            {...roomsData.image[1]}
          />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center py-20 mt-20 md:mt-0 px-5 md:px-0">
          <div className="w-full mt-5 relative">
            <RoomsSwiper rooms={rooms} />
            <div className="absolute  inset-0 mt-[60%] md:mt-[20%] ml-5 md:ml-0 w-full h-auto">
              <img className="w-full h-auto" {...roomsData.image[0]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RoomsSection
