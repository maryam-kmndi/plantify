import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";
import Btn from "../Btn";
import { Link, useNavigate } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import signIn from "../../assets/SignIn.svg";
import signUp from "../../assets/signUp.svg";
interface Props {
  up?: boolean;
}

const ColorSide = ({ up }: Props) => {
  const navigate = useNavigate();

  return (
    <VStack
      bg="primaryColor"
      color="cartsColor"
      h={{ md: "100vh" }}
      justifyContent="center"
      py="3rem"
      pos="relative"
    >
      {up && (
        <Box pos="absolute" top={{ base: "2vh", md: "4vh" }} right="1vw">
          <FiChevronLeft
            size={60}
            color="white"
            onClick={() => navigate("/log-in")}
            transform="rotate(180)"
          />
        </Box>
      )}
      {!up && (
        <Box pos="absolute" top={{ base: "2vh", md: "4vh" }} left="1vw">
          <FiChevronLeft
            size={60}
            color="white"
            onClick={() => navigate("/log-in")}
          />
        </Box>
      )}
      {!up && <Image src={signIn} />}
      {up && <Image src={signUp} />}
    </VStack>
  );
};

export default ColorSide;
