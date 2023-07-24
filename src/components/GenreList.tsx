import useGenres, {Genre} from "../hooks/useGenres.ts";
import {Heading, HStack, Image, List, ListItem, Text} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";
import GenreSkeleton from "./GenreSkeleton.tsx";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({selectedGenre, onSelectGenre}: Props) => {
    const {data, isLoading, error} = useGenres();
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    if (error) return null;


    return (
        <>
            <Heading fontSize="2xl" marginBottom={3}>Genre</Heading>
            {/*<SimpleGrid*/}
            {/*    columns={{sm: 1, md: 2, lg: 3, xl: 4}}*/}
            {/*    padding="10px"*/}
            {/*    spacing={3}*/}
            {/*>*/}
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
                                    objectFit="cover"
                                    src={getCroppedImageUrl(genre.image_background)}
                                />
                                <Text
                                    fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                                    fontSize="lg"
                                    color={genre.id === selectedGenre?.id ? "#48BB78" : ""}
                                    variant="link"
                                    cursor="pointer"
                                    _hover={{textDecoration: "underline"}}
                                    onClick={() => onSelectGenre(genre)}
                                >
                                    {genre.name}
                                </Text>
                            </HStack>
                        </ListItem>
                    ))}
                </List>
            {/*</SimpleGrid>*/}
        </>
    );
};

export default GenreList;