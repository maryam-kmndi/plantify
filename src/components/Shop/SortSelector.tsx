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
import { FiChevronDown } from "react-icons/fi";
import { plantDataType, plantsList } from "../../data/plants";
interface Props {
  onSelectSortOrder: (arg: plantDataType[]) => void;
}
interface sortOrder {
  value: "price" | "care level" | "rate";
  label: string;
}
type sortFunc = (sortType: "price" | "care level" | "rate") => void;

const SortSelector = ({ onSelectSortOrder }: Props) => {
  const sortOrders: sortOrder[] = [
    { value: "care level", label: "Care Level" },
    { value: "price", label: "Price" },
    { value: "rate", label: "Rate" },
  ];
  let clonePlants = [...plantsList];

  const sortPlants: sortFunc = (sortType) => {
    if (sortType === "price") {
      const priceSort: plantDataType[] = clonePlants.sort((a, b) => {
        const priceA = parseFloat(a.price.replace("$", ""));
        const priceB = parseFloat(b.price.replace("$", ""));
        return priceA - priceB;
      });

      onSelectSortOrder(priceSort);
    } else if (sortType === "care level") {
      const sortCareLvlData = clonePlants.sort((a, b) => {
        return a.care_level - b.care_level;
      });

      onSelectSortOrder(sortCareLvlData);
    } else if (sortType === "rate") {
      const rateSort = clonePlants.sort((a, b) => {
        return a.rate - b.rate;
      });

      onSelectSortOrder(rateSort);
    }
    clonePlants = plantsList;
  };
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
          {sortOrders.map((sort) => (
            <ShopBtn
              key={sort.value}
              children={sort.value}
              onClick={() => {
                sortPlants(sort.value);
              }}
            />
          ))}
        </HStack>
      </Show>

      <Show breakpoint="(max-width: 767px)">
        <Menu>
          <MenuButton
            mx="1rem"
            as={Button}
            bg="cartsColor"
            color="textColor"
            borderRadius={75}
            rightIcon={<FiChevronDown />}
          >
            Order by
          </MenuButton>
          <MenuList>
            {sortOrders.map((order) => (
              <MenuItem
                onClick={() => sortPlants(order.value)}
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
