import { Button, SystemStyleObject } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: string | ReactNode;
  bgColor?: "primaryColor" | "cartsColor";
  color?: string;
  onClick?: () => void;
  hover?: SystemStyleObject | undefined;
  borderColor?: string;
}

const Btn = ({
  onClick,
  children,
  borderColor,
  bgColor = "primaryColor",
  color = "white",
}: Props) => {
  return (
    <Button
      _hover={{
        bg: "cartsColor",
        color: "primaryColor",
        fontWeight: "bold",
        borderColor: "primaryColor",
      }}
      borderRadius={75}
      shadow="lg"
      paddingX={{ xl: "2.6rem", lg: "2.2rem", md: "1.5rem", base: ".8rem" }}
      paddingY={{ xl: "1.9rem", lg: "1.7rem", md: "1.4rem", base: ".5rem" }}
      backgroundColor={bgColor}
      color={color}
      borderColor={borderColor}
      borderWidth=".1rem"
      onClick={onClick}
      fontSize={{ xl: "1.2rem", lg: "1rem", sm: ".9rem", base: ".8rem" }}
      fontWeight={200}
    >
      {children}
    </Button>
  );
};

export default Btn;
