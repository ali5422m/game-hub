import APIClient, {FetchResponse} from "../services/api-client.ts";
import {useInfiniteQuery} from "@tanstack/react-query";
import ms from "ms";
import useGameQueryStore from "../store.ts";
import {Game} from "../entities/Game.ts";

const apiClient = new APIClient<Game>('/games');

const UseGames = () => {
    const gameQuery = useGameQueryStore(s => s.gameQuery);
    return useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: ({ pageParam = 1}) =>
            apiClient
                .getAll({
                    params: {
                        genres: gameQuery.genreId,
                        parent_platforms: gameQuery.platformId,
                        ordering: gameQuery.sortOrder,
                        search: gameQuery.searchText,
                        page: pageParam
                    }
                }),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined;
        },
        staleTime: ms('24h'),
    })
}

//     useData<Game>("/games", {
//     params: {
//         genres: gameQuery.genre?.id,
//         platforms: gameQuery.platform?.id,
//         ordering: gameQuery.sortOrder,
//         search: gameQuery.searchText
//     }
// }, [gameQuery]);

export default UseGames;