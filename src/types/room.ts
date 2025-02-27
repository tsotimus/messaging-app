import { z } from "zod";

export type RoomModel = {
    name: string
    createdBy: string
}

export type RoomDisplay = {
    id: string
    name: string
    createdAt: string
    updatedAt: string
    createdBy: string
}

export type RoomsDisplay = Array<RoomDisplay>


export const RoomRequestSchema = z.object({
    name: z.string(),
})

export type RoomRequest = z.infer<typeof RoomRequestSchema>
