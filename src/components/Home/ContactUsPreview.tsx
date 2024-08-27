import {
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import Btn from "../Btn";
import photo from "../../assets/contactUs.png";
import { Link } from "react-router-dom";

const ContactUsPreview = () => {
  return (
    <Grid
      templateAreas={{ base: `'first' 'second'`, md: `'first second'` }}
      templateColumns={{ base: "1fr", md: "70% 30%" }}
      textAlign={{ base: "center", md: "start" }}
      bg="primaryColor"
      color="white"
      mt={{ md: "10rem" }}
    >
      <GridItem area="first">
        <VStack alignItems="start" px="2rem" pt="2rem">
          <Heading
            textAlign={{ base: "center", md: "start" }}
            letterSpacing={0.8}
            fontSize={{ xl: "2rem", md: "1.8rem", base: "1.3rem" }}
          >
            Contact Us for Collaboration
          </Heading>
          <Text
            pt=".3rem"
            pb=".5rem"
            fontSize={{ xl: "1.2rem", lg: ".9rem", base: ".7rem" }}
          >
            Have questions about our plants or need assistance with your order?
            Our friendly team is ready to assist you. We're passionate about
            plants and committed to providing you with the best services. Let's
            grow together!
          </Text>
          <HStack
            w="100%"
            justifyContent={{ md: "start", base: "center" }}
            pt=".5rem"
            pb="2rem"
            spacing={{ md: "1rem", base: ".5rem" }}
          >
            <Link to="/contact-us">
              <Btn
                hover={{ bg: "cartsColor", color: "textColor" }}
                borderColor="cartsColor"
              >
                Contact Us
              </Btn>
            </Link>
            <Link to="/plants">
              <Btn
                hover={{ bg: "cartsColor", color: "textColor" }}
                borderColor="cartsColor"
              >
                New Arrival
              </Btn>
            </Link>
          </HStack>
        </VStack>
      </GridItem>
      <GridItem area="second" position="relative">
        <Image
          src={photo}
          aspectRatio={{ base: "10/8", md: "1/1" }}
          objectFit={{ base: "contain", md: "cover" }}
          position={{ md: "absolute" }}
          bottom={0}
        />
      </GridItem>
    </Grid>
  );
};

export default ContactUsPreview;
