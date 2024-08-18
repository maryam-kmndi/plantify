import { Divider, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import SearchInput from "../components/Shop/SearchInput";
import ShopHero from "../components/Shop/ShopHero";
import SortSelector from "../components/Shop/SortSelector";
import LevelSelector from "../components/Shop/LevelSelector";

const PlantsPage = () => {
  return (
    <>
      <ShopHero />
      <Grid my="2rem" templateColumns="19% 1% 80%">
        <GridItem>
          <Heading fontSize="1.5rem" color="textColor" my="1rem" pl="1rem">
            Filter
          </Heading>
          <Divider />
          <LevelSelector />
          <Divider />
        </GridItem>
        <GridItem>
          <Divider orientation="vertical" />
        </GridItem>
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
