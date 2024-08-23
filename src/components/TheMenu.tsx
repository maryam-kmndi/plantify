import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

interface Props {
  items: string[];
}

const TheMenu = ({ items }: Props) => {
  const [label, setLabel] = useState("Province");
  return (
    <Menu>
      <MenuButton
        w="100%"
        borderWidth="1px"
        fontWeight="200"
        bg="white"
        color="gray.500"
        as={Button}
        _hover={{ borderColor: "primaryColor", bg: "white" }}
        _focus={{ borderColor: "primaryColor", shadow: "none" }}
        _expanded={{ bg: "white" }}
        rightIcon={<FiChevronDown />}
      >
        {label}
      </MenuButton>
      <MenuList>
        {items.map((i) => (
          <MenuItem onClick={() => setLabel(i)}>{i}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default TheMenu;
