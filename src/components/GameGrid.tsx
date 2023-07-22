import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames.ts";
import GameCard from "./GameCard.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";


const GameGrid = () => {

    const {games, error, isLoading} = useGames();
    const skeletons = [1, 2, 3, 4, 5, 6];

    return (
        <>
            {error && <Text className="text-danger">{error}</Text>}
            <SimpleGrid
                columns={{ sm: 1, md:2, lg:3, xl:4 }}
                padding="10px"
                spacing={10}
            >
                {isLoading &&
                    skeletons.map( skeleton => <GameCardSkeleton key={skeleton} />)}
                {games.map(game => (
                    <GameCard key={game.id} game={game} />
                ))}
            </SimpleGrid>
        </>
    );
};

export default GameGrid;