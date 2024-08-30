import { Box, HStack, Link, Image, useColorMode } from "@chakra-ui/react";
import { TbPhone } from "react-icons/tb";
import { RxTwitterLogo } from "react-icons/rx";
import { AiOutlineInstagram } from "react-icons/ai";
import whiteLogo from "../assets/لوگو سفید.png";
import blackLogo from "../assets/لوگو مشکی.png";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  const { colorMode } = useColorMode();

  return (
    <Box bg="primaryColor" paddingY=".6rem" alignContent="center" color="white">
      <HStack
        justifyContent="space-between"
        px="2.5vw"
        fontSize={{ lg: "2xl", md: "xl" }}
      >
        {colorMode === "light" ? (
          <Link href="/">
            <Image
              src={whiteLogo}
              w={{ base: "21%", sm: "13%", md: "12%", lg: "10%" }}
            />
          </Link>
        ) : (
          <Link href="/">
            <Image
              src={blackLogo}
              w={{ base: "21%", sm: "13%", md: "12%", lg: "10%" }}
            />
          </Link>
        )}
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
            <MdOutlineMail />
          </Link>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Footer;
