export type Info = {
  title: string
  isProvide: boolean
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
  layoutInfo: Info[]
  facilityInfo: Info[]
  amenityInfo: Info[]
  _id: string
  createdAt: string
  updatedAt: string
}
