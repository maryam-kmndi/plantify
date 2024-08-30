import { Box, Grid, GridItem, HStack, Input, Stack } from "@chakra-ui/react";
import TheInput from "../components/TheInput";
import TheMenu from "../components/TheMenu";
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
        <form>
          <Box
            w={{ base: "90%", md: "70%", lg: "55%" }}
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
            <TheInput type="number" t="Phone Number" />
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
                required
              />
              <Input
                textAlign="center"
                focusBorderColor="#79A141"
                type="number"
                placeholder="Postal Code"
                required
              />
            </Stack>
            <HStack justify="center" py="1rem">
              <Btn type="submit">Confirm Payment</Btn>
            </HStack>
          </Box>
        </form>
      </GridItem>
      <GridItem bg="primaryColor"></GridItem>
    </Grid>
  );
};

export default CustomerInfoPage;
