import {useQuery} from "@tanstack/react-query";
import apiClient from "../services/api-client.ts";
import {FetchResponse} from "../services/api-client.ts";
import platforms from "../data/platforms.ts";

export  interface Platform {
    id: number;
    name: string;
    slug: string;
}
// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");


const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: () =>
        apiClient
            .get<FetchResponse<Platform>>('/platforms/lists/parents')
            .then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: platforms.length, results: platforms}
})

export default usePlatforms;