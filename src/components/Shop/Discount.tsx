import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogOverlay,
  Box,
  Button,
  Container,
  Heading,
  Image,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import frame from "../../assets/discountFrame.png";
import { useRef } from "react";
import CopyableTextBox from "../CopyableTextBox";

const Discount = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<any>();

  return (
    <Container my="2.5rem">
      <Box
        pos="relative"
        display="grid"
        justifyItems="center"
        alignItems="center"
      >
        <Image src={frame} />
        <VStack
          pos="absolute"
          textAlign="center"
          color="white"
          _dark={{ color: "textColor" }}
        >
          <Heading fontSize="1.3rem" textShadow="1px 1px #000">
            GET 30% OFF
          </Heading>
          <Text w="60%" fontSize={{ xl: ".8rem", base: ".8rem" }}>
            Share your referral code and get discount!
          </Text>
          <Button
            mt=".5rem"
            borderRadius={75}
            h={{ lg: "1.5rem", base: "1.2rem" }}
            px={{ lg: "2.7rem", base: "1.8rem" }}
            fontSize=".7rem"
            color="gray"
            _dark={{ bg: "textColor" }}
            onClick={onOpen}
          >
            Share
          </Button>
          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
          >
            <AlertDialogOverlay>
              <AlertDialogContent pt="2rem" borderRadius="30px">
                <AlertDialogCloseButton />
                <AlertDialogBody>
                  <Text fontSize="lg" px="1rem" align="center">
                    Sorry, This feauture is temporarily unavailable.
                    <br />
                    Use the discount code bellow to enjoy your saving!
                    <CopyableTextBox />
                  </Text>
                </AlertDialogBody>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </VStack>
      </Box>
    </Container>
  );
};

export default Discount;
