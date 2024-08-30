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
import { useState } from "react";
import checkUserStatus from "../hooks/CheckAuth";
import { useSignUp } from "../store/useSignUp";
import { useLogin } from "../store/useLogin";
import { SubmitHandler, useForm } from "react-hook-form";
import { FirstLevelAuthSchema } from "../schema/zodSchema/FirstLevelAuthSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FirstLevelAuthDataType } from "../types/AuthInput";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

export interface checkAuth {
  success: boolean;
  exist: boolean;
  salt: string;
  challenge: string;
}
const LogInPage = () => {
  //state
  const [loading, setLoading] = useState(false);
  const [authCheck, setAuthCheck] = useState<checkAuth>();
  const navigate = useNavigate();
  //hook form initialize
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FirstLevelAuthDataType>({
    resolver: zodResolver(FirstLevelAuthSchema),
  });

  //stores
  const { setSignUpSalt, setSignUpEmail } = useSignUp();
  const { setLoginChallenge, setLoginSalt, setLoginEmail } = useLogin();

  //submit hadler
  const onSubmit: SubmitHandler<FirstLevelAuthDataType> = async (e) => {
    //show user email
    console.log(e);

    setLoading(true);
    //send user input email to know user might sign up or login and recieve salt or salt with challenge
    //fron hash endpoint
    const req: checkAuth = await checkUserStatus(e);
    //show response
    console.log(req);
    if (req.success) {
      //if success=true this mean is user have an acount and recive salt and challenge from api and
      //redirect user to login page and set email and salt and challenge to login store
      if (req?.exist) {
        setLoginSalt(req.salt);
        setLoginChallenge(req.challenge);
        setLoginEmail(e.email);
        setAuthCheck(req);
        swal({
          icon: "info",
          title: "You have an account",
          timer: 2000,
          buttons: [false],
        });
        setTimeout(() => {
          navigate("/sign-in");
        }, 2000);
      }
      //if success=false this mean is user not have an acount and recive salt from api and
      //redirect user to signup page and set email and salt to signup store
      else {
        setSignUpSalt(req.salt);
        setSignUpEmail(e.email);
        setAuthCheck(req);
        swal({
          icon: "info",
          title: "You need to signUp",
          timer: 2000,
          buttons: [false],
        });
        setTimeout(() => {
          navigate("/sign-up");
        }, 2000);
      }
    } else {
      swal({
        icon: "warning",
        className: "swal-warning",
        title: "Can not connect to api",
        timer: 2000,
        buttons: [false],
      });
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
    setLoading(false);
    reset();
  };

  return (
    <Grid templateColumns="repeat(2,50%)">
      <GridItem bg="primaryColor" h="100vh" pos="relative">
        <Box
          w="80vw"
          pt="2rem"
          bg="white"
          borderColor="primaryColor"
          borderWidth="2px"
          borderRadius={75}
          pos="absolute"
          left="10vw"
          top="15vh"
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputGroup color="textColor" w="80%" my="1rem" mx="auto">
              <InputLeftElement pointerEvents="none">
                <TfiEmail size="1.2rem" />
              </InputLeftElement>
              <Input
                bg="cartsColor"
                placeholder="Email"
                borderRadius={75}
                focusBorderColor="#79A141"
                {...register("email")}
              />
            </InputGroup>
            {errors.email?.message && (
              <Text color="red" textAlign="center">
                {errors.email?.message}
              </Text>
            )}
            <Stack
              direction={{ base: "column", md: "row" }}
              py={{ base: "1rem", md: "2rem" }}
              justify="center"
              align="center"
              spacing={{ base: 2, md: 10 }}
            >
              <Btn type="submit">Submit</Btn>
            </Stack>
          </form>
        </Box>
      </GridItem>
      <GridItem>
        <Box h="100%" borderColor="primaryColor" borderWidth="2px 0"></Box>
      </GridItem>
    </Grid>
  );
};
export default LogInPage;
