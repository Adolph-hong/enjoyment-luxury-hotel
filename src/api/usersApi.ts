import { baseUrl } from '../constant/baseUrl'
import type { UserData } from '@/types/api/useData'
import type { UpdatePasswordData } from '@/types/api/auth'

const createAuthHeaders = (token: string | null): Record<string, string> => ({
  'Content-Type': 'application/json',
  ...(token ? { Authorization: token } : {}),
})

export const verifyEmail = async (email: string) => {
  const res = await fetch(`${baseUrl}/api/v1/verify/email`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  })

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.message || '驗證失敗')
  }

  return data
}

export const generateEmailCode = async (email: string) => {
  const res = await fetch(`${baseUrl}/api/v1/verify/generateEmailCode`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  })

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.message || '產生驗證碼失敗')
  }

  return data
}

export const forgotPassword = async (email: string, code: string, newPassword: string) => {
  const res = await fetch(`${baseUrl}/api/v1/user/forget`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      code,
      newPassword,
    }),
  })

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.message || '重設密碼失敗')
  }

  return data
}

export const checkLogin = async () => {
  const token = localStorage.getItem('token')

  const res = await fetch(`${baseUrl}/api/v1/user/check`, {
    method: 'GET',
    headers: createAuthHeaders(token),
  })

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.message || '驗證失敗')
  }

  return data
}

export const getUserInfo = async () => {
  const token = localStorage.getItem('token')

  const res = await fetch(`${baseUrl}/api/v1/user/`, {
    method: 'GET',
    headers: createAuthHeaders(token),
  })

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.message || '取得使用者資料失敗')
  }

  return data
}

export const updateUserInfo = async (userData: UserData) => {
  const token = localStorage.getItem('token')

  const res = await fetch(`${baseUrl}/api/v1/user/`, {
    method: 'PUT',
    headers: createAuthHeaders(token),
    body: JSON.stringify(userData),
  })

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.message || '更新使用者資料失敗')
  }

  return data as UpdatePasswordData
}

export const login = async (email: string, password: string) => {
  const res = await fetch(`${baseUrl}/api/v1/user/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.message || '登入失敗')
  }
  if (data.token) {
    localStorage.setItem('token', data.token)
  }

  return data
}

export const signup = async (userData: UserData) => {
  const res = await fetch(`${baseUrl}/api/v1/user/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.message || '註冊失敗')
  }

  return data
}
