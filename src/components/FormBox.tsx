import { FormControl, HStack, FormLabel, Input, Text } from "@chakra-ui/react";
import { RefObject } from "react";

interface Props {
  label: string;
  value: string;
  refrence?: RefObject<HTMLInputElement>;
}

const FormBox = ({ label, value, refrence }: Props) => {
  return (
    <FormControl>
      <HStack spacing={{ xl: "5", lg: "3", base: "1.5" }}>
        <FormLabel
          display="grid"
          w="5rem"
          h="3rem"
          bg="cartsColor"
          borderRadius={5}
          cursor="pointer"
          m="0"
        >
          <Text color="gray.400" justifySelf="center" alignSelf="center">
            {label}
          </Text>
        </FormLabel>
        <Input
          w="6rem"
          h="3rem"
          ref={refrence}
          focusBorderColor="#79A141"
          placeholder={value}
          _placeholder={{ opacity: 0.4, color: "inherit" }}
          _focus={{ bg: "cartsColor" }}
        />
      </HStack>
    </FormControl>
  );
};

export default FormBox;
