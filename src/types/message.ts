import { z } from "zod";

export type MessageModel = {
    text: string;
    createdBy: string;
}

export type MessageDisplay = {
    id: string;
    text: string;
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
