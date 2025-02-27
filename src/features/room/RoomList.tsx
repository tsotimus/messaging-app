"use client"

import { RoomsDisplay } from "@/types/room"
import CreateRoomDialog from "./CreateRoomDialog"
import useGetRooms from "./useGetRooms"

interface RoomListProps {
    rooms: RoomsDisplay
}

const RoomList = ({rooms = []}: RoomListProps) => {

    const {data: roomsData} = useGetRooms({fallbackData: rooms})

    return (
        <div>
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Room List</h1>
                <CreateRoomDialog/>
            </div>
            {
                roomsData.map((room) => (
                    <div key={room.id}>
                        <h2>{room.name}</h2>
                    </div>
                ))
            }
        </div>
    )
}

export default RoomList