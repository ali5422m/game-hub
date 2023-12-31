import {HStack, Image} from "@chakra-ui/react";
import gameLogo from "../assets/game-logo.png";
import ColorModeSwitch from "./ColorModeSwitch.tsx";
import SearchInput from "./SearchInput.tsx";
import {Link} from "react-router-dom";

// interface Props {
//     onSearch: (searchText: string) => void;
// }

// const NavBar = ({onSearch}: Props) => {
//     return (
//         <>
//             <HStack  padding="10px">
//                 <Image  src={gameLogo}  boxSize="60px"  />
//                 <SearchInput onSearch={onSearch} />
//                 <ColorModeSwitch />
//             </HStack>
//         </>
//     );
// };
const NavBar = () => {
    return (
        <>
            <HStack padding="10px">
                <Link to="/">
                    <Image src={gameLogo} boxSize="60px" objectFit="cover" />
                </Link>
                <SearchInput/>
                <ColorModeSwitch/>
            </HStack>
        </>
    );
};

export default NavBar;