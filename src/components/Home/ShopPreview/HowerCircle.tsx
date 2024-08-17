import { Circle } from "@chakra-ui/react";
import { ReactNode } from "react";
import { IconType } from "react-icons";
interface Props {
  children: ReactNode;
  top: string;
}
const HowerCircle = ({ children, top }: Props) => {
  return (
    <Circle
      bg="primaryColor"
      color="cartsColor"
      position="absolute"
      top={top}
      right={{ base: "-7%", md: "-6%", lg: "-8%" }}
      size={{ base: "8vmax", md: "5vmax", lg: "3vmax" }}
      fontSize={{ sm: "1.2rem", lg: "1rem" }}
    >
      {children}
    </Circle>
  );
};
export default HowerCircle;
