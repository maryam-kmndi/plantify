import { Heading, Divider } from "@chakra-ui/react";
import Discount from "./Discount";
import LevelSelector from "./LevelSelector";
import PriceSelector from "./PriceSelector";
import RateSelector from "./RateSelector";

const Filter = () => {
  return (
    <>
      <Heading fontSize="1.5rem" color="textColor" my="1rem" pl="1rem">
        Filter
      </Heading>
      <Divider />
      <LevelSelector />
      <Divider />
      <PriceSelector />
      <Divider />
      <RateSelector />
      <Divider />
      <Discount />
    </>
  );
};

export default Filter;
