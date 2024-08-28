import { filter, Text, VStack } from "@chakra-ui/react";
import TheCheckBox from "../TheCheckBox";
import { useActiveFilters } from "../../store/useActiveFilter";

const LevelSelector = ({ filters, setFilters }: { filters: number[], setFilters: (param: number[]) => void }) => {
  const { setActiveFilters, removeActiveFilters } = useActiveFilters()
  const careLvlVal = (param1: number) => {
    const check = filters.indexOf(param1)
    //remove
    if (check > -1) {
      filters.splice(check, 1)
      filters.length === 0 && removeActiveFilters("care level")
      setFilters([...filters])
    }
    //set
    else {
      setActiveFilters("care level")
      setFilters([...filters, param1])
    }
  }

  return (
    <VStack align="left" spacing={4} color="textColor" my="1rem" pl="1rem">
      <Text>Care-Level</Text>
      <TheCheckBox onSelect={() => careLvlVal(1)}>Easy</TheCheckBox>
      <TheCheckBox onSelect={() => careLvlVal(2)}>Medium</TheCheckBox>
      <TheCheckBox onSelect={() => careLvlVal(3)}>Hard</TheCheckBox>
    </VStack>
  );
};

export default LevelSelector;
