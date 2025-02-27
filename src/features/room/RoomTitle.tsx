import { useUser } from "@clerk/nextjs"

const RoomTitle = () => {

    const {user} = useUser()

    return (
        <h1 className="text-1xl text-center font-bold">Welcome {user?.emailAddresses[0].emailAddress} </h1>
    )
}

export default RoomTitle