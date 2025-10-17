export type OrderResponse = {
  status: boolean
  result: Order[]
}

export type SingleOrderResponse = {
  status: boolean
  result: Order
}

export type Order = {
  userInfo: UserInfo
  _id: string
  roomId: Room
  checkInDate: string
  checkOutDate: string
  peopleNum: number
  orderUserId: string
  status: number
  createdAt: string
  updatedAt: string
}

export type UserInfo = {
  address: Address
  name: string
  phone: string
  email: string
}

export type Address = {
  zipcode: number
  detail: string
}

export type Room = {
  name: string
  description: string
  imageUrl: string
  imageUrlList: string[]
  areaInfo: string
  bedInfo: string
  maxPeople: number
  price: number
  status: number
  layoutInfo: RoomInfo[]
  facilityInfo: RoomInfo[]
  amenityInfo: RoomInfo[]
  _id: string
  createdAt: string
  updatedAt: string
}

export type RoomInfo = {
  title: string
  isProvide: boolean
}
