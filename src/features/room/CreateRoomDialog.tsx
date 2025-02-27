"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger, DialogTitle, DialogHeader, DialogContent } from "@/components/ui/dialog"
import CreateRoomForm from "./CreateRoomForm"
import { useState } from "react"

const CreateRoomDialog = () => {
    const [open, setOpen] = useState(false)

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" className="cursor-pointer">Create Room</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create Room</DialogTitle>
                </DialogHeader>
                <CreateRoomForm onSuccess={() => setOpen(false)}/>
            </DialogContent>
        </Dialog>
    )
}

export default CreateRoomDialog