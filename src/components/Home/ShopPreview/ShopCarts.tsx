import {
  Card,
  CardBody,
  Grid,
  GridItem,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { plantsList } from "../../../data/plants";
import { SlBasket } from "react-icons/sl";
import { LiaHeart } from "react-icons/lia";
import HowerCircle from "./HowerCircle";
import "./ShopCarts.css";
import StarRate from "./StarRate";

interface Props {
  plantsNum?: number;
}

const ShopCarts = ({ plantsNum = 4 }: Props) => {
  return (
    <Grid
      mt="1.5rem"
      w={{ base: "60%", md: "80%" }}
      mx="auto"
      gap="1.8rem"
      templateColumns={{
        base: "1fr",
        md: "repeat(2,1fr)",
        lg: "repeat(4,1fr)",
      }}
    >
      {plantsList?.data?.slice(0, plantsNum).map((plant) => (
        <GridItem>
          <Card
            className="card"
            bg="cartsColor"
            shadow="lg"
            textAlign="center"
            borderRadius="xl"
            position="relative"
            _hover={{
              transform: "scale(1.05)",
              transition: "transform .15s ease-in",
            }}
          >
            <CardBody>
              <VStack className="hidden">
                <HowerCircle top="15%">
                  <SlBasket />
                </HowerCircle>
                <HowerCircle top="32%">
                  <LiaHeart />
                </HowerCircle>
              </VStack>
              <Image
                mx="auto"
                w="70%"
                aspectRatio="3/4"
                objectFit="contain"
                src={plant.image}
              />
              <Text
                fontSize={{
                  base: ".9rem",
                  sm: "1rem",
                  md: ".9rem",
                  lg: "1rem",
                  xl: "1.2rem",
                }}
              >
                {plant.name}
              </Text>
              <StarRate rate={plant.rate} />
              <Text
                fontSize={{
                  base: ".7rem",
                  sm: ".9rem",
                  md: ".7rem",
                  lg: ".8rem",
                  xl: "1rem",
                }}
                py=".5rem"
              >
                {plant.price}
              </Text>
            </CardBody>
          </Card>
        </GridItem>
      ))}
    </Grid>
  );
};

export default ShopCarts;
