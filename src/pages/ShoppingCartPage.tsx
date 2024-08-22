import { Grid, GridItem } from "@chakra-ui/react";
import ProfileCart from "../components/ProfileCart";
import Shopping from "../components/Shopping";

const ShoppingCartPage = () => {
  return (
    <Grid
      templateColumns={{ base: "1fr", md: "65% 35%" }}
      gap=".5rem"
      py="1rem"
    >
      <GridItem>
        <Shopping />
      </GridItem>
      <GridItem>
        <ProfileCart favB="primaryColor" cartB="gray.200" />
      </GridItem>
    </Grid>
  );
};

export default ShoppingCartPage;
