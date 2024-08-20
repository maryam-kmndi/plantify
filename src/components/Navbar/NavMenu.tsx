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

const NavMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const hover = { color: "primaryColor", textDecoration: "underline" };
  const navData: NavData[] = [
    { id: 1, name: "Home", href: "/home" },
    { id: 2, name: "Plants", href: "/plants" },
    { id: 3, name: "Pots & Accessories", href: "/pots-accessories" },
    { id: 4, name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <>
      <Button
        as={IconButton}
        icon={<RxHamburgerMenu />}
        onClick={onOpen}
        bg="transparent"
        color="white"
      />
      <Drawer size="full" placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton paddingTop={4} />
          <DrawerHeader borderBottomWidth="1px">Plantify</DrawerHeader>
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
