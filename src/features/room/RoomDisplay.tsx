"use client"


import MessageDisplay from "../messages/MessageDisplay"
import RoomTitle from "./RoomTitle"


export const RoomDisplay = () => {


    return (
        <div className="w-full h-full space-y-8">
            <h1 className="text-center">Main Room</h1>
                <RoomTitle/>
                <MessageDisplay  />
        </div>
    )
}