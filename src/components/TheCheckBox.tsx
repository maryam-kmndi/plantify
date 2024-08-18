import { Checkbox } from "@chakra-ui/react";

interface Props {
  children: string;
}

const TheCheckBox = ({ children }: Props) => {
  return (
    <Checkbox
      spacing="1rem"
      iconColor="primaryColor"
      size="md"
      colorScheme="white"
    >
      {children}
    </Checkbox>
  );
};

export default TheCheckBox;
