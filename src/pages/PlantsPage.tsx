import { Grid, GridItem } from "@chakra-ui/react";
import SearchInput from "../components/Shop/SearchInput";
import ShopHero from "../components/Shop/ShopHero";
import SortSelector from "../components/Shop/SortSelector";

const PlantsPage = () => {
  return (
    <>
      <ShopHero />
      <Grid m="2rem" templateColumns="20% 80%">
        <GridItem></GridItem>
        <GridItem>
          <Grid templateRows="80px 50px 1fr">
            <GridItem>
              <SearchInput />
            </GridItem>
            <GridItem>
              <SortSelector />
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </>
  );
};

export default PlantsPage;
