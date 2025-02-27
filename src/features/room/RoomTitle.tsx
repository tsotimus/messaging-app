import { RoomDisplay } from "@/types/room"
import { useUser } from "@clerk/nextjs"

interface RoomTitleProps {
    room: RoomDisplay
}

const RoomTitle = ({room}: RoomTitleProps) => {

    const {user} = useUser()

    return (
        <div className="flex flex-col gap-2">
            <h1 className="text-1xl text-center font-bold">Welcome {user?.emailAddresses[0].emailAddress} to the {room.name} room </h1>
            <p className="text-sm text-center text-muted-foreground">Created on {new Date(room.createdAt).toLocaleDateString()}</p>
        </div>
    )
}

export default RoomTitle