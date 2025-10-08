import { getCookie } from '../utils/cookie'

const baseUrl = import.meta.env.VITE_API_BASE

export async function verifyEmail(email) {
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

export async function generateEmailCode(email) {
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

export async function forgotPassword(email, code, newPassword) {
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

export async function checkLogin() {
  const token = getCookie('customTodoToken')

  const res = await fetch(`${baseUrl}/api/v1/user/check`, {
    method: 'GET',
    headers: {
      'Authorization': token,
    },
  })

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.message || '驗證失敗')
  }

  return data
}

export async function getUserInfo() {
  const token = getCookie('customTodoToken')

  const res = await fetch(`${baseUrl}/api/v1/user/`, {
    method: 'GET',
    headers: {
      'Authorization': token,
    },
  })

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.message || '取得使用者資料失敗')
  }

  return data
}

export async function updateUserInfo(userData) {
  const token = getCookie('customTodoToken')

  const res = await fetch(`${baseUrl}/api/v1/user/`, {
    method: 'PUT',
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.message || '更新使用者資料失敗')
  }

  return data
}

export async function login(email, password) {
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

  return data
}

export async function signup(userData) {
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
