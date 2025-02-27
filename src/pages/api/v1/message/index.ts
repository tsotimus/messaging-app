import dbConnect from "@/lib/dbConnect"
import Message from "@/models/Message"
import Room from "@/models/Room"
import { MessageRequestSchema } from "@/types/message"
import { getAuth } from "@clerk/nextjs/server"
import { NextApiRequest, NextApiResponse } from "next"


const handler = async(req: NextApiRequest, res: NextApiResponse) => {

    if(req.method === "POST"){

        try {
            await dbConnect()

            const validated = MessageRequestSchema.safeParse(req.body)
    
            if(!validated.success){
                return res.status(400).json({error: validated.error.message})
            }

            const room = await Room.findById(validated.data.roomId)

            if(!room){
                return res.status(404).json({error: "Room not found"})
            }

            const { userId } = getAuth(req)

            const msgData = {
                ...validated.data,
                createdBy: userId
            }
    
            const message = await Message.create(msgData)
            return res.status(200).json(message)
        }catch(e){
            console.log(e)
            return res.status(500).json({error: "Internal Server Error"})
        }
    }

    if(req.method === "GET"){
        //TODO: Pagination later
        //TODO: Filter by roomId
        const messages = await Message.find({})
            .sort({createdAt: -1})
        return res.status(200).json(messages.reverse())
    }

}

export default handler