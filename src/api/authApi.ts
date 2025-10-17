import { UserData } from '@/types/api/useData'
import { UpdateUserData } from '@/types/api/updateUserData'
import type { AuthResponse, Status, Token, EmailVerifyResponse } from '@/types/api/auth'
import type { OrderResponse, SingleOrderResponse } from '@/types/api/order'
import { baseUrl } from '../constant/baseUrl'

type ApiRequestOptions = {
  method?: string
  headers?: Record<string, string>
  body?: string
  requireAuth?: boolean
}
// Helper function to handle API requests
const apiRequest = async <T>(path: string, options: ApiRequestOptions = {}): Promise<T> => {
  const token = localStorage.getItem('token')

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...options.headers,
  }

  if (token && options.requireAuth) {
    headers.Authorization = token
  }

  const response = await fetch(`${baseUrl}${path}`, {
    ...options,
    headers,
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || 'API request failed')
  }

  return data as T
}

// User APIs
export const login = async (email: string, password: string) => {
  return apiRequest<AuthResponse>('/api/v1/user/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  })
}

export const signup = async (userData: UserData) => {
  return apiRequest<AuthResponse>('/api/v1/user/signup', {
    method: 'POST',
    body: JSON.stringify(userData),
  })
}

export const forgotPassword = async (email: string) => {
  return apiRequest<Status>('/api/v1/user/forgot', {
    method: 'POST',
    body: JSON.stringify({ email }),
  })
}

export const checkUser = async () => {
  return apiRequest<Status & Token>('/api/v1/user/check', {
    method: 'GET',
    requireAuth: true,
  })
}

export const getUser = async () => {
  return apiRequest<{ user: UserData }>('/api/v1/user/', {
    method: 'GET',
    requireAuth: true,
  })
}

export const updateUser = async (userData: UpdateUserData) => {
  return apiRequest<Status>('/api/v1/user/', {
    method: 'PUT',
    body: JSON.stringify(userData),
    requireAuth: true,
  })
}

// Verify APIs
export const verifyEmail = async (email: string) => {
  return apiRequest<EmailVerifyResponse>('/api/v1/verify/email', {
    method: 'POST',
    body: JSON.stringify({ email }),
  })
}

export const generateEmailCode = async (email: string) => {
  return apiRequest<EmailVerifyResponse>('/api/v1/verify/generateEmailCode', {
    method: 'POST',
    body: JSON.stringify({ email }),
  })
}

// Orders APIs
export const getOrders = async () => {
  return apiRequest<OrderResponse>('/api/v1/orders/', {
    method: 'GET',
    requireAuth: true,
  })
}

export const getOrderById = async (orderId: string) => {
  return apiRequest<SingleOrderResponse>(`/api/v1/orders/${orderId}`, {
    method: 'GET',
    requireAuth: true,
  })
}

export const deleteOrder = async (orderId: string) => {
  return apiRequest<SingleOrderResponse>(`/api/v1/orders/${orderId}`, {
    method: 'DELETE',
    requireAuth: true,
  })
}
