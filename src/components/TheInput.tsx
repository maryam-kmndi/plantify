import { FormControl, FormLabel, Input } from "@chakra-ui/react";

interface Props {
  t: string;
  pr?: string;
  pl?: string;
}

const TheInput = ({ t, pr = "3rem", pl = "3rem" }: Props) => {
  return (
    <FormControl pr={pr} pl={pl} py=".5rem" isRequired>
      <FormLabel>{t}</FormLabel>
      <Input focusBorderColor="primaryColor" />
    </FormControl>
  );
};

export default TheInput;
