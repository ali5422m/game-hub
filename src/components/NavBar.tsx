import {HStack, Image} from "@chakra-ui/react";
import gameLogo from "../assets/game-logo.webp";
import ColorModeSwitch from "./ColorModeSwitch.tsx";

const NavBar = () => {
    return (
        <>
            <HStack justifyContent="space-between" padding="10px">
                <Image src={gameLogo} boxSize="60px"  />
                <ColorModeSwitch />
            </HStack>
        </>
    );
};

export default NavBar;