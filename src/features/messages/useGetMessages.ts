import { Errors } from '@/types/errors'
import { MessagesDisplay } from '@/types/message'
import { genericFetcher } from '@/utils/client/fetcher'
import useSWR from 'swr'

const useGetMessages = () => {

    const {isLoading, data,error, isValidating} = useSWR<MessagesDisplay, Errors>("api/v1/message", genericFetcher , {
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