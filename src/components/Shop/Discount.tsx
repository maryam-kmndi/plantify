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
    <Container pl="2.5rem" my="2.5rem">
      <Box pos="relative">
        <Image src={frame} />
        <VStack
          pos="absolute"
          textAlign="center"
          top="10%"
          left="-20%"
          color="white"
        >
          <Heading fontSize="1.2rem" textShadow="1px 1px #000">
            GET 30% OFF
          </Heading>
          <Text w="50%" lineHeight="1.2rem" fontSize=".8rem">
            Share your referral code and get discount!
          </Text>
          <Button
            borderRadius={75}
            h="1.4rem"
            px="2.7rem"
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
