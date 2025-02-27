import dbConnect from "@/lib/dbConnect"
import { MessageDisplay } from "@/types/message"
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
        console.log(req.body)
    }

    if(req.method === "GET"){
        return res.status(200).json(MOCKS)
    }

}

export default handler