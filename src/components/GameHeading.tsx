import {Heading} from "@chakra-ui/react";
import useGenre from "../hooks/useGenre.ts";
import usePlatform from "../hooks/usePlatform.ts";
import useGameQueryStore from "../store.ts";


// interface Props {
//     gameQuery: GameQuery;
// }

const GameHeading = () => {
    const genreId = useGameQueryStore(s => s.gameQuery.genreId);
    const genre = useGenre(genreId);

    const platformId = useGameQueryStore(s => s.gameQuery.platformId);
    const platform = usePlatform(platformId);


    const heading = `${platform?.name || ''} ${genre?.name || ''} Games`

    return (
        <Heading as="h1" marginY={5} fontSize="4xl">{heading}</Heading>
    );
};

export default GameHeading;