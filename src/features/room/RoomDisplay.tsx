"use client"


import CreateMessage from "../messages/CreateMessage"
import MessageDisplay from "../messages/MessageDisplay"
import RoomTitle from "./RoomTitle"
import { useUser } from "@clerk/nextjs"
import { match, P } from "ts-pattern"
export const RoomDisplay = () => {

    const {user} = useUser()

    return (
        <div className="w-full space-y-8">
            {
                match(user?.id).with(P.string, (id)=>{
                    return (
                        <>
                            <RoomTitle/>
                            <MessageDisplay userId={id} />
                            <CreateMessage/>
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