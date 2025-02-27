import dbConnect from "@/lib/dbConnect"
import Message from "@/models/Message"
import { MessageDisplay, MessageRequestSchema } from "@/types/message"
import { NextApiRequest, NextApiResponse } from "next"


const MOCKS: MessageDisplay[] = [
  {
    id: "123",
    createdBy: "user_2tcybdGFHbut2LkdDVxGUvVAJg6",
    text: "Hello everyone!",
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
  {
    id: "125",
    createdBy: "user_2tcybdGFHbut2LkdDVxGUvVAJg6",
    text: "Hello",
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
  {
    id: "124",
    createdBy: "user_2tcybdGFHbut2LkdDVxGUvVAJg6",
    text: "Hello to you too!",
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  }
]

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