import {Grid, GridItem, HStack, Show} from "@chakra-ui/react";
import NavBar from "./NavBar.tsx";
import GameGrid from "./GameGrid.tsx";
import GenreList from "./GenreList.tsx";
import {useState} from "react";
import {Genre} from "../hooks/useGenres.ts";
import PlatformSelector from "./PlatformSelector.tsx";
import {Platform} from "../hooks/useGames.ts";
import SortSelector from "./SortSelector.tsx";


export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
}

const Layout = () => {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);


    return (
        <div>
            <Grid templateAreas={{
                base: `"nav" "main"`,
                lg: `"nav nav" "aside main"`
            }}
                  templateColumns={{
                      base: '1fr',
                      lg: '200px 1fr'
                  }}
            >
                <GridItem area="nav">
                    <NavBar/>
                </GridItem>
                <Show above="lg">
                    <GridItem area="aside" paddingX={5}>
                        <GenreList selectedGenre={gameQuery.genre}
                                   onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}/>
                    </GridItem>
                </Show>
                <GridItem area="main" paddingY="5px">
                    <HStack spacing={5} paddingLeft={2} marginBottom={5}>
                        <PlatformSelector selectedPlatform={gameQuery.platform}
                                          onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}/>
                        <SortSelector/>
                    </HStack>
                    <GameGrid gameQuery={gameQuery}/>
                </GridItem>
            </Grid>
        </div>
    );
};

export default Layout;