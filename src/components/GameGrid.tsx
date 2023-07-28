import { SimpleGrid, Spinner, Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames.ts";
import GameCard from "./GameCard.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import GameCardContainer from "./GameCardContainer.tsx";

import {GameQuery} from "./Layout.tsx";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";


interface Props {
    gameQuery: GameQuery;
}


const GameGrid = ({gameQuery}: Props) => {

    const {
        data,
        error,
        isLoading,
        fetchNextPage,
        // isFetchingNextPage,
        hasNextPage
    } = useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    if (error) return <Text>{error.message}</Text>;

    const fetchedGamesCount = data?.pages.reduce((total, page) => {
        return total + page.results.length
    },0) || 0;

    return (
        <>
            <InfiniteScroll
                dataLength={fetchedGamesCount}
                hasMore={!!hasNextPage}
                next={() => fetchNextPage()}
                loader={<Spinner />}
            >
                <SimpleGrid
                    columns={{sm: 1, md: 2, lg: 3, xl: 4}}
                    spacing={6}
                    padding="10px"
                >
                    {isLoading &&
                        skeletons.map(skeleton => (
                            <GameCardContainer key={skeleton}>
                                <GameCardSkeleton/>
                            </GameCardContainer>))}
                    {data?.pages.map((page, index) =>
                        <React.Fragment key={index}>
                            {page.results.map(game =>
                                <GameCardContainer key={game.id}>
                                    <GameCard game={game}/>
                                </GameCardContainer>)}
                        </React.Fragment>
                    )}
                </SimpleGrid>
            </InfiniteScroll>

            {/*{hasNextPage && (*/}
            {/*    <Button onClick={() => fetchNextPage()} marginY={5}>*/}
            {/*        {isFetchingNextPage ? 'Loading...' : 'Load More'}*/}
            {/*    </Button>*/}
            {/*)}*/}
        </>
    );
};

export default GameGrid;