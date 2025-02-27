import { Card, CardContent } from "@/components/ui/card"
import useGetMessages from "./useGetMessages"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"
import { useRef, useEffect } from "react"

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