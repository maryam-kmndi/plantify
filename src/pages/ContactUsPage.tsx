import {
  Button,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import photo from "../assets/contact.png";
import { IoPersonCircleOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";

const ContactUsPage = () => {
  return (
    <Grid
      py="1.5rem"
      templateColumns={{ base: "1fr", md: "repeat(2,50%)" }}
      gap={{ base: "5rem", md: "2rem" }}
      alignItems="center"
    >
      <GridItem>
        <VStack spacing="1.5rem" px="3rem" color="textColor">
          <Heading>Contact Us</Heading>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <IoPersonCircleOutline size="1.6rem" />
            </InputLeftElement>
            <Input
              bg="cartsColor"
              placeholder="Name"
              borderRadius={75}
              focusBorderColor="#79A141"
            />
          </InputGroup>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <TfiEmail size="1.3rem" />
            </InputLeftElement>
            <Input
              bg="cartsColor"
              placeholder="Email"
              borderRadius={75}
              focusBorderColor="#79A141"
            />
          </InputGroup>
          <Textarea
            h="10rem"
            px="1.5rem"
            py="1rem"
            borderRadius="30px"
            bg="cartsColor"
            placeholder="Write down your message..."
            resize="none"
            focusBorderColor="#79A141"
          />
          <Button
            type="submit"
            bg="primaryColor"
            color="white"
            borderRadius={75}
            borderWidth="1px"
            w="100%"
            py="1.5rem"
            fontWeight={200}
            _hover={{
              bg: "cartsColor",
              color: "primaryColor",
              borderColor: "primaryColor",
            }}
          >
            Send Message
          </Button>
        </VStack>
      </GridItem>
      <GridItem justifySelf="center" w={{ md: "80%" }}>
        <Image src={photo} px="1.5rem" />
      </GridItem>
    </Grid>
  );
};

export default ContactUsPage;
