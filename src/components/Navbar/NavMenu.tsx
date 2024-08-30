import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  IconButton,
  Link,
  List,
  ListItem,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavData } from ".";
import ColorModeSwitch from "./ColorModeSwitch";
import { useCheckLogin } from "../../store/useCheckLogin";

const NavMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const hover = { color: "primaryColor", textDecoration: "underline" };
  const navData: NavData[] = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "Plants", href: "/plants" },
    { id: 3, name: "Contact Us", href: "/contact-us" },
    { id: 4, name: "Favorite List", href: "/favorite-list" },
    { id: 5, name: "Shopping Cart", href: "/shopping-cart" },
  ];
  const { checkLogin, setCheckLogin } = useCheckLogin();

  return (
    <>
      <Button
        as={IconButton}
        icon={<RxHamburgerMenu />}
        onClick={onOpen}
        bg="transparent"
        color="white"
      />
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="white">
          <DrawerCloseButton paddingTop={4} />
          <DrawerHeader py="2rem" borderBottomWidth="1px"></DrawerHeader>
          <DrawerBody>
            <List>
              {navData.map((nav) => (
                <ListItem
                  key={nav.id}
                  paddingY="5vw"
                  textAlign="center"
                  borderBottom="0.2px solid #ddd"
                >
                  <Link
                    href={nav.href}
                    _hover={hover}
                    key={nav.href}
                    fontSize="xl"
                  >
                    {nav.name}
                  </Link>
                </ListItem>
              ))}
              {!checkLogin ? (
                <ListItem
                  paddingY="5vw"
                  textAlign="center"
                  borderBottom="0.2px solid #ddd"
                >
                  <Link href={"/log-in"} _hover={hover} fontSize="xl">
                    Log In
                  </Link>
                </ListItem>
              ) : (
                <ListItem
                  paddingY="5vw"
                  textAlign="center"
                  borderBottom="0.2px solid #ddd"
                >
                  <Link href={"/"} _hover={hover} fontSize="xl">
                    Log Out
                  </Link>
                </ListItem>
              )}
            </List>
          </DrawerBody>
          <DrawerFooter bg="primaryColor" h="5vw" justifyContent="center">
            <ColorModeSwitch />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavMenu;
