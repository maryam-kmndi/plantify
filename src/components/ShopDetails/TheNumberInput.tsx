import { Button, HStack, Input, useNumberInput } from "@chakra-ui/react";
import Btn from "../Btn";

const TheNumberInput = () => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 2,
      min: 1,
      max: 6,
      //   precision: 2,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();
  return (
    <HStack
      borderColor="primaryColor"
      borderWidth="2px"
      borderRadius={75}
      maxW="7rem"
      h="2.3rem"
      color="primaryColor"
    >
      <Button
        {...dec}
        bg="none"
        color="primaryColor"
        fontSize="1.5rem"
        _hover={{ bg: "none" }}
      >
        -
      </Button>
      <Input
        {...input}
        border="none"
        fontSize={{ base: "1rem", md: "1.5rem" }}
        variant="unstyled"
      />
      <Button
        {...inc}
        bg="none"
        color="primaryColor"
        fontSize="1.5rem"
        _hover={{ bg: "none" }}
      >
        +
      </Button>
    </HStack>
  );
};

export default TheNumberInput;
