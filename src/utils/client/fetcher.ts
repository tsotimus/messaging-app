import axios from "axios"

export const genericFetcher = (url: string) => axios.get(url).then(res => res.data)