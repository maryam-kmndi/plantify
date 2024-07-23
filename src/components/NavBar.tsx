import { Box, HStack, Image, Link, Text, textDecoration } from "@chakra-ui/react";
import logo from "../assets/Logo.png";
const NavBar = () => {
  return (
    <>
      <Box bg="#79A141" h="132px">
        <Text paddingTop={5} paddingLeft="90px" color="#fff" fontSize="sm">
          Maryam's features online shopping
        </Text>
        <Box
          bg="#fff"
          w="1245px"
          h="144px"
          borderRadius="75"
          margin="20px auto 0"
          boxShadow="lg"
        >
          <HStack paddingY={3} paddingX={8} spacing="48px">
            <Image src={logo} boxSize="120px" objectFit="scale-down" />
            <Link>Home</Link>
            <Link>Plants</Link>
            <Link>Pots & Accessories</Link>
            <Link>Contact Us</Link>
          </HStack>
        </Box>
      </Box>
    </>
  );
};

export default NavBar;
