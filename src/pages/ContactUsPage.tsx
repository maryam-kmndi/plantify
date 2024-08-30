import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Textarea,
  HStack,
  VStack,
  Stack,
} from "@chakra-ui/react";
import photo from "../assets/contact.png";
import { IoPersonCircleOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { TbPhone } from "react-icons/tb";
import { RxTwitterLogo } from "react-icons/rx";
import { AiOutlineInstagram } from "react-icons/ai";
import { Fragment } from "react";
import { MdOutlineMail } from "react-icons/md";

const ContactUsPage = () => {
  const info = [
    { icon: <MdOutlineMail />, t: "maryamkmndi8@gmail.com" },
    { icon: <AiOutlineInstagram />, t: "maryam_kmndi" },
    { icon: <RxTwitterLogo />, t: "maryamkmndi" },
  ];

  return (
    <>
      <Grid
        py="1.5rem"
        templateColumns={{ base: "1fr", md: "repeat(2,50%)" }}
        gap={{ base: "5rem", md: "2rem" }}
        alignItems="center"
        mb={{ xl: "6vmax", lg: "8vmax", md: "10vmax", base: "5vmax" }}
      >
        <GridItem>
          <form
            id="contact-form"
            method="POST"
            action="mailto:maryamkmndi8@gmail.com"
          >
            <VStack spacing="1.5rem" px="3rem" color="textColor" align="left">
              <Heading>Contact Us</Heading>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <IoPersonCircleOutline size="1.6rem" />
                </InputLeftElement>
                <Input
                  id="name"
                  bg="cartsColor"
                  placeholder="Name"
                  borderRadius={75}
                  focusBorderColor="#79A141"
                  required
                />
              </InputGroup>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <TfiEmail size="1.3rem" />
                </InputLeftElement>
                <Input
                  type="email"
                  id="email"
                  bg="cartsColor"
                  placeholder="Email"
                  borderRadius={75}
                  focusBorderColor="#79A141"
                  required
                />
              </InputGroup>
              <Textarea
                id="message"
                h="10rem"
                px="1.5rem"
                py="1rem"
                borderRadius="30px"
                bg="cartsColor"
                placeholder="Write down your message..."
                resize="none"
                focusBorderColor="#79A141"
                required
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
              <VStack spacing=".5rem" opacity=".8" align="left">
                <Text fontSize="xs">Contact info:</Text>
                {info.map((i, index) => (
                  <Flex gap=".2rem" key={index}>
                    <Box>{i.icon}</Box>
                    <Text fontSize="xs">{i.t}</Text>
                  </Flex>
                ))}
              </VStack>
            </VStack>
          </form>
        </GridItem>
        <GridItem justifySelf="center" w={{ md: "80%" }}>
          <Image src={photo} px="1.5rem" />
        </GridItem>
      </Grid>
    </>
  );
};

export default ContactUsPage;
