import { Divider, Grid, GridItem, Show } from "@chakra-ui/react";
import SearchInput from "../components/Shop/SearchInput";
import ShopHero from "../components/Shop/ShopHero";
import SortSelector from "../components/Shop/SortSelector";
import Filter from "../components/Shop/Filter";
import FilterDrawer from "../components/Shop/FilterDrawer";
import ShopCarts from "../components/Home/ShopPreview/ShopCarts";
import { plantDataType, plantsList } from "../data/plants";
import { useState } from "react";

const PlantsPage = () => {
  const [renderData, setRenderData] = useState<plantDataType[]>([...plantsList]);
  const sortPlants = (sortResult: plantDataType[]) => {
    setRenderData([]);
    console.log(renderData);

    setRenderData([...sortResult]);
  };
  return (
    <>
      <ShopHero />
      <Grid
        templateColumns={{
          base: "1fr",
          md: "28% 1% 71%",
          lg: "21% 1% 78%",
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
          <SortSelector onSelectSortOrder={sortPlants} />
          <Show breakpoint="(max-width: 767px)">
            <FilterDrawer />
          </Show>
          <ShopCarts data={renderData} />
        </GridItem>
      </Grid>
    </>
  );
};

export default PlantsPage;
