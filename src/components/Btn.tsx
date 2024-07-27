import { Button } from "@chakra-ui/react";

interface Props {
  children: string;
  bgColor?: "primaryColor" | "cartsColor";
  onClick?: () => void;
}

const Btn = ({ onClick, children, bgColor = "primaryColor" }: Props) => {
  return (
    <Button
      borderRadius={75}
      paddingX={{ xl: "2.6rem", lg: "2.2rem", md: "1.5rem", base: ".8rem" }}
      paddingY={{ xl: "1.9rem", lg: "1.7rem", md: "1.4rem", base: ".5rem" }}
      bgColor={bgColor}
      shadow="lg"
      color="white"
      onClick={onClick}
      fontSize={{ xl: "1.2rem", lg: "1rem", sm: ".9rem", base: ".7rem" }}
      fontWeight={200}
    >
      {children}
    </Button>
  );
};

export default Btn;
