import { Collapse, Box, useDisclosure, Link } from "@chakra-ui/react";
import ShopBtn from "./Home/ShopPreview/ShopBtn";
import { ReactNode } from "react";

interface Props {
  label: string;
  children: ReactNode;
}

const CollapsibleBox = ({ label, children }: Props) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Link color='primaryColor' onClick={onToggle}>{label}</Link>
      {/* <ShopBtn onClick={onToggle}>{label}</ShopBtn> */}
      <Collapse
        in={isOpen}
        transition={{
          exit: { delay: 0.1, duration: 1 },
          enter: { duration: 1 },
        }}
        animateOpacity
      >
        <Box p="30px" bg="cartsColor" rounded="md" shadow="md">
          {children}
        </Box>
      </Collapse>
    </>
  );
};

export default CollapsibleBox;
