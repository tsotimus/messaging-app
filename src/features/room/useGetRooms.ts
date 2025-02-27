
import { Errors } from '@/types/errors'
import { RoomsDisplay } from '@/types/room'
import { genericFetcher } from '@/utils/client/fetcher'
import useSWR from 'swr'

interface UseGetRoomsProps {
    fallbackData?: RoomsDisplay
}
const useGetRooms = ({fallbackData}: UseGetRoomsProps) => {

    const {isLoading, data,error, isValidating} = useSWR<RoomsDisplay, Errors>("api/v1/room", genericFetcher , {
        fallbackData: fallbackData
    })

    return {
        isLoading,
        isValidating,
        data: data ?? [],
        isErrors: error
    }
}

export default useGetRooms