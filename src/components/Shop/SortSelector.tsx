import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Show,
  Text,
} from "@chakra-ui/react";
import ShopBtn from "../Home/ShopPreview/ShopBtn";
import { FiChevronDown } from "react-icons/fi";
import { plantDataType, plantsList } from "../../data/plants";
import { useState } from "react";
import { useActiveFilters } from "../../store/useActiveFilter";
import { useSearchPlants } from "../../store/useSearchPlants";
import { useSortPlants } from "../../store/useSortPlants";

interface sortOrder {
  value: "price" | "care level" | "rate";
  label: string;
}
type sortFunc = (sortType: "price" | "care level" | "rate") => void;

const SortSelector = () => {

  const { activeFilters } = useActiveFilters()
  const { renderSearchData } = useSearchPlants()
  const { setSortData } = useSortPlants()
  const [activeSort, setActiveSort] = useState<"price" | "care level" | "rate" | undefined>()
  const clonePlants: plantDataType[] = renderSearchData ?? plantsList

  const sortOrders: sortOrder[] = [
    { value: "care level", label: "Care Level" },
    { value: "price", label: "Price" },
    { value: "rate", label: "Rate" },
  ];

  const sortPlants: sortFunc = (sortType) => {
    setActiveSort(sortType)
    let result: plantDataType[] = []
    if (sortType === "price") {
      result = clonePlants.sort((a, b) => {
        const priceA = parseFloat(a.price.replace("$", ""));
        const priceB = parseFloat(b.price.replace("$", ""));
        return priceA - priceB;
      });
    } else if (sortType === "care level") {
      result = clonePlants.sort((a, b) => {
        return a.care_level - b.care_level;
      });
    } else if (sortType === "rate") {
      result = clonePlants.sort((a, b) => {
        return a.rate - b.rate;
      });

    }
    setSortData(result)
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
              active={sort.value === activeSort}
              key={sort.value}
              children={sort.value}
              disable={activeFilters.length >= 1}
              onClick={() => {
                sortPlants(sort.value);
              }}

            />
          ))}
        </HStack>
      </Show>

      <Show breakpoint="(max-width: 767px)">
        <Menu closeOnSelect={false}>
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
            <MenuOptionGroup type="radio">
              {sortOrders.map((order) => (
                <MenuItemOption
                  onClick={() => sortPlants(order.value)}
                  key={order.value}
                  value={order.value}
                  isDisabled={activeFilters.includes(order.value)}
                >
                  {order.label}
                </MenuItemOption>
              ))}
            </MenuOptionGroup>
          </MenuList>
        </Menu>
      </Show>
    </>
  );
};

export default SortSelector;
