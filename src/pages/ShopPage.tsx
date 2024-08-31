import { Divider, Grid, GridItem, Show } from "@chakra-ui/react";
import SearchInput from "../components/Shop/SearchInput";
import ShopHero from "../components/Shop/ShopHero";
import SortSelector from "../components/Shop/SortSelector";
import Filter from "../components/Shop/Filter";
import FilterDrawer from "../components/Shop/FilterDrawer";
import ShopCarts from "../components/Home/ShopPreview/ShopCarts";
import { useFilterProduct } from "../store/useFiltersPlants";
import { useSearchPlants } from "../store/useSearchPlants";
import { useSortPlants } from "../store/useSortPlants";
import { plantDataType, plantsList } from "../data/plants";
import { useEffect, useState } from "react";
import { useActiveFilters } from "../store/useActiveFilter";

const ShopPage = () => {
  const { renderSearchData } = useSearchPlants();
  const { filterProductResult } = useFilterProduct();
  const { sortPlantsResult } = useSortPlants();
  const { activeFilters } = useActiveFilters();
  const [renderData, setRenderData] = useState<plantDataType[]>([]);

  useEffect(() => {
    selectRenderData();
  }, [filterProductResult, sortPlantsResult, renderSearchData, activeFilters]);

  const selectRenderData = () => {
    if (renderSearchData) {
      setRenderData(renderSearchData);
    } else if (activeFilters.length >= 1) {
      setRenderData(filterProductResult as plantDataType[]);
    } else if (sortPlantsResult) {
      setRenderData(sortPlantsResult);
    } else {
      console.log("hello");

      setRenderData([...plantsList]);
    }
    console.log(renderData);
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
        mb={{ xl: "6vmax", lg: "8vmax", md: "10vmax", base: "5vmax" }}
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
          <ShopCarts fontSize=".9rem" w="98%" data={renderData} />
        </GridItem>
      </Grid>
    </>
  );
};

export default ShopPage;
