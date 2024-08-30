import { Circle } from "@chakra-ui/react";
import { ReactNode } from "react";
import { IconType } from "react-icons";
interface Props {
  children: ReactNode;
  top: string;
  handleClick?: (event: any) => void;
}
const HowerCircle = ({ children, top, handleClick }: Props) => {
  return (
    <Circle
      cursor="pointer"
      onClick={handleClick}
      bg="primaryColor"
      color="cartsColor"
      position="absolute"
      top={top}
      right={{ base: "-7%", md: "-6%", lg: "-8%" }}
      size={{ base: "8vmax", md: "5vmax", lg: "3vmax" }}
      fontSize={{ sm: "1.2rem", lg: "1rem" }}
      _hover={{
        transform: "scale(1.1)",
        transition: "transform .1s ease-in",
      }}
    >
      {children}
    </Circle>
  );
};
export default HowerCircle;
