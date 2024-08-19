import { Button, Container, Text, VStack } from "@chakra-ui/react";
import FormBox from "../FormBox";
import Btn from "../Btn";

const PriceSelector = () => {
  return (
    <VStack
      align="left"
      color="textColor"
      my="1.5rem"
      pl="1rem"
      spacing="1.2rem"
    >
      <Text>Price Range</Text>

      <FormBox label="Min" value="$ 10.00" />
      <FormBox label="Max" value="$ 900.00" />
      <Button
        bg="primaryColor"
        color="white"
        borderRadius={75}
        w="90%"
        // fontSize={{ xl: ".8rem", lg: ".9rem"}}
        fontWeight={200}
      >
        Set Price Range
      </Button>
    </VStack>
  );
};

export default PriceSelector;
