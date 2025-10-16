export type UserData = {
  userId?: string | number
  name?: string
  email?: string
  password?: string
  phone?: string
  birthday?: string
  address?: {
    zipcode: number
    detail: string
    city?: string
    district?: string
    county?: string
  }
  oldPassword?: string
  newPassword?: string
}
