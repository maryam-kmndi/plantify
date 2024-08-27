import { FormControl, HStack, FormLabel, Input, Text } from "@chakra-ui/react";
import { RefObject } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props {
  label: string;
  value: string;
  refrence?: RefObject<HTMLInputElement>;
}

const Schema = z.object({ min: z.number().min(1), max: z.number().max(1000) });

type FormData = z.infer<typeof Schema>;

const FormBox = ({ label, value, refrence }: Props) => {
  const { register } = useForm<FormData>({ resolver: zodResolver(Schema) });

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
          htmlFor={label}
        >
          <Text color="gray.400" justifySelf="center" alignSelf="center">
            {label}
          </Text>
        </FormLabel>
        <Input
          id={label}
          // {...register(label)}
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
