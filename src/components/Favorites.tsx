import { Box, Divider, Heading, HStack } from "@chakra-ui/react";
import { RiPlantLine } from "react-icons/ri";

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
      <HStack px="2rem" py="1.5rem">
        <RiPlantLine size="4rem" />
        <Heading fontSize="1.8rem">Favorite List</Heading>
      </HStack>
      <Divider />
    </Box>
  );
};

export default Favorites;
