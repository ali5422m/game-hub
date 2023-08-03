import {useQuery} from "@tanstack/react-query";
import platforms from "../data/platforms.ts";
import APIClient from "../services/api-client.ts";
import ms from "ms";
import {Platform} from "../entities/Platform.ts";


const apiClient = new APIClient<Platform>('/platforms/lists/parents');

// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");


const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: platforms
})

export default usePlatforms;