import { createContext, useContext, useState, useEffect } from 'react'
import { getUserInfo } from '../api/usersApi'

type User = {
  id: number
  name: string
  email: string
  phone?: string
}

type AuthContextType = {
  user: User | null
  isLoading: boolean
  isLoggedIn: boolean
  setUser: React.Dispatch<React.SetStateAction<User | null>>
  fetchUser: () => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)
type AuthLayoutProps = {
  children: React.ReactNode
}
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children } : AuthLayoutProps) => {
const [user, setUser] = useState<User | null>(null)
const [isLoading, setIsLoading] = useState<boolean>(true)

  const fetchUser = async () => {
    const token = localStorage.getItem('token')
    if (!token) {
      setUser(null)
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
      setUser(null)
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

  const value: AuthContextType = {
    user,
    isLoading,
    isLoggedIn: !!user,
    setUser,
    fetchUser,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}


