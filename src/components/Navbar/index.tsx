import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogOverlay,
  Box,
  Button,
  HStack,
  Image,
  Show,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import colorLogo from "../../assets/لوگو رنگی.png";
import whiteLogo from "../../assets/لوگو سفید.png";
import blackLogo from "../../assets/لوگو مشکی.png";
import { LiaHeart } from "react-icons/lia";
import { SlBasket } from "react-icons/sl";
import ColorModeSwitch from "./ColorModeSwitch";
import NavMenu from "./NavMenu";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCheckLogin } from "../../store/useCheckLogin";
import { HiOutlineLogout } from "react-icons/hi";
import { IoIosLogIn } from "react-icons/io";
import { useRef } from "react";

export interface NavData {
  id: number;
  name: string;
  href: string;
}

const NavBar = () => {
  const { checkLogin, setCheckLogin } = useCheckLogin();

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

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<any>();

  const { colorMode } = useColorMode();
  const navigate = useNavigate();

  return (
    <>
      <Show breakpoint="(max-width: 767px)">
        <HStack justifyContent="space-between" bg="primaryColor" py=".2rem">
          {colorMode === "light" ? (
            <Image
              ml={4}
              src={whiteLogo}
              w={{ base: "21%", sm: "13%" }}
              onClick={() => navigate("/")}
              cursor="pointer"
            />
          ) : (
            <Image
              ml={4}
              src={blackLogo}
              w={{ base: "21%", sm: "13%" }}
              onClick={() => navigate("/")}
              cursor="pointer"
            />
          )}
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
            mx="auto "
            boxShadow="lg"
            mt={{ md: "3vh", lg: "3vh" }}
            py="1.7rem"
          >
            <HStack paddingY={3} paddingX={8} justifyContent={"space-between"}>
              <HStack px="1rem" spacing="3.5vmax">
                {colorMode === "light" ? (
                  <Image
                    src={colorLogo}
                    w={{ md: "15%", lg: "12%" }}
                    mr="1.5rem"
                    onClick={() => navigate("/")}
                    cursor="pointer"
                  />
                ) : (
                  <Image
                    src={whiteLogo}
                    w={{ md: "15%", lg: "12%" }}
                    mr="1.5rem"
                    onClick={() => navigate("/")}
                    cursor="pointer"
                  />
                )}

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
              {checkLogin ? (
                <HStack
                  spacing="1vmax"
                  fontSize={{ md: "18px", lg: "20px", xl: "24px" }}
                  paddingRight="2vw"
                  color="textColor"
                >
                  <Link to="/favorite-list">
                    <Text
                      _hover={{
                        color: "primaryColor",
                        transform: "scale(1.5)",
                      }}
                    >
                      <LiaHeart />
                    </Text>
                  </Link>

                  <Link to="/shopping-cart">
                    <Text
                      _hover={{
                        color: "primaryColor",
                        transform: "scale(1.5)",
                      }}
                    >
                      <SlBasket />
                    </Text>
                  </Link>

                  <Text
                    pl=".1rem"
                    cursor="pointer"
                    onClick={onOpen}
                    _hover={{
                      color: "primaryColor",
                      transform: "scale(1.5)",
                    }}
                  >
                    <HiOutlineLogout />
                  </Text>
                  <AlertDialog
                    isOpen={isOpen}
                    leastDestructiveRef={cancelRef}
                    onClose={onClose}
                  >
                    <AlertDialogOverlay>
                      <AlertDialogContent
                        pt="2rem"
                        pb="1rem"
                        borderRadius="30px"
                      >
                        <AlertDialogBody>
                          Are you sure you want to log out?
                        </AlertDialogBody>

                        <AlertDialogFooter>
                          <Button ref={cancelRef} onClick={onClose}>
                            Cancel
                          </Button>
                          <Button
                            colorScheme="red"
                            onClick={() => setCheckLogin(false)}
                            ml={3}
                          >
                            Log Out
                          </Button>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialogOverlay>
                  </AlertDialog>
                </HStack>
              ) : (
                <HStack
                  spacing="1vmax"
                  fontSize={{ md: "18px", lg: "20px", xl: "24px" }}
                  paddingRight="2vw"
                  color="textColor"
                >
                  <Link to="/favorite-list">
                    <Text
                      _hover={{
                        color: "primaryColor",
                        transform: "scale(1.5)",
                      }}
                    >
                      <LiaHeart />
                    </Text>
                  </Link>
                  <Link to="/shopping-cart">
                    <Text
                      _hover={{
                        color: "primaryColor",
                        transform: "scale(1.5)",
                      }}
                    >
                      <SlBasket />
                    </Text>
                  </Link>
                  <Link to="/log-in">
                    <Text
                      _hover={{
                        color: "primaryColor",
                        transform: "scale(1.5)",
                      }}
                    >
                      <IoIosLogIn />
                    </Text>
                  </Link>
                </HStack>
              )}
            </HStack>
          </Box>
        </Box>
      </Show>
    </>
  );
};

export default NavBar;
