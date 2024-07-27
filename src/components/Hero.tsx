import {
  AbsoluteCenter,
  Box,
  Circle,
  Divider,
  Grid,
  GridItem,
  HStack,
  Image,
  Show,
  Text,
} from "@chakra-ui/react";
import hero from "../assets/hero.png";
import "@openfonts/dynalight_latin";
import "@openfonts/dynalight_latin-ext";
import Btn from "./Btn";

const Hero = () => {
  const circles = [1, 2, 3];
  return (
    <Grid
      marginX="7vw"
      templateColumns={{ sm: "1fr", md: "45% 1fr" }}
      alignItems="center"
    >
      <GridItem position={{ md: "relative" }} right={{ md: "3vw" }}>
        <Image src={hero} w="100%" aspectRatio="1/1" objectFit="contain" />
      </GridItem>
      <GridItem>
        <Grid gap={{ base: "1rem", md: ".5rem" }}>
          <GridItem>
            <Show above="md">
              <HStack position="relative" bottom="1.5vw" spacing="2vw">
                <Divider />
                {circles.map((c) => (
                  <Circle size="3.5vmax" bg="#BDDF8E" />
                ))}
              </HStack>
            </Show>
            <Show breakpoint="(max-width: 767px)">
              <Box position="relative">
                <Divider />
                <AbsoluteCenter bg="white" px="2">
                  <HStack gap={1}>
                    {circles.map((c) => (
                      <Circle size="4vmax" bg="#BDDF8E" />
                    ))}
                  </HStack>
                </AbsoluteCenter>
              </Box>
              <HStack />
            </Show>
          </GridItem>
          <GridItem>
            <Text
              fontFamily={"dynalight"}
              fontSize={{ base: "3xl", md: "4xl", lg: "6xl", xl: "5rem" }}
              lineHeight="1"
              textAlign={{ base: "center", md: "start" }}
            >
              Bring the magic of nature to your home
            </Text>
          </GridItem>
          <GridItem margin={{ md: "0", base: "0 auto" }}>
            <Text
              pt={{ md: "rem" }}
              fontSize={{ base: "xs", md: "md" }}
              width="20em"
              lineHeight="1.2"
              textAlign={{ md: "start", base: "center" }}
            >
              Decorate your home with houseplants! choose a variety of
              decorative plants, suitable for indoors from our diverse
              collection.
            </Text>
          </GridItem>
          <GridItem justifySelf={{ md: "flex-end", base: "center" }}>
            <Btn children="Go Shop Now" />
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  );
};

export default Hero;
