import  {FetchResponse} from "../services/api-client.ts";
import {GameQuery} from "../components/Layout.tsx";
import {useQuery} from "@tanstack/react-query";
import {Platform} from "./usePlatforms.ts";
import APIClient from "../services/api-client.ts";

const apiClient = new APIClient<Game>('/games');
export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
}

const UseGames = (gameQuery: GameQuery) =>
    useQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: () =>
            apiClient
                .getAll({
                    params: {
                        genres: gameQuery.genre?.id,
                        parent_platforms: gameQuery.platform?.id,
                        ordering: gameQuery.sortOrder,
                        search: gameQuery.searchText
                    }
                }),
    })
//     useData<Game>("/games", {
//     params: {
//         genres: gameQuery.genre?.id,
//         platforms: gameQuery.platform?.id,
//         ordering: gameQuery.sortOrder,
//         search: gameQuery.searchText
//     }
// }, [gameQuery]);

export default UseGames;