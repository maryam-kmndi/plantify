import { HStack, Tooltip, Circle, Text } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa6";
import Btn from "../Btn";
import { SlBasket } from "react-icons/sl";
import { useCheckLogin } from "../../store/useCheckLogin";
import { useFavoriteList } from "../../store/useFavoriteList";
import { useNavigate } from "react-router-dom";
import { useCartItems } from "../../store/useCartItem";
import { plantDataType, plantsList } from "../../data/plants";

const ProductsBtn = ({ id }: { id: number }) => {
  const { checkLogin: session } = useCheckLogin();
  const navigate = useNavigate();
  const { setFavoriteList, FavoriteList } = useFavoriteList();
  const { setCartItem, CartItem } = useCartItems();
  const cartCheckIncludes = CartItem.find((q) => q.id === id);
  const favoriteCheckIncludes = FavoriteList.find((q) => q.id === id);

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
    <HStack
      spacing="2rem"
      mt="3rem"
      // mx="auto"
      justify="end"
    >
      <Tooltip
        label={
          favoriteCheckIncludes
            ? "Remove from favorite list"
            : "Add to favorite list"
        }
        hasArrow
        bg="cartsColor"
        color="textColor"
      >
        <Circle
          onClick={() => addFavorite(id)}
          cursor={"pointer"}
          size={{ md: "50px", base: "2.2rem" }}
          bg="primaryColor"
          color="white"
          _hover={{
            bg: "cartsColor",
            color: "primaryColor",
            borderColor: "primaryColor",
            borderWidth: "1px",
          }}
        >
          <FaHeart />
        </Circle>
      </Tooltip>

      <Btn onClick={() => addCart(id)}>
        <SlBasket size="1.2rem" />
        <Text px="1.5rem">
          {cartCheckIncludes ? "Remove from cart" : "Add to cart"}
        </Text>
      </Btn>
    </HStack>
  );
};

export default ProductsBtn;
