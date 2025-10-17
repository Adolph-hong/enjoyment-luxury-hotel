export type RoomHeroTypes = {
  _id: string
  name: string
  description: string
  imageUrlList: string[]
  areaInfo: string
  bedInfo: string
  maxPeople: number | string
  layoutInfo?: string[]
  facilityInfo?: string[]
  amenityInfo?: string[]
  price?: number
}