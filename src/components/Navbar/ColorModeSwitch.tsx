import {
  FormControl,
  FormLabel,
  HStack,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack paddingRight="10vmax" marginBottom='0'>
      <FormControl display="flex">
        <FormLabel
        htmlFor="colorMode"
        fontSize="sm" color="white">
          Theme Mode
        </FormLabel>
        <Switch
        id="colorMode"
          colorScheme="gray"
          isChecked={colorMode === "light"}
          onChange={toggleColorMode}
        />
      </FormControl>
    </HStack>
  );
};

export default ColorModeSwitch;
