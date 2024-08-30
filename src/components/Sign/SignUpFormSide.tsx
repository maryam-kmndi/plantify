import {
  Button,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import SocialIcons from "./SocialIcons";
import Btn from "../Btn";
import { TfiEmail } from "react-icons/tfi";

import { IoPersonCircleOutline } from "react-icons/io5";
import signInUsers from "../../hooks/SignIn";
import checkUserStatus from "../../hooks/CheckAuth";
import signUpUser from "../../hooks/SignUp";
import { SubmitHandler, useForm } from "react-hook-form";
import { SignUpDataType } from "../../types/AuthInput";
import { useCheckLogin } from "../../store/useCheckLogin";
import { useSignUp } from "../../store/useSignUp";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema } from "../../schema/zodSchema/SignUpSchema";
import { useNavigate } from "react-router-dom";

const SignUpFormSide = () => {
  //hook form import
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignUpDataType>({
    resolver: zodResolver(SignUpSchema),
  });
  //state

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { signUpSaltShow, signUpEmail } = useSignUp();
  const { setCheckLogin } = useCheckLogin();
  const [show, setShow] = useState<boolean>(false);
  const handleClick = () => setShow(!show);

  //submit hadler
  const onSubmit: SubmitHandler<SignUpDataType> = async (e) => {
    //show user inputs
    console.log(e);
    setLoading(true);
    // place required data in one object and pass to call api function
    const signUpPostDetails = { ...e, salt: signUpSaltShow };
    console.log(signUpPostDetails);
    const req = await signUpUser(signUpPostDetails);
    //show call api function response
    console.log(req);
    //if successful signup post user email to hash end point to recieve challenge
    if (req.success) {
      const reqForReciveChallenge = await checkUserStatus({ email: req.email });
      //show receive challenge result
      console.log(reqForReciveChallenge);
      //if success to recieve challenge post required data to login api function
      if (reqForReciveChallenge) {
        const { salt, challenge } = reqForReciveChallenge;
        const reqForLogin = await signInUsers({
          email: e.email,
          password: e.password,
          challenge,
          salt,
        });
        //show login result
        console.log(reqForLogin);

        //if success login show sweet alert and redirect to main page
        if (reqForLogin.success) {
          setCheckLogin(true);
          swal({
            icon: "success",
            title: "successfull signUp and login",
            timer: 1000,
            buttons: [false],
          });
          setTimeout(() => {
            navigate("/");
          }, 1000);
        }
        //if unsuccess login show sweet alert and redirect to first page
        else {
          swal({
            icon: "warning",
            title: "unsuccessfull login after sign up please login",
            timer: 1000,
            buttons: [false],
          });
          setTimeout(() => {
            navigate("/Auth");
          }, 1000);
        }
      }
      ////if unsuccess receive challenge show sweet alert and redirect to first page
      else {
        swal({
          icon: "warning",
          title: "unsuccessfull recieve challenge please go to first page",
          timer: 1000,
          buttons: [false],
        });
        setTimeout(() => {
          navigate("/Auth");
        }, 1000);
      }
    }
    //if unsuccess signup reload page
    else {
      swal({
        icon: "warning",
        title: "unsuccessfull signup",
        timer: 1000,
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
        create account
      </Heading>
      <SocialIcons />
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack w={{ base: "75vw", md: "40vw" }}>
          <InputGroup color="textColor" my=".5rem">
            <InputLeftElement pointerEvents="none">
              <IoPersonCircleOutline size="1.4rem" />
            </InputLeftElement>
            <Input
              type="text"
              bg="cartsColor"
              placeholder="Name"
              borderRadius={75}
              focusBorderColor="#79A141"
              {...register("name")}
            />
          </InputGroup>
          <InputGroup color="textColor" my=".5rem">
            <InputLeftElement pointerEvents="none">
              <TfiEmail size="1.4rem" />
            </InputLeftElement>
            <Input
              type="email"
              bg="cartsColor"
              placeholder="Email"
              borderRadius={75}
              focusBorderColor="#79A141"
              {...register("email")}
              defaultValue={signUpEmail}
              readOnly
            />
          </InputGroup>
          <InputGroup color="textColor" pb="1rem">
            <InputLeftElement pointerEvents="none"></InputLeftElement>
            <Input
              bg="cartsColor"
              placeholder="Password"
              borderRadius={75}
              focusBorderColor="#79A141"
              type={show ? "text" : "password"}
              {...register("password")}
            />
            <InputRightElement width="4.5rem" pr="1rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          {errors.name?.message && (
            <Text
              fontSize="xs"
              color="red"
              textAlign="center"
              letterSpacing="0"
            >
              {errors.name?.message}
            </Text>
          )}
          {errors.password?.message && (
            <Text
              pb="1rem"
              fontSize="xs"
              color="red"
              textAlign="center"
              letterSpacing="0"
            >
              {errors.password?.message}
            </Text>
          )}
          <Btn type="submit">SIGN UP</Btn>
        </VStack>
      </form>
    </VStack>
  );
};

export default SignUpFormSide;
