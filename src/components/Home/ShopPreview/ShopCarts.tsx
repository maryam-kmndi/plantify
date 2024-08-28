import {
  Card,
  CardBody,
  Grid,
  GridItem,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { plantDataType, plantsList } from "../../../data/plants";
import { SlBasket } from "react-icons/sl";
import { LiaHeart } from "react-icons/lia";
import HowerCircle from "./HowerCircle";
import "./ShopCarts.css";
import StarRate from "./StarRate";
import { Link } from "react-router-dom";

interface Props {
  data: plantDataType[]|undefined;
  w?: string;
  fontSize?: string;
}

const ShopCarts = ({ data, fontSize = "1rem", w = "80%" }: Props) => {
  return (
    <Grid
      mt="1.5rem"
      width={{ base: "60%", md: w }}
      mx="auto"
      gap="1.8rem"
      templateColumns={{
        base: "1fr",
        md: "repeat(2,1fr)",
        lg: "repeat(4,1fr)",
      }}
    >
      {data?.map((plant) => (
        <GridItem key={plant.id}>
          <Card
            className="card"
            bg="cartsColor"
            shadow="lg"
            textAlign="center"
            borderRadius="xl"
            position="relative"
            _hover={{
              transform: "scale(1.05)",
              zIndex: "2",
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
                  base: "1rem",
                  lg: fontSize,
                  xl: "1.4rem",
                }}
              >
                <Link to={"/plants/" + plant.slug}>{plant.name}</Link>
              </Text>
              <StarRate rate={plant.rate} />
              <Text
                fontSize={{
                  base: ".8rem",
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
