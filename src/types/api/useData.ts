export type UserData = {
  name: string
  email: string
  password: string
  phone: string
  birthday: string
  address: {
    zipcode: number,
    detail: string
  }
}