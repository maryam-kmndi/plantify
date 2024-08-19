import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from "@chakra-ui/react";
import StarRating from "../StarRating";
import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";

const RateSelector = () => {
  const [label, setLabel] = useState(true);
  return (
    <VStack align="left" color="textColor" my="1.5rem" pl="1rem">
      <Text>Rating</Text>
      <HStack spacing={3}>
        <StarRating />
        <Menu>
          <MenuButton
            fontSize=".8rem"
            color="gray"
            as={Button}
            rightIcon={<BsChevronDown />}
          >
            {label ? "Above" : "Below"}
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => setLabel(true)}>Above</MenuItem>
            <MenuItem onClick={() => setLabel(false)}>Below</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </VStack>
  );
};

export default RateSelector;
