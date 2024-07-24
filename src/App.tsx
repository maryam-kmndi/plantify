import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/Navbar";

function App() {
  return (
    <Grid
      templateAreas={`'header' 'main' 'footer'`}
      templateRows={"300px 900px 50px"}
    >
      <GridItem area={"header"}><NavBar/></GridItem>
      <GridItem area={"main"}>main</GridItem>
      <GridItem area={"footer"} bg="lightsalmon">
        footer
      </GridItem>
    </Grid>
  );
}

export default App;
