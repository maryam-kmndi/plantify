import {
  AbsoluteCenter,
  Box,
  Divider,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { CgHeart } from "react-icons/cg";
import ShopBtn from "./ShopBtn";
import ShopCarts from "./ShopCarts";

const ShopPreview = () => {
  return (
    <>
      <VStack gap="0">
        <Text textAlign="center" fontSize="2.1rem" as="b" mb="1rem">
          Top-Sales <br /> Products
        </Text>
        <Divider w="20%" />
        <Box position="relative">
          <AbsoluteCenter bg="white" px="1rem" fontSize="1.2rem">
            <CgHeart />
          </AbsoluteCenter>
        </Box>
        <HStack
          my="2rem"
          spacing={{ xl: "3.3rem", lg: "3rem", md: "2.7rem", base: ".8rem" }}
        >
          <ShopBtn children="New Arrival" />
          <ShopBtn children="Featured" />
          <ShopBtn children="Best Sellers" />
        </HStack>
      </VStack>
    </>
  );
};

export default ShopPreview;
