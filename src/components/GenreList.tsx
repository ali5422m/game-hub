import useGenres, {Genre} from "../hooks/useGenres.ts";
import {Heading, HStack, Image, List, ListItem, Text} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";
import GenreSkeleton from "./GenreSkeleton.tsx";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenreId?: number;
}

const GenreList = ({selectedGenreId, onSelectGenre}: Props) => {
    const {data, isLoading, error} = useGenres();
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    if (error) return null;


    return (
        <>
            <Heading fontSize="2xl" marginBottom={3} marginTop={6}>Genre</Heading>
                <List>
                    {isLoading &&
                        skeletons.map(skeleton => (
                            <GenreSkeleton key={skeleton}/>
                        ))}
                    {data?.results.map(genre => (
                        <ListItem key={genre.id} paddingY="5px">
                            <HStack>
                                <Image
                                    boxSize="32px"
                                    borderRadius={8}
                                    objectFit="cover"
                                    src={getCroppedImageUrl(genre.image_background)}
                                />
                                <Text
                                    fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                                    fontSize="lg"
                                    color={genre.id === selectedGenreId ? "#48BB78" : ""}
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
        </>
    );
};

export default GenreList;