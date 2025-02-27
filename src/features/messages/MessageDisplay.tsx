import { Card, CardContent } from "@/components/ui/card"
import { MessagesDisplay } from "@/types/message"
import useGetMessages from "./useGetMessages"


const MessageDisplay = () => {

    const {data} = useGetMessages()

    return (
        <div>
            {
                data.map((message)=>{
                    return (
                        <Card key={message.id}>
                            <CardContent>
                                <p>{message.text}</p>
                            </CardContent>
                        </Card>
                        // <div key={message.id}>
                        //      <p>{message.text}</p>
                        // </div>
                    )
                })
            }
        </div>
    )
}

export default MessageDisplay