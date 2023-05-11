import React from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameCardContainer from "./components/GameCardContainer";

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
        <GridItem area="aside">Aside</GridItem>
      </Show>
      <GridItem area="main">
        <GameCardContainer />
      </GridItem>
    </Grid>
  );
};

export default App;
