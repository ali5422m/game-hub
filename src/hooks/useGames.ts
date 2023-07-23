import useData from "./useData.ts";
import {GameQuery} from "../components/Layout.tsx";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}

const UseGames = (gameQuery: GameQuery) => useData<Game>("/games", {
    params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id
    }
}, [gameQuery]);

export default UseGames;