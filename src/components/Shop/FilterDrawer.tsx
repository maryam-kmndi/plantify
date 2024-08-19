import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { useRef } from "react";
import Filter from "./Filter";
import { FiChevronRight } from "react-icons/fi";
const FilterDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<any>();
  return (
    <>
      <Button
        ref={btnRef}
        bg="cartsColor"
        color="textColor"
        borderRadius={75}
        onClick={onOpen}
        rightIcon={<FiChevronRight />}
      >
        Filters
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Filter />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default FilterDrawer;
