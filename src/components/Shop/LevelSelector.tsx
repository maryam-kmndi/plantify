import { Text, VStack } from "@chakra-ui/react";
import TheCheckBox from "../TheCheckBox";
import { useState } from "react";

const LevelSelector = () => {
  const [value, setValue] = useState<number[]>([]);

  return (
    <VStack align="left" spacing={4} color="textColor" my="1rem" pl="1rem">
      <Text>Care-Level</Text>
      <TheCheckBox onSelect={() => setValue([...value, 1])}>Easy</TheCheckBox>
      <TheCheckBox onSelect={() => setValue([...value, 2])}>Medium</TheCheckBox>
      <TheCheckBox onSelect={() => setValue([...value, 3])}>Hard</TheCheckBox>
    </VStack>
  );
};

export default LevelSelector;
