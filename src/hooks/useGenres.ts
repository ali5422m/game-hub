// import genres from "../data/genres.ts";
import {useQuery} from "@tanstack/react-query";
import apiClient from "../services/api-client.ts";
import {FetchResponse} from "./useData.ts";
import genres from "../data/genres.ts";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

// const useGenres = () => ({ data: genres, isLoading: false, error: null});
const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: () =>
        apiClient
            .get<FetchResponse<Genre>>('/genres')
            .then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: genres.length, results: genres }
})
export default useGenres;