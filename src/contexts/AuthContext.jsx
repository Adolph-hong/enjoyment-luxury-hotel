import { createContext, useContext, useState, useEffect } from 'react'
import { getUserInfo } from '../api/usersApi'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const fetchUser = async () => {
    const token = localStorage.getItem('token')
    if (!token) {
      setIsLoading(false)
      return
    }

    try {
      const result = await getUserInfo()
      if (result.status && result.result) {
        setUser(result.result)
      }
    } catch (error) {
      console.error('取得使用者資料失敗:', error)
      localStorage.removeItem('token')
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    setUser(null)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  const value = {
    user,
    isLoading,
    isLoggedIn: !!user,
    setUser,
    fetchUser,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
