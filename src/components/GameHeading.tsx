import {Heading} from "@chakra-ui/react";
import {GameQuery} from "./Layout.tsx";
import useGenre from "../hooks/useGenre.ts";
import usePlatform from "../hooks/usePlatform.ts";


interface Props {
    gameQuery: GameQuery;
}

const GameHeading = ({gameQuery}: Props) => {

    const genre = useGenre(gameQuery.genreId);
    const platform = usePlatform(gameQuery.platformId);


    const heading = `${platform?.name || ''} ${genre?.name || ''} Games`

    return (
        <Heading as="h1" marginY={5} fontSize="4xl">{heading}</Heading>
    );
};

export default GameHeading;