import {useQuery} from "@tanstack/react-query";
import apiClient from "../services/api-client.ts";
import {Platform} from "./useGames.ts";
import {FetchResponse} from "./useData.ts";
import platforms from "../data/platforms.ts";


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