import useGenres, {Genre} from "../hooks/useGenres.ts";
import {HStack, Image, List, ListItem, SimpleGrid, Text} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";
import GenreSkeleton from "./GenreSkeleton.tsx";

interface Props {
    onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({onSelectGenre}: Props) => {
    const {data, isLoading, error} = useGenres();
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    if (error) return null;


    return (
        <SimpleGrid
            columns={{sm: 1, md: 2, lg: 3, xl: 4}}
            padding="10px"
            spacing={3}
        >
            <List>
                {isLoading &&
                    skeletons.map(skeleton => (
                        <GenreSkeleton key={skeleton}/>
                    ))}
                {data.map(genre => (
                    <ListItem key={genre.id} paddingY="5px">
                        <HStack>
                            <Image
                                boxSize="32px"
                                borderRadius={8}
                                src={getCroppedImageUrl(genre.image_background)}
                            />
                            <Text
                                fontSize="lg"
                                variant="link"
                                cursor="pointer"
                                onClick={() => onSelectGenre(genre)}
                            >
                                {genre.name}
                            </Text>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </SimpleGrid>
    );
};

export default GenreList;