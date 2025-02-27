import useGetUsername from "../auth/useGetUsername"

const RoomTitle = () => {

    const username = useGetUsername()
    return (
        <h1>Hello {username} </h1>
    )
}

export default RoomTitle