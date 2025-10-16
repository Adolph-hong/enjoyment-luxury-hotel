export type Room = {
  _id: string;
  name: string;
  description: string;
  imageUrlList: string[];
  price: number;
  areaInfo: string;
  bedInfo: string;
  maxPeople: number;
}

export type RoomCardProps = {
  room: Room;
};