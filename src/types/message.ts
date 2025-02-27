import { Schema } from "mongoose";
import { z } from "zod";

export type MessageModel = {
    text: string;
    createdBy: string;
    roomId: Schema.Types.ObjectId;
}

export type MessageDisplay = {
    id: string;
    text: string;
    roomId: string;
    createdBy:string;
    createdAt: string;
    updatedAt: string;
}

export type MessagesDisplay = Array<MessageDisplay>


export const MessageRequestSchema = z.object({
    text: z.string(),
    roomId: z.string()
})

export type MessageRequest = z.infer<typeof MessageRequestSchema>
