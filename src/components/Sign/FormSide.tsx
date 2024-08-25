import {
  Button,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import SocialIcons from "./SocialIcons";
import Btn from "../Btn";
import { TfiEmail } from "react-icons/tfi";
import { RiLockPasswordLine } from "react-icons/ri";
import { useState } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";

interface Props {
  h: string;
  b: string;
  NameI?: boolean;
}

const FormSide = ({ h, b, NameI }: Props) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <VStack
      h={{ md: "100vh" }}
      justifyContent="center"
      letterSpacing={{ lg: 2 }}
      py="3rem"
    >
      <Heading
        fontSize={{ base: "2.5rem", lg: "3.5rem" }}
        textTransform="capitalize"
        color="primaryColor"
        textAlign="center"
      >
        {h}
      </Heading>
      <SocialIcons />

      {NameI && (
        <InputGroup color="textColor" w="60%">
          <InputLeftElement pointerEvents="none">
            <IoPersonCircleOutline size="1.4rem" />
          </InputLeftElement>
          <Input
            bg="cartsColor"
            placeholder="Name"
            borderRadius={75}
            focusBorderColor="#79A141"
          />
        </InputGroup>
      )}

      <InputGroup color="textColor" w="60%" my=".5rem">
        <InputLeftElement pointerEvents="none">
          <TfiEmail size="1.4rem" />
        </InputLeftElement>
        <Input
          bg="cartsColor"
          placeholder="Email"
          borderRadius={75}
          focusBorderColor="#79A141"
        />
      </InputGroup>

      <InputGroup color="textColor" w="60%" pb="3rem">
        <InputLeftElement pointerEvents="none">
          <RiLockPasswordLine size="1.5rem" />
        </InputLeftElement>
        <Input
          bg="cartsColor"
          placeholder="Password"
          borderRadius={75}
          focusBorderColor="#79A141"
          type={show ? "text" : "password"}
        />
        <InputRightElement width="4.5rem" pr="1rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>

      <Btn>{b.toUpperCase()}</Btn>
    </VStack>
  );
};

export default FormSide;
