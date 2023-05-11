import React from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"header"
      "main"`,
        lg: `"header header"
      "aside main"`,
      }}
    >
      <GridItem area="header">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem bg="blue.200" area="aside">
          Aside
        </GridItem>
      </Show>
      <GridItem bg="green.200" area="main">
        Main
      </GridItem>
    </Grid>
  );
};

export default App;
