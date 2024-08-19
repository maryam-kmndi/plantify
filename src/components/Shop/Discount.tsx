import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import frame from "../../assets/discountFrame.png";

const Discount = () => {
  return (
    <Container my="2.5rem">
      <Box pos='relative' display="grid" justifyItems="center" alignItems="center">
        <Image src={frame} />
        <VStack pos="absolute" textAlign="center" color="white">
          <Heading fontSize="1.3rem" textShadow="1px 1px #000">
            GET 30% OFF
          </Heading>
          <Text w="60%" fontSize={{ xl: ".8rem", base: ".8rem" }}>
            Share your referral code and get discount!
          </Text>
          <Button
            mt=".5rem"
            borderRadius={75}
            h={{ lg: "1.5rem", base: "1.2rem" }}
            px={{ lg: "2.7rem", base: "1.8rem" }}
            fontSize=".7rem"
            color="gray"
          >
            Share
          </Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default Discount;
