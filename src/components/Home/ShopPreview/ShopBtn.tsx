import { Button } from "@chakra-ui/react";

interface Props {
  children: string;
  onClick?: () => void;
  active?: boolean;
  disable?: boolean;
}

const ShopBtn = ({
  children,
  onClick,
  active = false,
  disable = false,
}: Props) => {
  return (
    <Button
      onClick={onClick}
      fontSize={{ xl: "1.2rem", lg: ".9rem", sm: ".8rem", base: ".7rem" }}
      fontWeight={200}
      borderRadius={75}
      shadow="lg"
      w={{ xl: "12rem", md: "8.5rem", sm: "7rem", base: "5.4rem" }}
      h={{ xl: "3.6rem", md: "3.3rem", sm: "2rem", base: "1.5rem" }}
      py="1.3rem"
      bgColor={active ? "primaryColor" : "cartsColor"}
      color={active ? "white" : "textColor"}
      borderWidth=".5px"
      borderColor="primaryColor"
      _hover={{
        bgColor: "primaryColor",
        color: "white",
      }}
      isDisabled={disable}
    >
      {children}
    </Button>
  );
};
export default ShopBtn;
