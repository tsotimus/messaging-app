import dbConnect from "@/lib/dbConnect";
import { HydratedDocument } from "mongoose";
import { RoomDisplay } from "@/types/room";
import Room from "@/models/Room";
import RoomList from "@/features/room/RoomList";

const getRooms = async () => {

  await dbConnect()
  const rooms = await Room.find<HydratedDocument<RoomDisplay>>({})
  return rooms.map((room) => room.toJSON())
}

export default async function Home() {

  const rooms = await getRooms()

  return (
    <div>
      <RoomList rooms={rooms}/>
    </div>
  );
}
