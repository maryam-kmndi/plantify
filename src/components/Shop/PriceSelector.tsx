import { Button, Text, VStack } from "@chakra-ui/react";
import FormBox from "../FormBox";
import { FormEvent, useRef } from "react";

const PriceSelector = () => {
  const minRef = useRef<HTMLInputElement>(null);
  const maxRef = useRef<HTMLInputElement>(null);

  const priceRange = { min: "", max: "" };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (minRef.current !== null)
      priceRange.min = parseInt(minRef.current.value).toFixed(2) + "$";
    if (maxRef.current !== null)
      priceRange.max = parseInt(maxRef.current.value).toFixed(2) + "$";
    console.log(priceRange);
  };

  return (
    <form onSubmit={handleSubmit}>
      <VStack
        align="left"
        color="textColor"
        my="1.5rem"
        pl="1rem"
        spacing="1.2rem"
      >
        <Text>Price Range</Text>

        <FormBox refrence={minRef} label="Min" value="$ 10.00" />
        <FormBox refrence={maxRef} label="Max" value="$ 900.00" />
        <Button
          type="submit"
          bg="primaryColor"
          color="white"
          borderRadius={75}
          w="90%"
          fontWeight={200}
        >
          Set Price Range
        </Button>
      </VStack>
    </form>
  );
};

export default PriceSelector;
