import { Button, HStack, Text } from "@chakra-ui/react";
import { useCartItems } from "../../store/useCartItem";

interface Props {
  count: number;
  id: number;
}

const TheNumberInput = ({ count, id }: Props) => {
  const { setIncrement, setDecrement } = useCartItems();

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
        bg="none"
        color="primaryColor"
        fontSize="1.5rem"
        _hover={{ bg: "none" }}
        onClick={() => setDecrement(id)}
      >
        -
      </Button>
      <Text
        border="none"
        fontSize={{ base: "1rem", md: "1.5rem" }}
        variant="unstyled"
      >
        {count}
      </Text>
      <Button
        bg="none"
        color="primaryColor"
        fontSize="1.5rem"
        _hover={{ bg: "none" }}
        onClick={() => setIncrement(id)}
      >
        +
      </Button>
    </HStack>
  );
};

export default TheNumberInput;
