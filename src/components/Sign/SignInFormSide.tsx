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
import { useState } from "react";
import signInUsers from "../../hooks/SignIn";
import { LoginDataType } from "../../types/AuthInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLogin } from "../../store/useLogin";
import { useCheckLogin } from "../../store/useCheckLogin";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "../../schema/zodSchema/LoginSchema";

const SignInFormSide = () => {
  //hook form initialize
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginDataType>({
    resolver: zodResolver(LoginSchema),
  });
  //state
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { loginSaltShow, loginChallengeShow, loginEmailShow } = useLogin();
  const { setCheckLogin } = useCheckLogin();
  const [show, setShow] = useState<boolean>(false);
  const handleClick = () => setShow(!show);

  //submit hadler
  const onSubmit: SubmitHandler<LoginDataType> = async (e) => {
    console.log(e);

    setLoading(true);
    const req = await signInUsers({
      ...e,
      challenge: loginChallengeShow,
      salt: loginSaltShow,
    });
    console.log(req);

    if (req.success) {
      setCheckLogin(true);
      swal({
        icon: "success",
        title: "successfull login",
        timer: 1000,
        buttons: [false],
      });
      localStorage.removeItem("Login");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else {
      swal({
        icon: "warning",
        title: "unsuccessfull login",
        className: "swal-warning",
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
        sign in to account
      </Heading>
      <SocialIcons />
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack w={{ base: "75vw", md: "40vw" }}>
          <InputGroup color="textColor" mb="1rem">
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
              defaultValue={loginEmailShow}
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
          <Btn type="submit">SIGN IN</Btn>
        </VStack>
      </form>
    </VStack>
  );
};

export default SignInFormSide;
