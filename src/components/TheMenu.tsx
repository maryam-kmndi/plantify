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
        as={Button}
        _hover={{ borderColor: "primaryColor", bg: "white" }}
        _focus={{ borderColor: "primaryColor", shadow: "none" }}
        _expanded={{ bg: "white" }}
        rightIcon={<FiChevronDown />}
      >
        <Text opacity=".6" _dark={{ opacity: "0.24" }}>
          {label}
        </Text>
      </MenuButton>
      <MenuList color="gray">
        {items.map((i) => (
          <MenuItem key={i} onClick={() => setLabel(i)}>
            {i}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default TheMenu;
