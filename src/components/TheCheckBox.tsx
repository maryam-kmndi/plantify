import { Checkbox } from "@chakra-ui/react";

interface Props {
  children: string;
  onSelect?: () => void;
}

const TheCheckBox = ({ children, onSelect }: Props) => {
  return (
    <Checkbox
      onChange={onSelect}
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
