import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogOverlay,
  Button,
  Card,
  CardBody,
  Circle,
  Divider,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import Btn from "./Btn";
import { HiOutlineLogout } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom";
import { useCheckLogin } from "../store/useCheckLogin";
import { useRef } from "react";

interface Props {
  favB: string;
  cartB: string;
}

const ProfileCart = ({ favB, cartB }: Props) => {
  const { checkLogin, setCheckLogin } = useCheckLogin();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<any>();

  return (
    <Card
      py="1.5rem"
      mr=".5rem"
      ml={{ base: ".5rem", md: "0" }}
      h="100%"
      bg="primaryColor"
      color="cartsColor"
      borderRadius="36px"
      align="center"
      textAlign="center"
    >
      <CardBody as={VStack} spacing="1.2rem">
        <Circle
          size={{ base: "9rem", lg: "12rem" }}
          bg="gray.300"
          pos="relative"
        >
          <Circle
            size="2.7rem"
            bg="cartsColor"
            color="textColor"
            fontSize="2.2rem"
            fontWeight="bold"
            pos="absolute"
            bottom="5%"
            right="-1%"
          >
            +
          </Circle>
        </Circle>
        <Text letterSpacing={2} fontSize={{ base: "1rem", lg: "1.7rem" }}>
          +98 912 345 6789
        </Text>
        <Btn bgColor="cartsColor" color="textColor" onClick={onOpen}>
          <HiOutlineLogout size="1.2rem" />
          <Text as="b" px="1rem">
            Log out
          </Text>
        </Btn>
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent pt="2rem" pb="1rem" borderRadius="30px">
              <AlertDialogBody>
                Are you sure you want to log out?
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  colorScheme="red"
                  onClick={() => setCheckLogin(false)}
                  ml={3}
                >
                  Log Out
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
        <Divider />
        <Link to="/favorite-list">
          <Btn borderColor={favB}>
            <FaHeart />
            <Text px=".7rem">Favorite List</Text>
          </Btn>
        </Link>
        <Link to="/shopping-cart">
          <Btn borderColor={cartB}>
            <SlBasket size="1.2rem" />
            <Text px=".5rem">Shopping Cart</Text>
          </Btn>
        </Link>
      </CardBody>
    </Card>
  );
};

export default ProfileCart;
