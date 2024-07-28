import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ShopPreview from "./components/ShopPreview/ShopPreview";

function App() {
  return (
    <Grid templateAreas={`'header' 'main' 'footer'`}>
      <GridItem area={"header"}>
        <NavBar />
      </GridItem>
      <GridItem
        minHeight="100dvh"
        marginTop={{ xl: "6vmax", lg: "8vmax", md: "10vmax" }}
        marginBottom={{ xl: "6vmax", lg: "8vmax", md: "10vmax", base: "5vmax" }}
        area={"main"}
      >
        <Hero />
        <ShopPreview />
      </GridItem>
      <GridItem area={"footer"}>
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default App;
