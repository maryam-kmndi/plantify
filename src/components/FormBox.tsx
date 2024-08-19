import { FormControl, HStack, FormLabel, Input, Text } from "@chakra-ui/react";

interface Props {
  label: string;
  value: string;
}

const FormBox = ({ label, value }: Props) => {
  return (
    <FormControl>
      <HStack spacing={{ xl: "5", lg: "3",md:"1.5" }}>
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
          focusBorderColor="primaryColor"
          placeholder={value}
          _placeholder={{ opacity: 0.4, color: "inherit" }}
        />
      </HStack>
    </FormControl>
  );
};

export default FormBox;
