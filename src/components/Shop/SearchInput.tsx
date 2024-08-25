import {
  Container,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { plantDataType, plantsList } from "../../data/plants";

interface Props {
  onSearch: (searchText: plantDataType[] | undefined) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const [value, setValue] = useState("");

  const search = (event: string) => {
    setValue(event);
    if (event !== "") {
      const searchResult = plantsList.filter((item) =>
        item.name.startsWith(event)
      );
      onSearch(searchResult);
    } else {
      onSearch(undefined);
    }
  };

  const capitalizing = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <Container my="1.5rem" maxW="100%">
      <InputGroup>
        <InputLeftElement pt=".5rem" pl=".5rem" pointerEvents="none">
          <BsSearch color="gray" size="1.5rem" />
        </InputLeftElement>
        <Input
          focusBorderColor="#79A141"
          size="lg"
          fontSize={{ base: "sm", md: "md" }}
          borderRadius={30}
          placeholder="Search plants..."
          variant="filled"
          bgColor="cartsColor"
          color="gray"
          onChange={(event) => search(capitalizing(event.target.value))}
        />
      </InputGroup>
      {value && (
        <Text
          fontSize={{ base: "xs", md: "sm" }}
          py=".5rem"
          pl="1.5rem"
          color="gray.400"
        >
          Search result for {value}
        </Text>
      )}
    </Container>
  );
};

export default SearchInput;
