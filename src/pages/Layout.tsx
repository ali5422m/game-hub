import NavBar from "../components/NavBar.tsx";
import {Outlet} from "react-router-dom";
import {Box} from "@chakra-ui/react";

const Layout = () => {
    return (
        <>
            <NavBar/>
            <Box padding={5}>
                <Outlet/>
            </Box>
        </>
    );
};

export default Layout;