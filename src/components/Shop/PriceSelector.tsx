import { Text, VStack } from "@chakra-ui/react";
import { useRef } from "react";
import FormBox from "../FormBox";
import Btn from "../Btn";

const PriceSelector = () => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <VStack align="left" color="textColor" my="1.5rem" pl="1rem" w="90%">
      <Text>Price Range</Text>

      <FormBox label="Min" value="$ 10.00" />
      <FormBox label="Max" value="$ 900.00" />
      <Btn>Set Price Range</Btn>
    </VStack>
  );
};

export default PriceSelector;
