import MessageForm from "./MessageForm"
import { Card, CardContent } from "@/components/ui/card"    
import { useParams } from "next/navigation"
import { match } from "ts-pattern"

const CreateMessage = () => {
    const params = useParams<{ id: string }>()

    return (
        <div className="w-full absolute bottom-0 left-0 p-8">
            <Card className="w-full">
                <CardContent>
                    {match(params)
                        .with(null, () => <div>Loading...</div>)
                        .with({ id: undefined }, () => <div>Loading...</div>)
                        .otherwise((p) => <MessageForm roomId={p.id} />)}
                </CardContent>
            </Card>
        </div>
    )
}

export default CreateMessage