import { Errors } from '@/types/errors'
import { MessagesDisplay } from '@/types/message'
import { genericFetcher } from '@/utils/client/fetcher'
import useSWR from 'swr'

type UseGetMessagesProps = {
    roomId: string
}
const useGetMessages = ({roomId}: UseGetMessagesProps) => {

    const {isLoading, data,error, isValidating} = useSWR<MessagesDisplay, Errors>(`/api/v1/message?roomId=${roomId}`, genericFetcher , {
        refreshInterval: 10000  // Polling every 10 seconds
    })

return {
        isLoading,
        isValidating,
        data: data ?? [],
        isErrors: error
    }
}

export default useGetMessages