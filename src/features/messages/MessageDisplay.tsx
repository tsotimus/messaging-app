import { Card, CardContent, CardFooter } from "@/components/ui/card"
import useGetMessages from "./useGetMessages"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"
import { useRef, useEffect } from "react"
import { MessageDisplay as MessageDisplayType, MessagesDisplay } from "@/types/message"
import { format } from "date-fns"


interface MessageCardProps {
    message: MessageDisplayType
    userId: string
}

const MessageCard = ({message, userId}: MessageCardProps) => {
    const isCurrentUser = message.createdBy === userId

    return (
        <div className={`w-full flex ${isCurrentUser ? "justify-end" : "justify-start"}`}>
            <Card className={cn(
                "rounded-md p-4 w-1/2",
                isCurrentUser ? "bg-blue-500" : "bg-gray-500"
            )}>
                <CardContent>
                    <p>{message.text}</p>
                    <div className="flex items-center justify-end gap-1">
                        <p className="text-xs text-muted-foreground font-light">
                            {format(new Date(message.createdAt), 'h:mm a')}
                        </p>
                        {isCurrentUser && (
                            <span className="text-xs text-muted-foreground">
                                {message.delivered ? (
                                    <span className="flex space-x-0 -mr-1">✓<span className="-ml-1">✓</span></span>
                                ) : (
                                    <span>✓</span>
                                )}
                            </span>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
interface MessageDisplayProps {
    userId: string
    roomId: string
}

const MessageDisplay = ({userId, roomId}:MessageDisplayProps) => {
    const messagesEndRef = useRef<HTMLDivElement>(null)
    const {data, isLoading} = useGetMessages({roomId})

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [data])

    return (
        <div className="w-full h-[calc(100vh-25rem)] space-y-4 flex flex-col overflow-y-auto">
            {
                data.map((message)=>{
                    return (
                        <MessageCard key={message.id} message={message} userId={userId} />
                    )
                })
            }
            {
                isLoading && (
                    <div className="w-full flex justify-center items-center">
                        <Loader2 className="w-4 h-4 animate-spin" />
                    </div>
                )
            }
            <div ref={messagesEndRef} />
        </div>
    )
}

export default MessageDisplay