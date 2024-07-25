import { Box, HStack, Link, Text } from "@chakra-ui/react";
import { TbPhone } from "react-icons/tb";
import { RxTwitterLogo } from "react-icons/rx";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <Box bg="primaryColor" h="100%" alignContent="center" color="white">
      <HStack
        justifyContent="space-between"
        paddingX="3vw"
        fontSize={{ lg: "2xl", md: "xl" }}
      >
        <Text>Plantify</Text>
        <HStack as={Link} href="contact-us" spacing={3} _hover={{cursor:''}}>
          <TbPhone />
          <RxTwitterLogo />
          <AiOutlineInstagram />
          <FaWhatsapp />
        </HStack>
      </HStack>
    </Box>
  );
};

export default Footer;
