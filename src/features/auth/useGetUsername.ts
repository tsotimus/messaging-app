import { useLocalStorage } from "@uidotdev/usehooks"
import { USERNAME_KEY } from "../room/constants"

const useGetUsername = () => {
    const [username,] = useLocalStorage(USERNAME_KEY, null)

    return username
}

export default useGetUsername