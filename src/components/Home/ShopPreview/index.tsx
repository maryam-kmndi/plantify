import {
  AbsoluteCenter,
  Box,
  Divider,
  Heading,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { CgHeart } from "react-icons/cg";
import ShopBtn from "./ShopBtn";
import ShopCarts from "./ShopCarts";

const ShopPreview = () => {
  return (
    <>
      <VStack gap="0">
        <Heading
          textAlign="center"
          fontSize={{ xl: "2.5rem", lg: "2rem",md:'1.8rem', base: "1.3rem" }}
          as="b"
          mb="1rem"
        >
          Top-Sales <br /> Products
        </Heading>
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
        <ShopCarts />
      </VStack>
    </>
  );
};

export default ShopPreview;
