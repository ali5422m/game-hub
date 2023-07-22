import {HStack, Image, Text} from "@chakra-ui/react";
import gameLogo from "../assets/game-logo.webp";

const NavBar = () => {
    return (
        <>
            <HStack>
                <Image src={gameLogo} boxSize="60px"  />
                <Text fontSize="20px" fontWeight="semibold" >GameHub</Text>
            </HStack>
        </>
    );
};

export default NavBar;