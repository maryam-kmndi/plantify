import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Radio, HStack, Box } from "@chakra-ui/react";

const StarRating = () => {
  const [hover, setHover] = useState<any>();
  const [rating, setRating] = useState(0);

  return (
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
              onChange={() => setRating(ratingValue)}
              value={String(ratingValue)}
              display="none"
            ></Radio>
            <FaStar
              cursor={"pointer"}
              size={24}
              // transition="color 200ms"
            />
          </Box>
        );
      })}
    </HStack>
  );
};
export default StarRating;
