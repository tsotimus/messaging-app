import dbConnect from "@/lib/dbConnect"
import Room from "@/models/Room"
import { RoomRequestSchema } from "@/types/room"
import { NextApiRequest, NextApiResponse } from "next"


const handler = async(req: NextApiRequest, res: NextApiResponse) => {

    if(req.method === "POST"){

        try {
            await dbConnect()

            const validated = RoomRequestSchema.safeParse(req.body)
    
            if(!validated.success){
                return res.status(400).json({error: validated.error.message})
            }
            const message = await Room.create(validated.data)
            return res.status(200).json(message)
            
        }catch(error){
            console.log(error)
            return res.status(500).json({error: "Internal Server Error"})
        }
    }

    if(req.method === "GET"){
        //TODO: Pagination later
        const rooms = await Room.find({})
            .sort({createdAt: -1})
        return res.status(200).json(rooms.reverse())
    }

}

export default handler