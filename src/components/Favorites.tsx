import { Box, Divider, Heading, HStack } from "@chakra-ui/react";
import { RiPlantLine } from "react-icons/ri";
import Btn from "./Btn";
import { Link } from "react-router-dom";

const Favorites = () => {
  return (
    <Box
      ml=".5rem"
      mr={{ base: ".5rem", md: "0" }}
      bg="#F5F3F4"
      borderRadius="36px"
      h="100vh"
      color="textColor"
    >
      <HStack px="1rem" py="1.5rem" justifyContent="space-between">
        <HStack>
          <RiPlantLine size="4rem" />
          <Heading fontSize="1.5rem">Favorite List</Heading>
        </HStack>
        <Link to="/plants">
          <Btn>Go Back Shop</Btn>
        </Link>
      </HStack>
      <Divider />
    </Box>
  );
};

export default Favorites;
