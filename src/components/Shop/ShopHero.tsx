import { Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import Img from "../../assets/plants.png";

const ShopHero = () => {
  return (
    <Grid
      bg="primaryColor"
      color="white"
      templateColumns={{ base: "1fr", md: "repeat(2,50%)" }}
      justifyItems="center"
      alignItems="center"
      textAlign={{ base: "center", md: "left" }}
    >
      <GridItem mx="2rem">
        <Heading
          fontSize={{ base: "1.5rem", md: "2.5rem", lg: "3rem", xl: "4rem" }}
          textTransform="capitalize"
          mt={5}
          mb={3}
        >
          plants make people happy
        </Heading>
        <Text fontSize={{ base: ".7rem", md: ".9rem", xl: "1.2rem" }}>
          Plants, care accessories, and more magic delivered to your door.
        </Text>
      </GridItem>
      <GridItem>
        <Image src={Img} aspectRatio="2/1" objectFit="contain" />
      </GridItem>
    </Grid>
  );
};

export default ShopHero;
