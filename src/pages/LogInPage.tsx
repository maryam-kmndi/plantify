import {
  Box,
  Grid,
  GridItem,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { TfiEmail } from "react-icons/tfi";
import Btn from "../components/Btn";
import { Link } from "react-router-dom";

const LogInPage = () => {
  return (
    <Grid templateColumns="repeat(2,50%)">
      <GridItem bg="primaryColor" h="100vh" pos="relative">
        <Box
          w="70vw"
          //   h="70vh"
          pt="2rem"
          bg="white"
          borderColor="primaryColor"
          borderWidth="2px"
          borderRadius={75}
          pos="absolute"
          left="15vw"
          top="10%"
        >
          <Heading
            fontSize={{ base: "1.4rem", md: "2rem" }}
            textTransform="capitalize"
            color="primaryColor"
            textAlign="center"
          >
            Welcome !
          </Heading>
          <Text
            color="textColor"
            fontSize={{ base: "xs", md: "sm" }}
            textAlign="center"
            pt="2rem"
          >
            Please Enter Your Email Address
          </Text>
          <InputGroup color="textColor" w="80%" my="1rem" mx="auto">
            <InputLeftElement pointerEvents="none">
              <TfiEmail size="1.2rem" />
            </InputLeftElement>
            <Input
              bg="cartsColor"
              placeholder="Email"
              borderRadius={75}
              focusBorderColor="#79A141"
            />
          </InputGroup>
          <Stack
            direction={{ base: "column", md: "row" }}
            py={{ base: "1rem", md: "2rem" }}
            justify="center"
            align="center"
            spacing={{ base: 2, md: 10 }}
          >
            <Link to="/sign-in">
              <Text hideBelow="md" fontSize="xs" pb=".2rem" textAlign="center">
                Do you have an account?
              </Text>
              <Btn>Sign in</Btn>
            </Link>
            <Link to="/sign-up">
              <Text hideBelow="md" fontSize="xs" pb=".2rem" textAlign="center">
                create your account
              </Text>
              <Btn>Sign up</Btn>
            </Link>
          </Stack>
        </Box>
      </GridItem>
      <GridItem>
        <Box h="100%" borderColor="primaryColor" borderWidth="2px 0"></Box>
      </GridItem>
    </Grid>
  );
};

export default LogInPage;
