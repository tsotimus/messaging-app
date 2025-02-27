"use client"


import CreateMessage from "../messages/CreateMessage"
import MessageDisplay from "../messages/MessageDisplay"
import RoomTitle from "./RoomTitle"
import { useUser } from "@clerk/nextjs"
import { match, P } from "ts-pattern"
import useGetRoomData from "./useGetRoomData"
import { useParams } from "next/navigation"


export const RoomDisplay = () => {
    const {user} = useUser()
    const params = useParams<{ id: string }>()
    const {data, isLoading, isError} = useGetRoomData(params?.id)

    return (
        <div className="w-full space-y-8">
            {match({ user, isLoading, isError, data })
                .with({ isError: true }, () => (
                    <p>Error loading room data</p>
                ))
                .with({ isLoading: true }, () => (
                    <p>Loading...</p>
                ))
                .with(
                    { 
                        user: { id: P.string }, 
                        isLoading: false, 
                        isError: false,
                        data: P.not(P.nullish) 
                    }, 
                    ({ user, data }) => (
                        <>
                            <RoomTitle room={data}/>
                            <MessageDisplay userId={user.id} roomId={data.id} />
                            <CreateMessage/>
                        </>
                    )
                )                
                .otherwise(() => (
                    <p>Please sign in to view this room</p>
                ))
            }
        </div>
    )
}