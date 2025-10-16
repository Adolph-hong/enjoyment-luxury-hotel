export type orderData = {
  roomId: string
  checkInDate: string
  checkOutDate: string
  peopleNum: number
  userInfo: {
    address: {
      zipcode: string
      detail: string
    }
    name: string
    phone: string
    email: string
  }
}
