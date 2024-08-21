import { HStack, Tooltip, Circle, Text } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa6";
import Btn from "../Btn";
import { SlBasket } from "react-icons/sl";

const ProductsBtn = () => {
  return (
    <HStack
      spacing="2rem"
      mt="3rem"
      // mx="auto"
      justify="end"
    >
      <Tooltip
        label="Add to favorite list"
        hasArrow
        bg="cartsColor"
        color="textColor"
      >
        <Circle
          size={{ md: "50px", base: "2.2rem" }}
          //   objectFit="contain"
          bg="primaryColor"
          color="white"
          _hover={{
            // transform: "scale(1.1)",
            // transition: "transform .15s ease-in",
            bg: "cartsColor",
            color: "primaryColor",
            borderColor: "primaryColor",
            borderWidth: "1px",
          }}
        >
          <FaHeart />
        </Circle>
      </Tooltip>

      <Btn>
        <SlBasket size="1.2rem" />
        <Text px="1.5rem">Add to cart</Text>
      </Btn>
    </HStack>
  );
};

export default ProductsBtn;
