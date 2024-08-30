import {
  Card,
  CardBody,
  Divider,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { plantsList } from "../data/plants";
import { FiChevronLeft } from "react-icons/fi";
import ProductDetail from "../components/ShopDetails/ProductDetail";
import TheNumberInput from "../components/ShopDetails/TheNumberInput";
import ProductsBtn from "../components/ShopDetails/ProductsBtn";

const PlantDetailPage = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const plant = plantsList.find((p) => p.id === parseFloat(slug as string));

  const newPrice = (price: string) => {
    const intPrice = parseInt(price);
    const discounted = intPrice - (intPrice * 20) / 100;
    return discounted.toFixed(2) + "$";
  };

  if (plant)
    return (
      <Grid
        templateColumns={{ base: "1fr", md: "30% 1fr" }}
        pt="3rem"
        pos="relative"
      >
        <GridItem bg="primaryColor" h="100%" pt="1rem" pl=".5rem">
          <FiChevronLeft
            size={60}
            color="white"
            onClick={() => navigate("/plants")}
          />
          <Card
            mx="auto"
            bg={{ base: "primaryColor", md: "cartsColor" }}
            shadow={{ md: "lg" }}
            borderRadius={50}
            pos={{ md: "absolute" }}
            left={{ md: "19%" }}
            w={{ md: "22%", base: "70%" }}
          >
            <CardBody>
              <Image
                src={plant?.image}
                objectFit="contain"
                aspectRatio={{ md: "3/4" }}
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem
          w="90%"
          mb={{ xl: "6vmax", lg: "8vmax", md: "10vmax", base: "5vmax" }}
        >
          <VStack align="left" pl={{ md: "22%", base: "8%" }} pt="14%">
            <Heading color="textColor">{plant?.name}</Heading>
            <HStack spacing={5} fontWeight="600" fontSize="1.1rem" pb="1rem">
              <Text color="textColor" textDecoration="line-through">
                {plant?.price}
              </Text>
              <Text color="primaryColor">{newPrice(plant?.price)}</Text>
            </HStack>
            <Divider />
            <ProductDetail plant={plant} />
            <HStack spacing="3rem" pt="1rem">
              <Text as="b" fontSize="1.2rem" color="textColor">
                Quantity
              </Text>
              <TheNumberInput />
            </HStack>
            <ProductsBtn id={parseFloat(slug as string)} />
          </VStack>
        </GridItem>
      </Grid>
    );
};

export default PlantDetailPage;
