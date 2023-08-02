import {Box, Grid, GridItem, HStack, Show} from "@chakra-ui/react";
import GenreList from "../components/GenreList.tsx";
import GameHeading from "../components/GameHeading.tsx";
import PlatformSelector from "../components/PlatformSelector.tsx";
import SortSelector from "../components/SortSelector.tsx";
import GameGrid from "../components/GameGrid.tsx";

const HomePage = () => {
    return (
        <Grid templateAreas={{
            base: `"main"`,
            lg: `"aside main"`
        }}
              templateColumns={{
                  base: '1fr',
                  lg: '200px 1fr'
              }}
        >
            {/*<GridItem area="nav">*/}
            {/*<NavBar />*/}
            {/*<NavBar*/}
            {/*    onSearch={(searchText) =>*/}
            {/*        setGameQuery({...gameQuery, searchText})}*/}
            {/*/>*/}
            {/*</GridItem>*/}
            <Show above="lg">
                <GridItem area="aside" paddingX={5}>
                    <GenreList
                        // selectedGenreId={gameQuery.genreId}
                        //        onSelectGenre={(genre) => setGameQuery({...gameQuery, genreId: genre.id})}
                    />
                </GridItem>
            </Show>
            <GridItem area="main" >
                <Box paddingLeft={2}>
                    <GameHeading
                        // gameQuery={gameQuery}
                    />
                    <HStack spacing={5} marginBottom={5}>
                        <PlatformSelector
                            // selectedPlatformId={gameQuery.platformId}
                            //               onSelectPlatform={(platform) => setGameQuery({...gameQuery, platformId: platform.id})}
                        />
                        <SortSelector
                            // sortOrder={gameQuery.sortOrder}
                            //           onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}
                        />
                    </HStack>
                </Box>
                <GameGrid
                    // gameQuery={gameQuery}
                />
            </GridItem>
        </Grid>
    );
};

export default HomePage;