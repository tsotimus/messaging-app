import MessageForm from "./MessageForm"
import { Card, CardContent } from "@/components/ui/card"    
const CreateMessage = () => {
    return (
        <div className="w-full absolute bottom-0 left-0 p-8">
            <Card className="w-full">
                <CardContent>
                    <MessageForm />
                </CardContent>
            </Card>
        </div>
    )
}

export default CreateMessage