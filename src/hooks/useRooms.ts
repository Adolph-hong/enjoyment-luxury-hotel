import { useState, useEffect } from 'react'
import { getRooms } from '../api/homeApi'
import type { Room } from '@/types/api/room'

export const useRooms = () => {
  const [rooms, setRooms] = useState<Room[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    const fetchRooms = async () => {
      try {
        const data = await getRooms(controller.signal)
        setRooms(data)
        setLoading(false)
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message) 
        } else {
          setError(String(err)) 
        }
        setLoading(false)
        console.error('Error fetching rooms:', err)
      }
    }

    fetchRooms()
    return () => controller.abort()
  }, [])

  return { rooms, loading, error }
}