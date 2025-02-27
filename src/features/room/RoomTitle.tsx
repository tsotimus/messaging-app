import { useUser } from "@clerk/nextjs"

const RoomTitle = () => {

    const {user} = useUser()

    return (
        <h1>Hello {user?.id} </h1>
    )
}

export default RoomTitle