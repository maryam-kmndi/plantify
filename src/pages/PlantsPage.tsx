import { Divider, Grid, GridItem, Heading, Hide } from "@chakra-ui/react";
import SearchInput from "../components/Shop/SearchInput";
import ShopHero from "../components/Shop/ShopHero";
import SortSelector from "../components/Shop/SortSelector";
import LevelSelector from "../components/Shop/LevelSelector";
import PriceSelector from "../components/Shop/PriceSelector";
import ShopCarts from "../components/Home/ShopPreview/ShopCarts";
import RateSelector from "../components/Shop/RateSelector";
import Discount from "../components/Shop/Discount";

const PlantsPage = () => {
  return (
    <>
      <ShopHero />
      {/* <Divider mt="1.5rem" /> */}
      <Grid
        templateColumns={{
          base: "1fr",
          md: "28% 1% 71%",
          lg: "24% 1% 75%",
          xl: "19% 1% 80%",
        }}
      >
        <Hide breakpoint="(max-width: 767px)">
          <GridItem>
            <Heading fontSize="1.5rem" color="textColor" my="1rem" pl="1rem">
              Filter
            </Heading>
            <Divider />
            <LevelSelector />
            <Divider />
            <PriceSelector />
            <Divider />
            <RateSelector />
            <Divider />
            <Discount />
          </GridItem>
          <GridItem>
            <Divider orientation="vertical" />
          </GridItem>
        </Hide>
        <GridItem px="1rem">
          <Grid templateRows="100px 50px 1fr">
            <GridItem>
              <SearchInput />
            </GridItem>
            <GridItem>
              <SortSelector />
            </GridItem>
            <GridItem>{/* <ShopCarts /> */}</GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </>
  );
};

export default PlantsPage;
