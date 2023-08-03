import {useQuery} from "@tanstack/react-query";
import genres from "../data/genres.ts";
import APIClient from "../services/api-client.ts";
import ms from "ms";
import {Genre} from "../entities/Genre.ts";

const apiClient = new APIClient<Genre>('/genres');

// const useGenres = () => ({ data: genres, isLoading: false, error: null});
const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: genres
})
export default useGenres;