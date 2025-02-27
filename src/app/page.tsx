import { RoomDisplay } from "@/features/room/RoomDisplay";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import { MessageDisplay } from "@/types/message";
import { type UserModel } from "@/types/user";
import { type HydratedDocument } from "mongoose";







export default async function Home() {

  // const messages = await getAllMessages()

  return (
    <div>
      <RoomDisplay/>
    </div>
  );
}
