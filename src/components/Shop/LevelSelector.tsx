import { Text, VStack } from "@chakra-ui/react";
import TheCheckBox from "../TheCheckBox";

const LevelSelector = () => {
  return (
    <VStack align="left" spacing={4} color="textColor" my="1rem" pl="1rem">
      <Text>Care-Level</Text>
      <TheCheckBox>Easy</TheCheckBox>
      <TheCheckBox>Medium</TheCheckBox>
      <TheCheckBox>Hard</TheCheckBox>
    </VStack>
  );
};

export default LevelSelector;
