import {useEffect, useState} from "react";
import apiClient from "../services/api-client.ts";
import {CanceledError} from "axios";


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
interface FetchGamesProps {
    count: number;
    results: Game[];
}

const UseGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");


    useEffect(() => {
        const controller = new AbortController();
        apiClient
            .get<FetchGamesProps>("/games",{signal: controller.signal})
            .then(({data}) => setGames(data.results))
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message)
            });

        return  () => controller.abort();

    }, [])
    return {games, error};
};

export default UseGames;