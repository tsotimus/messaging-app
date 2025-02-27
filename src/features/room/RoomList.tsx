"use client"

import { RoomsDisplay } from "@/types/room"
import CreateRoomDialog from "./CreateRoomDialog"
import useGetRooms from "./useGetRooms"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface RoomListProps {
    rooms: RoomsDisplay
}

const RoomList = ({rooms = []}: RoomListProps) => {

    const {data: roomsData} = useGetRooms({fallbackData: rooms})

    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Room List</h1>
                <CreateRoomDialog/>
            </div>
            {
                roomsData.map((room) => (
                    <Link href={`/room/${room.id}`} key={room.id}>
                        <Card>
                            <CardHeader className="flex flex-row justify-between items-center">
                                <CardTitle>Room Name: {room.name}</CardTitle>
                                <ArrowRight className="w-4 h-4"/>
                            </CardHeader>   
                        </Card>
                    </Link>
                ))
            }
        </div>
    )
}

export default RoomList