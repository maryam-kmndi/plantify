import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import Btn from "../Btn";
import { Link, useNavigate } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";

interface Props {
  h: string;
  t: string;
  b: string;
  to: string;
  right?: boolean;
}

const ColorSide = ({ h, t, b, to, right }: Props) => {
  const navigate = useNavigate();

  return (
    <VStack
      bg="primaryColor"
      color="cartsColor"
      h={{ md: "100vh" }}
      justifyContent="center"
      letterSpacing={{ lg: 2 }}
      textAlign="center"
      py="3rem"
      pos="relative"
    >
      {right && (
        <Box pos="absolute" top={{ base: "2vh", md: "4vh" }} right="1vw">
          <FiChevronLeft
            size={60}
            color="white"
            onClick={() => navigate("/log-in")}
            transform="rotate(180)"
          />
        </Box>
      )}
      {!right && (
        <Box pos="absolute" top={{ base: "2vh", md: "4vh" }} left="1vw">
          <FiChevronLeft
            size={60}
            color="white"
            onClick={() => navigate("/log-in")}
          />
        </Box>
      )}
      <Heading
        pt={{ base: "10vh", md: "0" }}
        fontSize={{ base: "2.5rem", lg: "3.5rem" }}
        textTransform="capitalize"
      >
        {h}
      </Heading>
      <Text w="50%" fontSize="1.2rem" pt="1rem" pb="3rem">
        {t}
      </Text>
      <Link to={to}>
        <Btn>{b.toUpperCase()}</Btn>
      </Link>
    </VStack>
  );
};

export default ColorSide;
