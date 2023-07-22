import {useEffect, useState} from "react";
import apiClient from "../services/api-client.ts";
import {CanceledError} from "axios";

interface Game {
    id: number;
    name: string;
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