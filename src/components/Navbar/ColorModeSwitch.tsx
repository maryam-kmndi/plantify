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
    <HStack
      paddingRight={{ md: "12vmax" }}
      paddingTop={{ xl: "2vw", lg: "3.3vw", md: "4.5vw", sm: "2vw" }}
      marginBottom={{ xl: "0.7vw", md: "0", sm: "0" }}
    >
      <FormControl display="flex">
        <FormLabel
          htmlFor="colorMode"
          fontSize={{ md: "xs", xl: "sm" }}
          color="white"
          marginBottom={0}
        >
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
