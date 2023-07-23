import {Box, HStack, SkeletonCircle, SkeletonText} from "@chakra-ui/react";


const GenreSkeleton = () => {
    return (
        <Box paddingTop="5px" width="200px">
            <HStack>
                <SkeletonCircle size='10'/>
                <SkeletonText mt='4' noOfLines={1} spacing='4' skeletonHeight='5' width="100px" marginTop={0} />
            </HStack>
        </Box>
    );
};

export default GenreSkeleton;