import type { Food } from '@/types/api/food'
import type { New } from '@/types/api/new'
import type { Room } from '@/types/api/room'
import type { RoomId } from '@/types/api/roomId'
import { baseUrl } from '../constant/baseUrl'

type FetchWithSignalProps = {
  path: string
  signal: AbortSignal
}

const fetchWithSignal = async <T>({ path, signal }: FetchWithSignalProps): Promise<T> => {
  const res = await fetch(`${baseUrl}${path}`, { signal })
  const { result } = await res.json()
  return result
}

export const getCulinary = (signal: AbortSignal): Promise<Food[]> => {
  return fetchWithSignal<Food[]>({
    path: '/api/v1/home/culinary',
    signal,
  })
}
export const getNews = (signal: AbortSignal): Promise<New[]> => {
  return fetchWithSignal<New[]>({
    path: '/api/v1/home/news',
    signal,
  })
}
export const getRooms = (signal: AbortSignal): Promise<Room[]> => {
  return fetchWithSignal<Room[]>({
    path: '/api/v1/rooms/',
    signal,
  })
}
export const getRoomById = (roomId: string, signal: AbortSignal): Promise<RoomId[]> => {
  return fetchWithSignal<RoomId[]>({
    path: `/api/v1/rooms/${roomId}`,
    signal,
  })
}
