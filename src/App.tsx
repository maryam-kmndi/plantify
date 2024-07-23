import { Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={`'header' 'main' 'footer'`}
      templateRows={"100px 900px 50px"}
    >
      <GridItem area={"header"}>header</GridItem>
      <GridItem area={"main"}>main</GridItem>
      <GridItem area={"footer"} bg="lightsalmon">
        footer
      </GridItem>
    </Grid>
  );
}

export default App;
