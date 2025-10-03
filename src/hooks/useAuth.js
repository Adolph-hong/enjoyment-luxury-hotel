import { useState, useEffect } from 'react'
import { getCookie, deleteCookie } from '../utils/cookie'
import { checkUser, getUser } from '../api/auth-api'

export const useAuth = () => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const fetchUser = async () => {
    const token = getCookie('customTodoToken')

    if (!token) {
      setIsLoading(false)
      setIsAuthenticated(false)
      return
    }

    try {
      // Check if token is valid
      await checkUser()

      // Get user data
      const response = await getUser()
      setUser(response.result)
      setIsAuthenticated(true)
    } catch (error) {
      console.error('Failed to fetch user:', error)
      setIsAuthenticated(false)
      setUser(null)
      // Clear invalid token
      deleteCookie('customTodoToken')
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    deleteCookie('customTodoToken')
    setUser(null)
    setIsAuthenticated(false)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return {
    user,
    isLoading,
    isAuthenticated,
    refetchUser: fetchUser,
    logout,
  }
}
