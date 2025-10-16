export type Status = { status: boolean }
export type Token = { token: string }

export type AuthResponse = Status &
  Token & {
    result?: {
      address: {
        zipcode: number
        detail: string
        city: string
        county: string
      }
      _id: string
      name: string
      email: string
      phone: string
      birthday: string
      createdAt: string
      updatedAt: string
      id: string
    }
  }

export type EmailVerifyResponse = Status & {
  result?: {
    isEmailExists: boolean
  }
  message?: string
}

export type UpdatePasswordData = {
  userId: string | number
  name?: string
  phone?: string
  birthday?: string
  address?: {
    zipcode?: number
    city?: string
    district?: string
    county?: string
    detail?: string
  }
  oldPassword?: string
  newPassword?: string
}
