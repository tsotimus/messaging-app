import dbConnect from "@/lib/dbConnect"
import Room from "@/models/Room"
import { IDSchema } from "@/utils/server/validations"
import { NextApiRequest, NextApiResponse } from "next"


const handler = async(req: NextApiRequest, res: NextApiResponse) => {

    if(req.method === "GET"){
        try {
            await dbConnect()
            const validated = IDSchema.safeParse(req.query.id)
            
            if(!validated.success){
                return res.status(400).json({error: validated.error.message})
            }
            const room = await Room.findById(validated.data)
            if(!room){
                return res.status(404).json({error: "Room not found"})
            }
            return res.status(200).json(room)

        }catch(error){
            console.log(error)
            return res.status(500).json({error: "Internal Server Error"})
        }
    }

}

export default handler