import { Grid } from "@chakra-ui/react";
import SearchInput from "../components/Shop/SearchInput";
import ShopHero from "../components/Shop/ShopHero";

const PlantsPage = () => {
  return (
    <>
      <ShopHero />
      <Grid m="2rem" templateColumns="20% 80%">
        <SearchInput />
        <SearchInput />
      </Grid>
    </>
  );
};

export default PlantsPage;
