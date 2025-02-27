import dbConnect from "@/lib/dbConnect"
import Message from "@/models/Message"
import { MessageRequestSchema } from "@/types/message"
import { NextApiRequest, NextApiResponse } from "next"


const handler = async(req: NextApiRequest, res: NextApiResponse) => {

    if(req.method === "POST"){
        await dbConnect()

        const validated = MessageRequestSchema.safeParse(req.body)

        if(!validated.success){
            return res.status(400).json({error: validated.error.message})
        }

        const message = await Message.create(validated.data)
        
        return res.status(200).json(message)
    }

    if(req.method === "GET"){
        const messages = await Message.find({}).sort({createdAt: 1}).limit(10)
        return res.status(200).json(messages)
    }

}

export default handler