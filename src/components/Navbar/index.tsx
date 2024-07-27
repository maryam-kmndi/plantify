import { Box, HStack, Image, Link, Show, Text } from "@chakra-ui/react";
import logo from "../../assets/Logo.png";
import { LiaHeart } from "react-icons/lia";
import { IoPersonOutline } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import ColorModeSwitch from "./ColorModeSwitch";
import NavMenu from "./NavMenu";

export interface NavData {
  name: string;
  href: string;
}

const NavBar = () => {
  const hover = {
    color: "primaryColor",
    textDecoration: "underline",
    fontWeight: "Bold",
  };
  const navData: NavData[] = [
    { name: "Home", href: "/home" },
    { name: "Plants", href: "/plants" },
    { name: "Pots & Accessories", href: "/pots-accessories" },
    { name: "Contact Us", href: "/contact-us" },
  ];
  return (
    <>
      <Show breakpoint="(max-width: 767px)">
        <HStack justifyContent="space-between" bg="primaryColor">
          <Text paddingLeft={4} color="white">
            Plantify
          </Text>
          <NavMenu />
        </HStack>
      </Show>
      <Show above="md">
        <Box bg="primaryColor" h="132px">
          <HStack
            justifyContent="space-between"
            paddingLeft={{ xl: "10vw", lg: "12vw", md: "14vw" }}
          >
            <Text
              paddingTop={{ xl: "1vw", lg: "3vw", md: "4vw" }}
              color="#fff"
              fontSize={{ md: "xs", xl: "sm" }}
            >
              Maryam's features online shopping
            </Text>
            <ColorModeSwitch />
          </HStack>
          <Box
            bg="white"
            w="90%"
            borderRadius="75"
            margin="0 auto "
            boxShadow="lg"
            marginTop={{ xl: "0", lg: "1vw", md: "1vw" }}
            py="1.7rem"
          >
            <HStack paddingY={3} paddingX={8} justifyContent={"space-between"}>
              <HStack spacing="3.5vmax">
                <Image
                  src={logo}
                  w="18%"
                  aspectRatio="16/5"
                  objectFit="contain"
                />
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
                fontSize={{ md: "18px", lg: "20px", xl: "24px" }}
                paddingRight="2vw"
              >
                <Link
                  _hover={{ color: "primaryColor", transform: "scale(1.5)" }}
                >
                  <LiaHeart />
                </Link>
                <Link
                  _hover={{
                    color: "primaryColor",
                    transform: "scale(1.5)",
                  }}
                >
                  <IoPersonOutline />
                </Link>
                <Link
                  _hover={{ color: "primaryColor", transform: "scale(1.5)" }}
                >
                  <SlBasket />
                </Link>
              </HStack>
            </HStack>
          </Box>
        </Box>
      </Show>
    </>
  );
};

export default NavBar;
