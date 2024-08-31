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
import { SlBasket, SlBasketLoaded } from "react-icons/sl";
import { LiaHeart, LiaHeartSolid } from "react-icons/lia";
import HowerCircle from "./HowerCircle";
import "./ShopCarts.css";
import StarRate from "./StarRate";
import { Link, useNavigate } from "react-router-dom";
import { useCheckLogin } from "../../../store/useCheckLogin";
import { useFavoriteList } from "../../../store/useFavoriteList";
import { useCartItems } from "../../../store/useCartItem";

interface Props {
  data: plantDataType[] | undefined;
  w?: string;
  fontSize?: string;
}

const ShopCarts = ({ data, fontSize = "1rem", w = "80%" }: Props) => {
  const { checkLogin: session } = useCheckLogin();
  const navigate = useNavigate();
  const { FavoriteList, setFavoriteList } = useFavoriteList();
  const { CartItem, setCartItem } = useCartItems();

  const addFavorite = (selectId: number) => {
    const plantDetails = plantsList.find(
      (q) => q.id === selectId
    ) as plantDataType;
    if (!session) {
      navigate("/log-in");
    } else {
      setFavoriteList(plantDetails);
    }
  };

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
          <Link to={`/plants/${plant.id}`}>
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
                  <HowerCircle
                    top="15%"
                    handleClick={() => {
                      if (!session) {
                        navigate("/log-in");
                      } else {
                        setCartItem(
                          plantsList.find(
                            (q) => q.id === plant.id
                          ) as plantDataType
                        );
                      }
                    }}
                  >
                    {session ? (
                      CartItem.find((q) => q.id === plant.id) ? (
                        <SlBasketLoaded size="1.2rem" />
                      ) : (
                        <SlBasket size="1.2rem" />
                      )
                    ) : (
                      <SlBasket size="1.2rem" />
                    )}
                  </HowerCircle>
                  <HowerCircle
                    top="32%"
                    handleClick={() => addFavorite(plant.id)}
                  >
                    {session ? (
                      FavoriteList.find((q) => q.id === plant.id) ? (
                        <LiaHeartSolid />
                      ) : (
                        <LiaHeart />
                      )
                    ) : (
                      <LiaHeart />
                    )}
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
                  {plant.name}
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
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};

export default ShopCarts;
