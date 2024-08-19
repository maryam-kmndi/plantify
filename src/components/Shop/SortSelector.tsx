import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  Text,
} from "@chakra-ui/react";
import ShopBtn from "../Home/ShopPreview/ShopBtn";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder?: (sortOrder: string) => void;
  sortOrder?: string;
}
const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Care Level" },
    { value: "price", label: "Price" },
    { value: "rate", label: "Rate" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );
  return (
    <>
      <Show above="md">
        <HStack>
          <Text
            color="textColor"
            fontSize={{ xl: "2rem", lg: "1.7rem", md: "1.5rem" }}
            mx="1rem"
          >
            Sort
          </Text>
          <ShopBtn>Care Level</ShopBtn>
          <ShopBtn>Price</ShopBtn>
          <ShopBtn>Rate</ShopBtn>
        </HStack>
      </Show>

      <Show breakpoint="(max-width: 767px)">
        <Menu>
          <MenuButton
            ml="1rem"
            as={Button}
            bg="cartsColor"
            color="textColor"
            borderRadius={75}
            rightIcon={<BsChevronDown />}
          >
            Order by:
          </MenuButton>
          <MenuList>
            {sortOrders.map((order) => (
              <MenuItem
                // onClick={() => onSelectSortOrder(order.value)}
                key={order.value}
                value={order.value}
              >
                {order.label}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Show>
    </>
  );
};

export default SortSelector;
