import { FormControl, FormLabel, Input } from "@chakra-ui/react";

interface Props {
  t: string;
  pr?: string;
  pl?: string;
  type?: string;
}

const TheInput = ({ t, pr = "3rem", pl = "3rem", type }: Props) => {
  return (
    <FormControl pr={pr} pl={pl} py=".5rem" isRequired>
      <FormLabel>{t}</FormLabel>
      <Input type={type} focusBorderColor="#79A141" required/>
    </FormControl>
  );
};

export default TheInput;
