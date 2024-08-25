import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  VStack,
} from "@chakra-ui/react";
import TheInput from "../components/TheInput";
import TheMenu from "../components/TheMenu";
import { FiChevronDown } from "react-icons/fi";
import Btn from "../components/Btn";

const CustomerInfoPage = () => {
  const provinces = [
    "Tehran",
    "Tabriz",
    "Esfahan",
    "Shiraz",
    "Mashhad",
    "Azarbaijan",
  ];
  return (
    <Grid templateRows="50% 50%">
      <GridItem zIndex="2">
        <Box
          w={{ base: "90%", md: "70%", lg: "55%" }}
          h="100%px"
          py="2rem"
          mx="auto"
          bg="white"
          borderColor="primaryColor"
          borderWidth="2px"
          borderRadius={75}
          mt="1rem"
          mb="5rem"
        >
          <HStack>
            <TheInput t="First Name" pr="0" />
            <TheInput t="Last Name" pl="0" />
          </HStack>
          <TheInput t="Phone Number" />
          <TheInput t="Address" />
          <Stack
            direction={{ base: "column", md: "row" }}
            px="3rem"
            py="1rem"
            color="black"
          >
            <TheMenu items={provinces} />
            <Input
              textAlign="center"
              focusBorderColor="#79A141"
              placeholder="City"
            />
            <Input
              textAlign="center"
              focusBorderColor="#79A141"
              placeholder="Postal Code"
            />
          </Stack>
          <HStack justify="center" py="1rem">
            <Btn>Confirm Payment</Btn>
          </HStack>
        </Box>
      </GridItem>
      <GridItem bg="primaryColor"></GridItem>
    </Grid>
  );
};

export default CustomerInfoPage;
