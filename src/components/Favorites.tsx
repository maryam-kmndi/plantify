import {
  Box,
  Card,
  CardBody,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Text,
  Circle,
} from "@chakra-ui/react";
import { RiDeleteBin5Line, RiPlantLine } from "react-icons/ri";
import Btn from "./Btn";
import { Link, useNavigate } from "react-router-dom";
import { useFavoriteList } from "../store/useFavoriteList";
import { SlBasket, SlBasketLoaded } from "react-icons/sl";
import StarRate from "./Home/ShopPreview/StarRate";
import { plantDataType, plantsList } from "../data/plants";
import { useCheckLogin } from "../store/useCheckLogin";
import { useCartItems } from "../store/useCartItem";

const Favorites = () => {
  const { FavoriteList, removeFav } = useFavoriteList();
  const navigate = useNavigate();
  const { setCartItem, CartItem } = useCartItems();
  const { checkLogin: session } = useCheckLogin();

  const addCart = (selectId: number) => {
    const plantDetails = plantsList.find(
      (q) => q.id === selectId
    ) as plantDataType;
    if (!session) {
      navigate("/log-in");
    } else {
      setCartItem(plantDetails);
    }
  };

  return (
    <Box color="textColor" my="2rem">
      <HStack
        p="1.5rem"
        justifyContent="space-between"
        borderBottom="1px solid #464646"
        _dark={{ borderColor: "#d7d7d7" }}
      >
        <HStack>
          <RiPlantLine size="4rem" />
          <Heading fontSize="1.5rem">Favorite List</Heading>
        </HStack>
        <Link to="/plants">
          <Btn>Go Back Shop</Btn>
        </Link>
      </HStack>
      <Grid
        my="1.5rem"
        mx="1rem"
        gap="1.8rem"
        templateColumns={{
          base: "1fr",
          md: "repeat(3,1fr)",
          // lg: "repeat(4,1fr)",
        }}
      >
        {FavoriteList?.map((plant) => (
          <GridItem key={plant.id}>
            <Card
              w="90%"
              mx={{ base: "auto", md: "0" }}
              bg="cartsColor"
              shadow="lg"
              textAlign="center"
              borderRadius="xl"
              position="relative"
            >
              <CardBody>
                <Image
                  mx="auto"
                  w="50%"
                  aspectRatio="3/4"
                  objectFit="contain"
                  src={plant.image}
                />
                <Text
                  fontSize={{
                    base: "1rem",
                    lg: "1.2rem",
                    xl: "1.4rem",
                  }}
                >
                  <Link to={`/plants/${plant.id}`}>{plant.name}</Link>
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
                <HStack justify="center" spacing="1rem" pt=".5rem">
                  <Circle
                    cursor="pointer"
                    onClick={() => addCart(plant.id)}
                    bg="primaryColor"
                    color="cartsColor"
                    fontSize={{ sm: "1.2rem", lg: "1rem" }}
                    p=".6rem"
                    _hover={{
                      transform: "scale(1.1)",
                      transition: "transform .1s ease-in",
                    }}
                  >
                    {!CartItem.find((q) => q.id === plant.id) && (
                      <SlBasket size="1.2rem" />
                    )}
                    {CartItem.find((q) => q.id === plant.id) && (
                      <SlBasketLoaded size="1.2rem" />
                    )}
                  </Circle>

                  <Circle
                    cursor="pointer"
                    onClick={() => removeFav(plant.id)}
                    bg="primaryColor"
                    color="cartsColor"
                    fontSize={{ sm: "1.2rem", lg: "1rem" }}
                    p=".6rem"
                    _hover={{
                      transform: "scale(1.1)",
                      transition: "transform .1s ease-in",
                    }}
                  >
                    <RiDeleteBin5Line size="1.2rem" />
                  </Circle>
                </HStack>
              </CardBody>
            </Card>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Favorites;
