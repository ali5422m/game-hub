import {HStack, Image} from "@chakra-ui/react";
import gameLogo from "../assets/game-logo.png";
import ColorModeSwitch from "./ColorModeSwitch.tsx";
import SearchInput from "./SearchInput.tsx";

const NavBar = () => {
    return (
        <>
            <HStack  padding="10px">
                <Image src={gameLogo} boxSize="60px"  />
                <SearchInput />
                <ColorModeSwitch />
            </HStack>
        </>
    );
};

export default NavBar;