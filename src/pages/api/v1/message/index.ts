import dbConnect from "@/lib/dbConnect"
import Message from "@/models/Message"
import Room from "@/models/Room"
import { MessageRequestSchema } from "@/types/message"
import { IDSchema } from "@/utils/server/validations"
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

            if(!userId){
                return res.status(401).json({error: "Unauthorized"})
            }   

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
        try {
            await dbConnect()

            const validated = IDSchema.safeParse(req.query.roomId)
            
            if(!validated.success){
                return res.status(400).json({error: validated.error.message})
            }


            const messages = await Message.find({roomId: validated.data})
            return res.status(200).json(messages)
        }catch(e){
            console.log(e)
            return res.status(500).json({error: "Internal Server Error"})
        }
    }

}

export default handler