import { Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch?: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const [value, setValue] = useState("");
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current && onSearch) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement pt=".5rem" pl=".2rem" pointerEvents="none">
          <BsSearch color="gray" size="1.5rem" />
        </InputLeftElement>
        <Input
          focusBorderColor="primaryColor"
          size="lg"
          ref={ref}
          borderRadius={30}
          placeholder="Search plants..."
          variant="filled"
          bgColor="cartsColor"
          color="gray"
          onChange={(event) => setValue(event.target.value)}
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
    </form>
  );
};

export default SearchInput;
