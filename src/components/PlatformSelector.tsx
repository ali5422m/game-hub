import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms.ts";
import {Platform} from "../hooks/usePlatforms.ts";

interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatformId?: number;
}

const PlatformSelector = ({onSelectPlatform, selectedPlatformId}: Props) => {
    const {data, error} = usePlatforms();
    const selectedPlatform = data?.results.find(g => g.id === selectedPlatformId);

    if (error) return null;


    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>{selectedPlatform?.name || "Platforms"}</MenuButton>
            <MenuList>
                {data?.results.map(platform => (
                    <MenuItem
                        key={platform.id}
                        onClick={() => onSelectPlatform(platform)}>{platform.name}
                    </MenuItem>))}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;