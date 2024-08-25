import { Box, HStack, Image, Show, Text } from "@chakra-ui/react";
import logo from "../../assets/Logo.png";
import { LiaHeart } from "react-icons/lia";
import { IoPersonOutline } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import ColorModeSwitch from "./ColorModeSwitch";
import NavMenu from "./NavMenu";
import { Link, NavLink } from "react-router-dom";

export interface NavData {
  id: number;
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
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "Plants", href: "/plants" },
    { id: 3, name: "Contact Us", href: "/contact-us" },
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
          <HStack justifyContent="end">
            <ColorModeSwitch />
          </HStack>
          <Box
            bg="white"
            _dark={{ bg: "cartsColor" }}
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
                  <NavLink to={nav.href} key={nav.id}>
                    <Text
                      key={nav.id}
                      _hover={hover}
                      fontSize={{ md: "sm", lg: "md", xl: "xl" }}
                    >
                      {nav.name}
                    </Text>
                  </NavLink>
                ))}
              </HStack>
              <HStack
                spacing="1vmax"
                fontSize={{ md: "18px", lg: "20px", xl: "24px" }}
                paddingRight="2vw"
              >
                <Link to="/favorite-list">
                  <Text
                    _hover={{ color: "primaryColor", transform: "scale(1.5)" }}
                  >
                    <LiaHeart />
                  </Text>
                </Link>
                <Link to="/sign-in">
                  <Text
                    _hover={{
                      color: "primaryColor",
                      transform: "scale(1.5)",
                    }}
                  >
                    <IoPersonOutline />
                  </Text>
                </Link>
                <Link to="/shopping-cart">
                  <Text
                    _hover={{ color: "primaryColor", transform: "scale(1.5)" }}
                  >
                    <SlBasket />
                  </Text>
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
