import { MessageModel } from "@/types/message";
import mongoose, { type Model } from "mongoose";
import SuperJSON from "superjson";

const MessageSchema = new mongoose.Schema<MessageModel>(
  {
    text: {
        type: String,
        required: [true, "Text is essential for a message"]
    },
    createdBy: {
        type: String,
        required: [true, "Need to know who created the message"]
    },
    roomId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Room",
        required: [true, "Need to know which room the message belongs to"]
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


const Message: Model<MessageModel> = mongoose.models.Message
? (mongoose.models.Message as Model<MessageModel>)
: mongoose.model<MessageModel>("Message", MessageSchema);

export default Message;