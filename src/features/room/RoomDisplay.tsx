"use client"


import MessageDisplay from "../messages/MessageDisplay"
import RoomTitle from "./RoomTitle"
import { useUser } from "@clerk/nextjs"
import { match, P } from "ts-pattern"
export const RoomDisplay = () => {

    const {user} = useUser()

    return (
        <div className="w-full h-full space-y-8">
            <h1 className="text-center text-3xl font-bold">Main Room</h1>
            {
                match(user?.id).with(P.string, (id)=>{
                    return (
                        <>
                            <RoomTitle/>
                            <MessageDisplay userId={id} />
                        </>
                    )
                }).otherwise(()=>{
                    return (
                        <p>Loading...</p>
                    )
                })
            }
               
        </div>
    )
}