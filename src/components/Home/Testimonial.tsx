import {
  Circle,
  Grid,
  GridItem,
  HStack,
  Image,
  Stat,
  StatHelpText,
  StatLabel,
  Text,
} from "@chakra-ui/react";
import photo from "../../assets/testimonial.jpg";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { BiSolidQuoteRight } from "react-icons/bi";
const Testimonial = () => {
  return (
    <Grid
      w={{ md: "75%" }}
      borderRadius={{ md: 30 }}
      bg="cartsColor"
      shadow="xl"
      templateColumns={{ base: "1fr", md: "40% 60%" }}
      justifyItems="center"
      alignItems={{ md: "center" }}
      mb={{ xl: "6vmax", lg: "8vmax", md: "10vmax", base: "5vmax" }}
    >
      <GridItem position="relative">
        <Image
          src={photo}
          w="70%"
          aspectRatio="4/6"
          mx="auto"
          my={{ lg: "3rem", md: "2rem", base: "2rem" }}
          objectFit="contain"
          borderRadius={35}
        />
        <Circle
          bg="primaryColor"
          color="cartsColor"
          border="1px"
          position="absolute"
          top="15%"
          right="10%"
          size={{ lg: "40px", md: "30px", base: "40px" }}
          fontSize={{ lg: "1rem", md: ".7rem" }}
        >
          <BiSolidQuoteRight />
        </Circle>
      </GridItem>
      <GridItem px={{ base: "3vmax", md: 0 }}>
        <Text
          textAlign={{ md: "start", base: "center" }}
          fontSize={{ lg: "1rem", base: ".8rem" }}
          pr={{ md: "3rem" }}
          mb="2rem"
        >
          I'm Maryam, a passionate plant lover dedicated to bringing the beauty
          of nature inyo your home. What started as a small hobby has blossomed
          into this online shop, where I curate a selection of the healthiest,
          most vibrant plants. Every plant is chosen with care, ensuring it will
          thrive in your space and bring joy to your life.
        </Text>
        <HStack mb="2rem">
          <TfiLayoutLineSolid size={30} color="#79A141" />
          <Stat>
            <StatLabel
              fontSize={{ lg: "2.3rem", base: "1.5rem" }}
              fontFamily={"dynalight"}
            >
              Maryam Kamandi
            </StatLabel>
            <StatHelpText fontSize={{ lg: ".9rem", base: ".6rem" }}>
              Plantify Company
            </StatHelpText>
          </Stat>
        </HStack>
      </GridItem>
    </Grid>
  );
};

export default Testimonial;
