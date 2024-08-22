import { Grid, GridItem } from "@chakra-ui/react";
import ProfileCart from "../components/ProfileCart";
import Favorites from "../components/Favorites";

const FavoriteListPage = () => {
  return (
    <Grid templateColumns={{ base: "1fr", md: "65% 35%" }} gap=".5rem" py="1rem">
      <GridItem>
        <Favorites />
      </GridItem>
      <GridItem>
        <ProfileCart favB="gray.200" cartB="primaryColor"/>
      </GridItem>
    </Grid>
  );
};

export default FavoriteListPage;
