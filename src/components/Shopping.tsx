import {
  Box,
  Button,
  Divider,
  Grid,
  GridItem,
  Heading,
  HStack,
  Input,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md";
import Btn from "./Btn";
import { Link } from "react-router-dom";

const Shopping = () => {
  return (
    <Box
      ml=".5rem"
      mr={{ base: ".5rem", md: "0" }}
      bg="#F5F3F4"
      // _dark={{bg:""}}
      borderRadius="36px"
      h="100%"
      color="textColor"
    >
      <HStack px="1rem" py="1.5rem" justifyContent="space-between">
        <HStack>
          <AiOutlineShoppingCart size="3rem" />
          <Heading fontSize={{ base: "1.2rem", md: "1.5rem" }}>
            Shopping Cart
          </Heading>
        </HStack>
        <Link to="/info">
          <Btn>Confirm Payment</Btn>
        </Link>
      </HStack>
      <Divider />
      <Box h="400px" />
      <Divider />
      <Grid
        templateColumns={{ base: "1fr", md: "44% 1% 55%" }}
        px="1rem"
        py="1.5rem"
        gap={{ base: "1rem", md: "0" }}
      >
        <GridItem px="1rem">
          <Text pl=".5rem" as="b">
            Have a gift code?
          </Text>
          <HStack pt=".5rem">
            <Input
              fontSize="xs"
              bg="#D9D9D9"
              placeholder="Enter your code ..."
              borderRadius={75}
              focusBorderColor="#79A141"
            />
            <Tooltip label="Apply" hasArrow bg="cartsColor" color="textColor">
              <Button
                bg="primaryColor"
                color="cartsColor"
                borderRadius="100%"
                borderWidth="1px"
                _hover={{
                  bg: "cartsColor",
                  color: "primaryColor",
                  borderColor: "primaryColor",
                }}
              >
                <MdOutlineDone size="1.5rem" />
              </Button>
            </Tooltip>
          </HStack>
        </GridItem>
        <GridItem>
          <Divider orientation="vertical" />
        </GridItem>
        <GridItem fontSize="xs" opacity=".8" px="1rem">
          <HStack justifyContent="space-between">
            <Text>Subtotal</Text>
            <Text>100.00$</Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text>Discount</Text>
            <Text>20%</Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text>Shipment cost</Text>
            <Text>5.00$</Text>
          </HStack>
          <Divider py=".5rem" />
          <HStack justifyContent="space-between">
            <Text as="b" fontSize="1.1rem" pt=".2rem">
              Total amount
            </Text>
            <Text as="b" fontSize="1.1rem">
              84.00$
            </Text>
          </HStack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Shopping;
