import {
  Box,
  Grid,
  GridItem,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import { TfiEmail } from "react-icons/tfi";
import Btn from "../components/Btn";
import { useRef, useState } from "react";
import checkUserStatus from "../hooks/CheckAuth";
import { useSignUp } from "../store/useSignUp";
import { useLogin } from "../store/useLogin";
export interface checkAuth {
  success: boolean;
  exist: boolean;
  salt: string;
  challenge: string;
}
const LogInPage = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [authCheck, setAuthCheck] = useState<checkAuth>()

  //stores
  const { setSignUpSalt, setSignUpEmail } = useSignUp();
  const { setLoginChallenge, setLoginSalt, setLoginEmail } = useLogin();

  //submit hadler
  const onSubmit = async () => {
    //show user email
    console.log(emailRef.current?.value);

    setLoading(true);
    //send user input email to know user might sign up or login and recieve salt or salt with challenge
    //fron hash endpoint
    if (emailRef.current?.value) {
      const req: checkAuth = await checkUserStatus({
        email: emailRef.current?.value,
      });
      //show response
      console.log(req);
      if (req.success) {
        //if success=true this mean is user have an acount and recive salt and challenge from api and
        //redirect user to login page and set email and salt and challenge to login store
        if (req?.exist) {
          setLoginSalt(req.salt);
          setLoginChallenge(req.challenge);
          setLoginEmail(emailRef.current.value);
          setAuthCheck(req);
        }
        //if success=false this mean is user not have an acount and recive salt from api and
        //redirect user to signup page and set email and salt to signup store
        else {
          setSignUpSalt(req.salt);
          setSignUpEmail(emailRef.current.value);
          setAuthCheck(req);
        }
      } else {
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    }
    setLoading(false);
  };

  return (
    <Grid templateColumns="repeat(2,50%)">
      <GridItem bg="primaryColor" h="100vh" pos="relative">
        <Box
          w="70vw"
          //   h="70vh"
          pt="2rem"
          bg="white"
          borderColor="primaryColor"
          borderWidth="2px"
          borderRadius={75}
          pos="absolute"
          left="15vw"
          top="10%"
        >
          <Heading
            fontSize={{ base: "1.4rem", md: "2rem" }}
            textTransform="capitalize"
            color="primaryColor"
            textAlign="center"
          >
            Welcome !
          </Heading>
          <Text
            color="textColor"
            fontSize={{ base: "xs", md: "sm" }}
            textAlign="center"
            pt="2rem"
          >
            Please Enter Your Email Address
          </Text>
          <InputGroup color="textColor" w="80%" my="1rem" mx="auto">
            <InputLeftElement pointerEvents="none">
              <TfiEmail size="1.2rem" />
            </InputLeftElement>
            <Input
              ref={emailRef}
              bg="cartsColor"
              placeholder="Email"
              borderRadius={75}
              focusBorderColor="#79A141"
            />
          </InputGroup>
          <Stack
            direction={{ base: "column", md: "row" }}
            py={{ base: "1rem", md: "2rem" }}
            justify="center"
            align="center"
            spacing={{ base: 2, md: 10 }}
          >
            <Btn type="submit" onClick={onSubmit}>
              Submit
            </Btn>
          </Stack>
        </Box>
      </GridItem>
      <GridItem>
        <Box h="100%" borderColor="primaryColor" borderWidth="2px 0"></Box>
      </GridItem>
    </Grid>
  );
};

export default LogInPage;
