import { FaStar } from "react-icons/fa";
import { HStack, Box } from "@chakra-ui/react";

interface Props {
  rate: number;
}

const StarRate = ({ rate }: Props) => {
  return (
    <HStack spacing="2px" py=".5rem" justify="center">
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <Box color={ratingValue <= rate ? "#ffc107" : "#e4e5e9"}>
            <FaStar cursor={"pointer"} size={12} />
          </Box>
        );
      })}
    </HStack>
  );
};
export default StarRate;
