import { useState, useEffect } from 'react'
import { getRooms } from '../api/home-api'

export const useRooms = () => {
  const [rooms, setRooms] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    const fetchRooms = async () => {
      try {
        const data = await getRooms(controller.signal)
        setRooms(data)
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
