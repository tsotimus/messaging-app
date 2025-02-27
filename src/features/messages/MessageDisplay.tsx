import { Card, CardContent } from "@/components/ui/card"
import useGetMessages from "./useGetMessages"


const MessageDisplay = () => {

    const {data} = useGetMessages()

    return (
        <div className="w-full space-y-4">
            {
                data.map((message)=>{
                    return (
                        <Card key={message.id}>
                            <CardContent>
                                <p>{message.text}</p>
                            </CardContent>
                        </Card>
                    )
                })
            }
        </div>
    )
}

export default MessageDisplay