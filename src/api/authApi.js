const baseUrl = import.meta.env.VITE_API_BASE

// Helper function to handle API requests
const apiRequest = async (path, options = {}) => {
  const token = localStorage.getItem('token')

  const headers = {
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

  return data
}

// User APIs
export const login = async (email, password) => {
  return apiRequest('/api/v1/user/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  })
}

export const signup = async (userData) => {
  return apiRequest('/api/v1/user/signup', {
    method: 'POST',
    body: JSON.stringify(userData),
  })
}

export const forgotPassword = async (email) => {
  return apiRequest('/api/v1/user/forgot', {
    method: 'POST',
    body: JSON.stringify({ email }),
  })
}

export const checkUser = async () => {
  return apiRequest('/api/v1/user/check', {
    method: 'GET',
    requireAuth: true,
  })
}

export const getUser = async () => {
  return apiRequest('/api/v1/user/', {
    method: 'GET',
    requireAuth: true,
  })
}

export const updateUser = async (userData) => {
  return apiRequest('/api/v1/user/', {
    method: 'PUT',
    body: JSON.stringify(userData),
    requireAuth: true,
  })
}

// Verify APIs
export const verifyEmail = async (email, code) => {
  return apiRequest('/api/v1/verify/email', {
    method: 'POST',
    body: JSON.stringify({ email, code }),
  })
}

export const generateEmailCode = async (email) => {
  return apiRequest('/api/v1/verify/generateEmailCode', {
    method: 'POST',
    body: JSON.stringify({ email }),
  })
}

// Orders APIs
export const getOrders = async () => {
  return apiRequest('/api/v1/orders/', {
    method: 'GET',
    requireAuth: true,
  })
}

export const getOrderById = async (orderId) => {
  return apiRequest(`/api/v1/orders/${orderId}`, {
    method: 'GET',
    requireAuth: true,
  })
}

export const deleteOrder = async (orderId) => {
  return apiRequest(`/api/v1/orders/${orderId}`, {
    method: 'DELETE',
    requireAuth: true,
  })
}
