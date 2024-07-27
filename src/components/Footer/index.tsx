import { Box, HStack, Link, Text } from "@chakra-ui/react";
import { TbPhone } from "react-icons/tb";
import { RxTwitterLogo } from "react-icons/rx";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <Box bg="primaryColor" paddingY=".6rem" alignContent="center" color="white">
      <HStack
        justifyContent="space-between"
        paddingX="3vw"
        fontSize={{ lg: "2xl", md: "xl" }}
      >
        <Text>Plantify</Text>
        <HStack spacing={3}>
          <Link href="contact-us" _hover={{ transform: "scale(1.5)" }}>
            <TbPhone />
          </Link>
          <Link href="contact-us" _hover={{ transform: "scale(1.5)" }}>
            <RxTwitterLogo />
          </Link>
          <Link href="contact-us" _hover={{ transform: "scale(1.5)" }}>
            <AiOutlineInstagram />
          </Link>
          <Link href="contact-us" _hover={{ transform: "scale(1.5)" }}>
            <FaWhatsapp />
          </Link>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Footer;
