import {
  Box,
  Button,
  Card,
  CardBody,
  Image,
  Divider,
  Grid,
  GridItem,
  Heading,
  HStack,
  Input,
  Text,
  Tooltip,
  Circle,
} from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md";
import Btn from "./Btn";
import { Link } from "react-router-dom";
import { useCartItems } from "../store/useCartItem";
import { RiDeleteBin5Line } from "react-icons/ri";
import TheNumberInput from "./ShopDetails/TheNumberInput";
import { useCallback, useState } from "react";

const Shopping = () => {
  const { CartItem, totalPrice, setDeleteItem } = useCartItems();
  console.log(totalPrice);

  const [giftCode, setGiftCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [appliedCode, setAppliedCode] = useState("");
  const [err, setErr] = useState(false);

  const initialTotalPrice = totalPrice;
  const shipmentCost = 5.0;

  interface GiftCodes {
    [key: string]: number;
  }

  const giftCodes: GiftCodes = {
    SEM20: 20,
    SUMMER25: 25,
    WELCOME: 10,
  };

  const discountedPrice = initialTotalPrice * (1 - discount / 100);
  const totalAmount = discountedPrice + shipmentCost;

  const handleApplyGiftCode = () => {
    if (giftCodes[giftCode]) {
      setDiscount(giftCodes[giftCode]);
      setAppliedCode(giftCode);
      setErr(false);
    } else {
      setErr(true);
    }
  };
  return (
    <Box color="textColor">
      <HStack
        borderBottom="1px solid #464646"
        px="1rem"
        py="1.5rem"
        justifyContent="space-between"
        _dark={{ borderColor: "#d7d7d7" }}
      >
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
      <Box py="2rem">
        {CartItem.map((plant) => (
          <Grid
            mx="1.5rem"
            key={plant.id}
            templateColumns={{ base: "1fr", md: "repeat(3,1fr)" }}
            alignItems="center"
          >
            <GridItem>
              <Card
                w="60%"
                mx={{ base: "auto", md: "1rem" }}
                my="1rem"
                bg="cartsColor"
                shadow="lg"
                borderRadius="xl"
              >
                <CardBody>
                  <Image
                    aspectRatio="3/4"
                    objectFit="contain"
                    src={plant.image}
                  />
                </CardBody>
              </Card>
            </GridItem>
            <GridItem textAlign={{ base: "center", md: "left" }}>
              <Text
                fontSize={{
                  base: "1.1rem",
                  lg: "1.4rem",
                  xl: "1.5rem",
                }}
              >
                <Link to={`/plants/${plant.id}`}>{plant.name}</Link>
              </Text>
              <Text
                fontSize={{
                  base: ".8rem",
                  xl: "1rem",
                }}
                py=".5rem"
              >
                {plant.price}
              </Text>
            </GridItem>
            <GridItem pl="5rem">
              <HStack mx="auto" mb="1.5rem">
                <Circle
                  cursor="pointer"
                  onClick={() => setDeleteItem(plant.id)}
                  bg="primaryColor"
                  color="cartsColor"
                  size={{ base: "8vmax", md: "5vmax", lg: "3vmax" }}
                  fontSize={{ sm: "1.2rem", lg: "1rem" }}
                  _hover={{
                    transform: "scale(1.1)",
                    transition: "transform .1s ease-in",
                  }}
                >
                  <RiDeleteBin5Line size="1.2rem" />
                </Circle>
                <TheNumberInput />
              </HStack>
            </GridItem>
          </Grid>
        ))}
      </Box>

      <Grid
        templateColumns={{ base: "1fr", md: "44% 1% 55%" }}
        px="1rem"
        py="1.5rem"
        gap={{ base: "1rem", md: "0" }}
        borderTop="1px solid #464646"
        _dark={{ borderColor: "#d7d7d7" }}
      >
        <GridItem px="1rem">
          <Text pl=".5rem" as="b">
            Have a gift code?
          </Text>
          <HStack pt=".5rem">
            <Input
              fontSize="xs"
              bg="cartsColor"
              placeholder="Enter your code ..."
              borderRadius={75}
              focusBorderColor="#79A141"
              value={giftCode}
              onChange={(e) => setGiftCode(e.target.value)}
              disabled={!!appliedCode}
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
                onClick={handleApplyGiftCode}
              >
                <MdOutlineDone size="1.5rem" />
              </Button>
            </Tooltip>
          </HStack>
          {err && (
            <Text pl=".5rem" py="1rem" color="red" fontSize="sm">
              Invalid gift code. Please try again.
            </Text>
          )}
          {appliedCode && (
            <Text pl=".5rem" py="1rem" color="primaryColor" fontSize="sm">
              Code {appliedCode} applied.
              <br />
              {discount}% off!
            </Text>
          )}
        </GridItem>
        <GridItem>
          <Divider orientation="vertical" />
        </GridItem>
        <GridItem fontSize="xs" opacity=".8" px="1rem">
          <HStack justifyContent="space-between">
            <Text>Subtotal</Text>
            <Text>{totalPrice.toFixed(2)}$</Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text>Discount</Text>
            <Text>{discount}%</Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text>Shipment cost</Text>
            <Text>{shipmentCost.toFixed(2)}</Text>
          </HStack>
          <Divider py=".5rem" />
          <HStack justifyContent="space-between">
            <Text as="b" fontSize="1.1rem" pt=".2rem">
              Total amount
            </Text>
            <Text as="b" fontSize="1.1rem">
              {totalAmount.toFixed(2)}$
            </Text>
          </HStack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Shopping;
