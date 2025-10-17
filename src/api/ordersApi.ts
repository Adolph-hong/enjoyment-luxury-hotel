import { baseUrl } from '../constant/baseUrl'
import type { orderData } from '@/types/api/booking'

export const getOrders = async () => {
  const token = localStorage.getItem('token')

  const res = await fetch(`${baseUrl}/api/v1/orders/`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.message || '取得訂單失敗')
  }

  return data
}

export const createOrder = async (orderData: orderData) => {
  const token = localStorage.getItem('token')

  const res = await fetch(`${baseUrl}/api/v1/orders/`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(orderData),
  })

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.message || '建立訂單失敗')
  }

  return data
}

export const getOrderById = async (orderId: string) => {
  const token = localStorage.getItem('token')

  const res = await fetch(`${baseUrl}/api/v1/orders/${orderId}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.message || '取得訂單失敗')
  }

  return data
}

export const deleteOrder = async (orderId: string) => {
  const token = localStorage.getItem('token')

  const res = await fetch(`${baseUrl}/api/v1/orders/${orderId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.message || '刪除訂單失敗')
  }

  return data
}
