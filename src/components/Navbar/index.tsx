import { Box, HStack, Image, Link, Text } from "@chakra-ui/react";
import logo from "../../assets/Logo.png";
import { LiaHeart } from "react-icons/lia";
import { IoPersonOutline } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";

interface navData {
  name: string;
  href: string;
}

const NavBar = () => {
  const hover = { color: "primaryColor", textDecoration: "underline" };
  const navData: navData[] = [
    { name: "Home", href: "/home" },
    { name: "Plants", href: "/plants" },
    { name: "Pots & Accessories", href: "/pots-accessories" },
    { name: "Contact Us", href: "/contact-us" },
  ];
  return (
    <>
      <Box bg="primaryColor" h="132px">
        <Text padding="2vmax 0 0.5vmax 10vmax" color="#fff" fontSize="sm">
          Maryam's features online shopping
        </Text>
        <Box
          bg="white"
          w="90%"
          h="144px"
          borderRadius="75"
          margin="0 auto "
          boxShadow="lg"
        >
          <HStack paddingY={3} paddingX={8} justifyContent={"space-between"}>
            <HStack spacing="3.5vmax">
              <Image src={logo} boxSize="120px" objectFit="scale-down" />
              {navData.map((nav) => (
                <Link
                  href={nav.href}
                  _hover={hover}
                  key={nav.href}
                  fontSize={{ md: "sm", lg: "md", xl: "xl" }}
                >
                  {nav.name}
                </Link>
              ))}
            </HStack>
            <HStack
              spacing="1vmax"
              fontSize={{ md: "18px",lg:'20px', xl: "24px" }}
              paddingRight="1vw"
            >
              <LiaHeart />
              <IoPersonOutline />
              <SlBasket />
            </HStack>
          </HStack>
        </Box>
      </Box>
    </>
  );
};

export default NavBar;
