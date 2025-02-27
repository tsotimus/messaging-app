import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger, DialogTitle, DialogHeader, DialogContent } from "@/components/ui/dialog"
import CreateRoomForm from "./CreateRoomForm"

const CreateRoomDialog = () => {



    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="cursor-pointer">Create Room</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create Room</DialogTitle>
                </DialogHeader>
                <CreateRoomForm/>
            </DialogContent>
        </Dialog>
    )
}

export default CreateRoomDialog