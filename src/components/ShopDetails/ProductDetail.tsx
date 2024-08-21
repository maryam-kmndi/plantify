import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { plantDataType } from "../../data/plants";
import CollapsibleBox from "../CollapsibleBox";
import { LuSun } from "react-icons/lu";
import { GiWateringCan } from "react-icons/gi";
import { FaTemperatureHalf } from "react-icons/fa6";
import { BsDropletHalf } from "react-icons/bs";
import { LuGlasses } from "react-icons/lu";
import { IoIosArrowRoundForward } from "react-icons/io";

interface Props {
  plant: plantDataType;
}

const ProductDetail = ({ plant }: Props) => {
  const details = [
    { icon: <LuSun />, text: plant.sunlight },
    { icon: <GiWateringCan />, text: plant.watering },
    { icon: <FaTemperatureHalf />, text: plant.temperature },
    { icon: <BsDropletHalf />, text: plant.humidity },
    { icon: <LuGlasses />, text: plant.note },
  ];

  return (
    <VStack color="textColor" align="left" pt="1rem" spacing={2}>
      <Heading fontSize="1.5rem">Product details</Heading>
      <Text textIndent="1rem">{plant?.description}</Text>
      <CollapsibleBox label="Plant Care">
        {details.map((item) => (
          <HStack key={item.text} pt="1rem" align="start">
            <Box fontSize="1.2rem" boxSize={5}>
              {item.icon}
            </Box>
            <Text fontSize="sm" pl=".5rem">
              {item.text}
            </Text>
          </HStack>
        ))}
      </CollapsibleBox>
      <CollapsibleBox label="Plant Sad Sign">
        {plant.sad_sign.map((i, index) => (
          <HStack key={index} pt=".5rem" align="start">
            <Box fontSize="1.5rem">
              <IoIosArrowRoundForward />
            </Box>
            <Text fontSize="sm" pl=".5rem">
              {plant.sad_sign}
            </Text>
          </HStack>
        ))}
      </CollapsibleBox>
    </VStack>
  );
};

export default ProductDetail;
