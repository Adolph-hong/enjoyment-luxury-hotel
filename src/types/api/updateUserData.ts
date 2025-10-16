export type UpdateUserData = {
  userId: string,
  name: string,
  phone: string,
  birthday: string,
  address: {
    zipcode: number,
    detail: string
  },
  oldPassword: string,
  newPassword: string
}