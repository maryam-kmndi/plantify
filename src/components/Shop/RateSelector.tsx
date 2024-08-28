import {
  Box,
  HStack,
  Radio,
  Text,
  VStack,
} from "@chakra-ui/react";

import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { useActiveFilters } from "../../store/useActiveFilter";

const RateSelector = ({ rateFilterFunc }: { rateFilterFunc: (arg: number) => void }) => {
  const { setActiveFilters, removeActiveFilters } = useActiveFilters()

  const [hover, setHover] = useState<any>();
  const [rating, setRating] = useState(0);
  const handleRating = (arg: number) => {
    if (arg > 1) {
      setActiveFilters("rate")
    } else {
      removeActiveFilters("rate")
    }
    setRating(arg)
    rateFilterFunc(arg)
  }
  return (
    <VStack align="left" color="textColor" my="1.5rem" pl="1rem">
      <Text>Rating</Text>
      <HStack spacing="2px" pt=".5rem">
        {[...Array(5)].map((star, index) => {
          const ratingValue = index + 1;
          return (
            <Box
              as="label"
              key={index}
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            >
              <Radio
                name="rating"
                onChange={() => handleRating(ratingValue)}
                value={String(ratingValue)}
                display="none"
              ></Radio>
              <FaStar
                cursor={"pointer"}
                size={22}
              // transition="color 200ms"
              />
            </Box>
          );
        })}
      </HStack>
    </VStack>
  );
};

export default RateSelector;
