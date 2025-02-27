import { Card, CardContent } from "@/components/ui/card"
import useGetMessages from "./useGetMessages"
import { cn } from "@/lib/utils"
interface MessageDisplayProps {
    userId: string
}

const MessageDisplay = ({userId}:MessageDisplayProps) => {

    const {data} = useGetMessages()
    

    return (
        <div className="w-full space-y-4 flex flex-col">
            {
                data.map((message)=>{
                    const isCurrentUser = message.createdBy === userId
                    const isCurrentUserStyles = `bg-blue-500`
                    const isOtherUserStyles = `bg-gray-500`
                    return (
                        <div key={message.id} className={`w-full flex ${isCurrentUser ? "justify-end" : "justify-start"}`}>
                            <Card className={cn(
                                "rounded-md p-4 w-1/2",
                                isCurrentUser ? isCurrentUserStyles : isOtherUserStyles
                            )}>
                                <CardContent>
                                    <p>{message.text}</p>
                                </CardContent>
                            </Card>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default MessageDisplay