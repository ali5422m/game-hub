import {useEffect, useState} from "react";
import apiClient from "../services/api-client.ts";
import {Text} from "@chakra-ui/react";


interface Game {
    id: number;
    name: string;
}
interface FetchGamesProps {
    count: number;
    results: Game[];
}

const GameGrid = () => {


    return (
        <>
            {error && <Text className="text-danger">{error}</Text>}
            <ul>

                {games.map(game => (
                    <li key={game.id}>{game.name}</li>
                ))}
            </ul>
        </>
    );
};

export default GameGrid;