import { RoomModel } from "@/types/room";
import mongoose, { type Model } from "mongoose";
import SuperJSON from "superjson";

const RoomSchema = new mongoose.Schema<RoomModel>(
  {
    name: { 
        type: String,
        required: [true, "Name is essential for a Room"]
    },
    createdBy: {
        type: String,
        required: [true, "Need to know who created the Room"]
    }
  },
  {
    timestamps: true,
    toJSON: {
      getters: true,
      transform: function (doc, ret) {
        delete ret._id;     
        const { json } = SuperJSON.serialize(ret);
        return json; // Return the serialized object
      },
    },
  }
);


const Room: Model<RoomModel> = mongoose.models.Room
? (mongoose.models.Room as Model<RoomModel>)
: mongoose.model<RoomModel>("Room", RoomSchema);

export default Room;