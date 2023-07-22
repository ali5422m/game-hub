import {Grid, GridItem, Show} from "@chakra-ui/react";
const ResponsiveLayout = () => {
    return (
        <div>
            <Grid templateAreas={{
                base: `"nav" "main"`,
                lg: `"nav nav" "aside main"`
            }}>
                <GridItem area="nav" bg="coral">
                    Nav
                </GridItem>
                <Show above="lg">
                    <GridItem area="aside" bg="blue">
                        Aside
                    </GridItem>
                </Show>
                <GridItem area="main" bg="red">
                    Main
                </GridItem>
            </Grid>
        </div>
    );
};

export default ResponsiveLayout;