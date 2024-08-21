import { Heading, Text, VStack } from "@chakra-ui/react";
import Btn from "../Btn";

interface Props {
  h: string;
  t: string;
  b: string;
}

const ColorSide = ({ h, t, b }: Props) => {
  return (
    <VStack
      bg="primaryColor"
      color="cartsColor"
      h={{ md: "100vh" }}
      justifyContent="center"
      letterSpacing={{ lg: 2 }}
      textAlign="center"
      py="3rem"
    >
      <Heading
        fontSize={{ base: "2.5rem", lg: "3.5rem" }}
        textTransform="capitalize"
      >
        {h}
      </Heading>
      <Text w="50%" fontSize="1.2rem" pt="1rem" pb="3rem">
        {t}
      </Text>
      <Btn>{b.toUpperCase()}</Btn>
    </VStack>
  );
};

export default ColorSide;
