import {ReactNode} from 'react';
import {Box} from "@chakra-ui/react";


interface Props {
    children: ReactNode;
}
const GameCardContainer = ({children}: Props) => {
    return (
        <Box
            width="100%"
            borderRadius={10}
            overflow="hidden"
            _hover={{
                transform: 'scale(1.03)',
                transition: 'transform .15s ease-in'
            }}
            boxShadow= "0px 2px 10px 1px rgba(206,196,196,0.71)"
            _dark={{boxShadow: "0px 0px 10px 0px transparent"}}
        >
            {children}
        </Box>
    );
};

export default GameCardContainer;