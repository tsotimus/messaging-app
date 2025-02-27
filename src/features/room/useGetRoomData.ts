import { Errors } from "@/types/errors"
import { RoomDisplay } from "@/types/room"
import { genericFetcher } from "@/utils/client/fetcher"
import useSWR from "swr"

const useGetRoomData = (roomId: string | undefined) => {
    const {data, isLoading, error} = useSWR<RoomDisplay, Errors>(
        roomId ? `/api/v1/room/${roomId}` : null,
        genericFetcher
    )
    
    return {
        data,
        isLoading,
        isError: !!error
    }
}

export default useGetRoomData