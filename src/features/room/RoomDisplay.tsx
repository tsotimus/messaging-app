"use client"


import MessageDisplay from "../messages/MessageDisplay"
import AuthLayout from "../auth/AuthLayout"
import RoomTitle from "./RoomTitle"


export const RoomDisplay = () => {


    return (
        <div className="w-full h-full space-y-8">
            <h1 className="text-center">Main Room</h1>
            <AuthLayout>
                <RoomTitle/>
                <MessageDisplay  />
            </AuthLayout>
        </div>
    )
}