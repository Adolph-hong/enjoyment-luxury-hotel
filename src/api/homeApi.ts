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
  try {
    const res = await fetch(`${baseUrl}${path}`, { signal })
    const { result } = await res.json()
    return result
  } catch (error) {
    console.error('Failed to fetch data:', error)
    throw error
  }
}

export const getCulinary = async (signal: AbortSignal): Promise<Food[]> => {
  try {
    const result = await fetchWithSignal<Food[]>({
      path: '/api/v1/home/culinary',
      signal,
    })
    return result
  } catch (error) {
    console.error('❌ Failed to fetch culinary data:', error)
    throw error
  }
}

export const getNews = async (signal: AbortSignal): Promise<New[]> => {
  try {
    const result = await fetchWithSignal<New[]>({
      path: '/api/v1/home/news',
      signal,
    })
    return result
  } catch (error) {
    console.error('❌ Failed to fetch news data:', error)
    throw error
  }
}
export const getRooms = async (signal: AbortSignal): Promise<Room[]> => {
  try {
    const result = await fetchWithSignal<Room[]>({
      path: '/api/v1/rooms/',
      signal,
    })
    return result
  } catch (error) {
    console.error('❌ Failed to fetch rooms data:', error)
    throw error
  }
}
export const getRoomById = async (roomId: string, signal: AbortSignal): Promise<RoomId> => {
  try {
    const result = await fetchWithSignal<RoomId>({
      path: `/api/v1/rooms/${roomId}`,
      signal,
    })
    return result
  } catch (error) {
    console.error('❌ Failed to fetch room data:', error)
    throw error
  }
}
