import { Card, CardContent } from "@/components/ui/card"
import useGetMessages from "./useGetMessages"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"
interface MessageDisplayProps {
    userId: string
}

const MessageDisplay = ({userId}:MessageDisplayProps) => {

    const {data, isLoading, isValidating} = useGetMessages()
    console.log(data, isLoading, isValidating)

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
        </div>
    )
}

export default MessageDisplay