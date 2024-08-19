import { Divider, Grid, GridItem, Show } from "@chakra-ui/react";
import SearchInput from "../components/Shop/SearchInput";
import ShopHero from "../components/Shop/ShopHero";
import SortSelector from "../components/Shop/SortSelector";
import Filter from "../components/Shop/Filter";
import FilterDrawer from "../components/Shop/FilterDrawer";

const PlantsPage = () => {
  return (
    <>
      <ShopHero />
      <Grid
        templateColumns={{
          base: "1fr",
          md: "28% 1% 71%",
          lg: "24% 1% 75%",
          xl: "19% 1% 80%",
        }}
      >
        <Show breakpoint="(min-width: 768px)">
          <GridItem>
            <Filter />
          </GridItem>
          <GridItem>
            <Divider orientation="vertical" />
          </GridItem>
        </Show>
        <GridItem px="1rem">
          <SearchInput />
          <SortSelector />
          <Show breakpoint="(max-width: 767px)">
            <FilterDrawer />
          </Show>
          {/* <ShopCarts /> */}
        </GridItem>
      </Grid>
    </>
  );
};

export default PlantsPage;
